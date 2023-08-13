const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('#form input')

const expresiones = {
	Name: /^.{4,100}$/, 
	Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    Name: false,
    Email: false
}


const validarFormulario = (e) => {
    switch (e.target.name){
        case "name":
            validarCampo(expresiones.Name, e.target,'Name');
        break
        case "email":
            validarCampo(expresiones.Email, e.target, 'Email')
        break
    }
}


const validarCampo = (exprecion,input,campo) =>{
    if(exprecion.test(input.value)){
        document.getElementById(`grupo${campo}`).classList.remove('grupoIncorreto')
        document.getElementById(`grupo${campo}`).classList.add('grupoCorreto')
        document.querySelector(`#grupo${campo} span`).classList.remove('fa-circle-xmark')
        document.querySelector(`#grupo${campo} span`).classList.add('fa-circle-check')
        campos[campo]=true
    }
    else {
        document.getElementById(`grupo${campo}`).classList.remove('grupoCorreto')
        document.getElementById(`grupo${campo}`).classList.add('grupoIncorreto')
        document.querySelector(`#grupo${campo} span`).classList.remove('fa-circle-check')
        document.querySelector(`#grupo${campo} span`).classList.add('fa-circle-xmark')
        campos[campo]=false
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario)
    input.addEventListener('blur',validarFormulario)
})



formulario.addEventListener('submit',(e) => {

    if (campos.Name && campos.Email){
        formulario.reset();
    }
    else{

    }
})












const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_7hbmeex';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                alert('Mensaje Enviado!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert('Error al enviar Mensaje!');
                alert(JSON.stringify(err));
            });
    });