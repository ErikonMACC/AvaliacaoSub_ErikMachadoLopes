var form = document.querySelector("form");
var confirmacao = document.querySelector(".confirmacao");

function confirmarDados() {
    alert("Formulário enviado!!!");
    window.location.href = "../index.html";
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var dataNasc = document.getElementById("dataNasc").value;
    var ondeConheceu = document.getElementById("ondeConheceu").value;
    var mensagem = document.getElementById("mensagem").value;

    confirmacao.innerHTML = `
        <h2>CONFIRMAÇÃO DE DADOS</h2>
        <p>Nome: ${nome}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${telefone}</p>
        <p>Data de Nascimento: ${dataNasc}</p>
        <p>Onde nos conheceu: ${ondeConheceu}</p>
        <p>Mensagem: ${mensagem}</p>
        <button onclick="confirmarDados()" id="botaoConfirmar">Confirmar</button>`;    
})