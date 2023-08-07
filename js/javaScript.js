
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