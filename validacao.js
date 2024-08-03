function validarFormulario(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const erroMsg = document.getElementById('erro-msg');
    let mensagensErro = [];

  
    erroMsg.textContent = '';
    erroMsg.style.display = 'none'; 

   
    if (usuario === '' || usuario.length < 3) {
        mensagensErro.push('O usuário deve ter pelo menos 3 caracteres.');
    }
    
   
    if (senha === '' || senha.length < 6) {
        mensagensErro.push('A senha deve ter pelo menos 6 caracteres.');
    }

   
    if (mensagensErro.length > 0) {
        erroMsg.innerHTML = mensagensErro.join('<br>');
        erroMsg.style.display = 'block';
        return false;
    }

    
    alert('Formulário enviado com sucesso!');
    return true;
}


document.querySelector('.button-login').addEventListener('click', validarFormulario);
