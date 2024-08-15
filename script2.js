//item 1
console.log("Script Carregado");

//item 2
function calcularAnos() {
//item 3
    console.log("botão de Calcular clicando");

//item 4
    let popAInput = document.getElementById("popA").value.trim();
//item 5
    let taxaAInput = document.getElementById("taxaA").value.trim();
//item 6
    let popBInput = document.getElementById("popB").value.trim();
//item 7    
    let taxaBInput = document.getElementById("taxaB").value.trim();

//item 8
    if (popAInput === "" || taxaAInput === "" || popBInput === "" || taxaBInput === "") {
//item 9
        alert("Por favor, preencha todos os campos");
//item 10
        return;
    }
//item 11
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
