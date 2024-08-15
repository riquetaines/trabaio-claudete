console.log("Script Carregado");

function calcularAnos() {
    console.log("botão de Calcular clicando");

    let popAInput = document.getElementById("popA").value;
    let taxaAInput = document.getElementById("taxaA").value;
    let popBInput = document.getElementById("popB").value;
    let taxaBInput = document.getElementById("taxaB").value;

    if (popAInput === "" || taxaAInput === "" || popBInput === "" || taxaBInput === "") {
        alert("Por favor, preencha todos os campos");
        return;
    }

    let popA = parseInt(popAInput);
    let taxaA = parseFloat(taxaAInput) / 100;
    let popB = parseInt(popBInput);
    let taxaB = parseFloat(taxaBInput) / 100;

    let anos = 0;

    while (popA < popB) {
        popA *= (1 + taxaA);
        popB *= (1 + taxaB);
        anos++;
    }

    console.log(`Número de anos calculados: ${anos}`);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B`;
}

function limparCampos() {
    console.log("Botão de Limpar Campos");

    document.getElementById("popA").value = "";
    document.getElementById("taxaA").value = "";
    document.getElementById("popB").value = "";
    document.getElementById("taxaB").value = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}

// a propriedade innerHTML é usada para acessar ou mudar o conteudo HTML de um elemento