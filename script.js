const modelos = [
    {
        id: 1,
        nome: "Eco Compact",
        area: 30,
        valorBase: 2500,
        descricao: "Modelo compacto, ideal para quem busca praticidade e aproveitamento inteligente do espaço.",
        imagem: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nome: "Eco Family",
        area: 60,
        valorBase: 2500,
        descricao: "Uma proposta confortável para famílias, com ambientes integrados e funcionais.",
        imagem: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nome: "Eco Premium",
        area: 90,
        valorBase: 2500,
        descricao: "Modelo amplo, com proposta contemporânea e maior possibilidade de personalização.",
        imagem: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    }
];

const STORAGE_KEY = "ecoconteiner_solicitacoes";

// Elementos da página
const modelGrid = document.getElementById("modelGrid");
const modelSelect = document.getElementById("model");
const budgetForm = document.getElementById("budgetForm");
const requestList = document.getElementById("requestList");
const requestCount = document.getElementById("requestCount");
const formFeedback = document.getElementById("formFeedback");

// Formata valores em reais
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Calcula estimativa ilustrativa
function calcularEstimativa(modelo, area) {
    return modelo.valorBase * area;
}

// Busca modelo pelo identificador
function buscarModelo(id) {
    return modelos.find(modelo => modelo.id === Number(id));
}

// Carrega catálogo
function carregarModelos() {
    modelGrid.innerHTML = "";

    modelos.forEach(modelo => {
        const card = document.createElement("article");
        card.className = "model-card";

        const imagem = document.createElement("img");
        imagem.src = modelo.imagem;
        imagem.alt = "Modelo " + modelo.nome;
        imagem.loading = "lazy";

        const info = document.createElement("div");
        info.className = "model-info";

        const titulo = document.createElement("h3");
        titulo.textContent = modelo.nome;

        const descricao = document.createElement("p");
        descricao.textContent = modelo.descricao;

        const meta = document.createElement("div");
        meta.className = "model-meta";

        const area = document.createElement("span");
        area.textContent = modelo.area + " m²";

        const valor = document.createElement("strong");
        valor.textContent = "Estimativa: " +
            formatarMoeda(calcularEstimativa(modelo, modelo.area));

        const botao = document.createElement("button");
        botao.className = "button primary";
        botao.textContent = "Solicitar orçamento";

        botao.addEventListener("click", () => {
            modelSelect.value = String(modelo.id);
            document.getElementById("orcamento").scrollIntoView({
                behavior: "smooth"
            });
        });

        meta.append(area, valor);
        info.append(titulo, descricao, meta, botao);
        card.append(imagem, info);
        modelGrid.appendChild(card);

        const option = document.createElement("option");
        option.value = modelo.id;
        option.textContent = modelo.nome;
        modelSelect.appendChild(option);
    });
}

// Recupera solicitações do navegador
function obterSolicitacoes() {
    try {
        const dados = localStorage.getItem(STORAGE_KEY);
        const solicitacoes = dados ? JSON.parse(dados) : [];

        return Array.isArray(solicitacoes) ? solicitacoes : [];
    } catch (erro) {
        console.error("Erro ao recuperar solicitações:", erro);
        return [];
    }
}

// Salva solicitações no navegador
function salvarSolicitacoes(solicitacoes) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(solicitacoes));
        return true;
    } catch (erro) {
        console.error("Erro ao salvar solicitações:", erro);
        return false;
    }
}

// Exibe solicitações no painel
function carregarSolicitacoes() {
    const solicitacoes = obterSolicitacoes();

    requestCount.textContent =
        solicitacoes.length + (solicitacoes.length === 1
            ? " solicitação"
            : " solicitações");

    requestList.innerHTML = "";

    if (solicitacoes.length === 0) {
        const linha = document.createElement("tr");
        const celula = document.createElement("td");

        celula.colSpan = 5;
        celula.className = "empty";
        celula.textContent = "Nenhuma solicitação registrada.";

        linha.appendChild(celula);
        requestList.appendChild(linha);
        return;
    }

    solicitacoes.forEach(solicitacao => {
        const linha = document.createElement("tr");

        const dados = [
            solicitacao.nome,
            solicitacao.modelo,
            solicitacao.area + " m²",
            formatarMoeda(solicitacao.valorEstimado)
        ];

        dados.forEach(valor => {
            const celula = document.createElement("td");
            celula.textContent = valor;
            linha.appendChild(celula);
        });

        const statusCelula = document.createElement("td");
        const status = document.createElement("span");

        status.className = "status";
        status.textContent = solicitacao.status;

        statusCelula.appendChild(status);
        linha.appendChild(statusCelula);

        requestList.appendChild(linha);
    });
}

// Valida e registra uma solicitação
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formFeedback.textContent = "";
    formFeedback.className = "feedback";

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const modeloId = modelSelect.value;
    const area = Number(document.getElementById("area").value);
    const mensagem = document.getElementById("message").value.trim();

    const modelo = buscarModelo(modeloId);

    if (!nome || !email || !modelo) {
        mostrarFeedback("Preencha os campos obrigatórios.", "error");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        mostrarFeedback("Informe um e-mail válido.", "error");
        return;
    }

    if (!Number.isFinite(area) || area < 10 || area > 500) {
        mostrarFeedback("A área deve estar entre 10 e 500 m².", "error");
        return;
    }

    const valorEstimado = calcularEstimativa(modelo, area);

    const solicitacao = {
        id: Date.now(),
        nome,
        email,
        modelo: modelo.nome,
        modeloId: modelo.id,
        area,
        mensagem,
        valorEstimado,
        status: "Pendente",
        data: new Date().toISOString()
    };

    const solicitacoes = obterSolicitacoes();
    solicitacoes.push(solicitacao);

    if (!salvarSolicitacoes(solicitacoes)) {
        mostrarFeedback(
            "Não foi possível armazenar a solicitação neste navegador.",
            "error"
        );
        return;
    }

    mostrarFeedback(
        "Solicitação registrada! Estimativa ilustrativa: " +
        formatarMoeda(valorEstimado),
        "success"
    );

    budgetForm.reset();
    carregarSolicitacoes();

    document.getElementById("painel").scrollIntoView({
        behavior: "smooth"
    });
});

// Exibe mensagens do formulário
function mostrarFeedback(mensagem, tipo) {
    formFeedback.textContent = mensagem;
    formFeedback.className = "feedback " + tipo;
}

// Limpa registros com confirmação
document.getElementById("clearRequests").addEventListener("click", () => {
    const confirmar = window.confirm(
        "Deseja realmente apagar todas as solicitações deste navegador?"
    );

    if (!confirmar) return;

    if (salvarSolicitacoes([])) {
        carregarSolicitacoes();
        mostrarFeedback("Registros removidos.", "success");
    } else {
        mostrarFeedback("Não foi possível remover os registros.", "error");
    }
});

// Menu para dispositivos móveis
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const aberto = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(aberto));
});

navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Inicialização
carregarModelos();
carregarSolicitacoes();
menuToggle.setAttribute("aria-expanded", "false");