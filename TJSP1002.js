function mon(){
    var a = window.document.getElementById('benter');
    a.style.background = `linear-gradient( to right, rgb(54, 0, 0), rgb(108, 0, 0))`;
    a.style.color = `white`;
}
function moff(){
    var a = window.document.getElementById('benter');
    a.style.background = `white`;
    a.style.color = `rgb(54, 0, 0)`;
}

function logar() {
    var nome = window.document.getElementById('nomedu').value;
    var senha = window.document.getElementById('senhadu').value;

    if (nome == "admin" && senha == "admin") {
        window.alert("Login feito com sucesso");
        window.location.href = `MiniCaixa.html`; //Aqui voce coloca o nome do arquivo html para onde voce quer redirecionar (obs.: coloque o nome do arquivo entre os ``)
    } else {
        window.alert("Erro! Favor verificar dados");
    }
}