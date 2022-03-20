let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let mensagem = document.getElementById("mensagem");
let p = document.getElementsByClassName('campoObrigatorio')

function validar(e) {

    if (nome.value == "") {
        alert("Nome não informado");
        e.preventDefault();
        nome.style.border = '1px solid red'
        p[0].innerHTML = 'campo obrigatório'
        return;
    } else {
        nome.style.border = '1px solid #00C22B'
        p[0].innerHTML = ''
    }

    if (email.value == "") {
        alert("E-mail não informado");
        e.preventDefault();
        email.style.border = '1px solid red'
        p[1].innerHTML = 'campo obrigatório'
        return;
    } else {
        email.style.border = '1px solid #00C22B'
        p[1].innerHTML = ''
    }

    if (telefone.value == "") {
        alert("Telefone não informado");
        e.preventDefault();
        telefone.style.border = '1px solid red'
        p[2].innerHTML = 'campo obrigatório'
        return;
    } else {
        telefone.style.border = '1px solid #00C22B'
        p[2].innerHTML = ''
    }

    if (mensagem.value == "Mensagem *") {
        alert("Mensagem não informada");
        e.preventDefault();
        mensagem.style.border = '1px solid red'
        p[3].innerHTML = 'campo obrigatório'
        return;
    } else {
        mensagem.style.borderColor = '1px solid #00C22B'
        p[3].innerHTML = ''
    }

    alert("Formulário enviado!");

}