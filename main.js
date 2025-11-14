let habilidadesAdicionadas = []
let vetorErros = [] // Este vetor será limpo a cada validação
let areaFeedback = document.getElementById("area-feedback")

function adicionarHabilidade() {
    let habilidadeDigitada = document.getElementById("nova-habilidade").value
    if (habilidadeDigitada.trim() !== "") {
        habilidadesAdicionadas.push(habilidadeDigitada)
        let listaHabilidades = document.getElementById("lista-habilidades")

        // Atualiza a lista de forma mais robusta
        listaHabilidades.innerHTML = "<ul>"
        habilidadesAdicionadas.forEach(habilidade => {
            listaHabilidades.innerHTML += `<li>${habilidade}</li>`
        });
        listaHabilidades.innerHTML += "</ul>"

        // Limpa o input
        document.getElementById("nova-habilidade").value = ""
    }
}

function validarFormulario() {
    vetorErros = []
    areaFeedback.innerHTML = ""

    // 2. Busca os valores DOS CAMPOS *no momento* do clique
    let nomeDigitado = document.getElementById("nome").value
    let cpfDigitado = document.getElementById("cpf").value
    let emailDigitado = document.getElementById("email").value

    // 3. Executa as checagens
    checarNome(nomeDigitado)
    checarCPF(cpfDigitado)
    checarEmail(emailDigitado)
    checarInteresse()
    checarHabilidades()
    exibirFeedback(vetorErros)
}

function checarNome(nomeDigitado) {
    if (nomeDigitado.trim() == "") {
        adicionarErro("Nome não pode estar vazio.")
    }
}

function checarCPF(cpf) {
    if (cpf.trim() == "") {
        adicionarErro("CPF não pode estar vazio.")
        return
    }

    if (!validarDigitosCPF(cpf)) {
        adicionarErro("CPF inválido.")
    }
}


function validarDigitosCPF(cpf) {
    const cpfLimpo = cpf.replace(/[.\-]/g, "")
    if (cpfLimpo.length !== 11) {
        return false
    }

    return true
}

function checarEmail(emailDigitado) {
    if (emailDigitado.trim() == "") {
        adicionarErro("Email não pode estar vazio.");
        return;
    }

    if (!emailDigitado.includes('@') || !emailDigitado.includes('.com')) {
        adicionarErro("Email inválido (deve conter '@' e '.com').");
    }
}

function checarInteresse() {
    const interesseSelecionado = document.querySelector('input[name="interesse"]:checked');
    if (!interesseSelecionado) {
        adicionarErro("Você deve selecionar um interesse.");
    }
}

function checarHabilidades() {
    const habilidadeRadioSelecionada = document.querySelector('input[name="habilidades"]:checked');
    if (!habilidadeRadioSelecionada && habilidadesAdicionadas.length === 0) {
        adicionarErro("Você deve selecionar ou adicionar pelo menos uma habilidade.");
    }
}

function adicionarErro(erro) {
    vetorErros.push(erro)
}

function exibirFeedback(vetorErros) {
    if (vetorErros.length > 0) {
        let listaErrosHTML = "<strong>Corrija os seguintes erros:</strong><ul>"
        for (let i = 0; i < vetorErros.length; i++) {
            listaErrosHTML += `<li>${vetorErros[i]}</li>`
        }
        listaErrosHTML += "</ul>"
        areaFeedback.innerHTML = listaErrosHTML
        areaFeedback.style.color = "red"
    } else {
        areaFeedback.innerHTML = "Formulário enviado com sucesso!"
        areaFeedback.style.color = "green"
    }
}