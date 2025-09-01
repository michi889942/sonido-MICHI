  (function() {
            emailjs.init("08gato88");  // Aquí va tu user_id de EmailJS
        })();

        function enviarFormulario(event) {
            event.preventDefault();  // Evita que la página se recargue al enviar el formulario

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicio').value;
            const fecha = document.getElementById('fecha').value;
            const hora = document.getElementById('hora').value;
            const mensaje = document.getElementById('mensaje').value;
            const contacto = document.getElementById('contacto').value;

            const formData = {
                nombre: nombre,
                servicio: servicio,
                fecha: fecha,
                hora: hora,
                mensaje: mensaje,
                contacto: contacto
            };

            // Enviar el correo utilizando EmailJS
            emailjs.send('service_3brmozo', 'template_b7ccfpg', formData) // Reemplaza 'TU_TEMPLATE_ID' con el ID de tu plantilla
                .then(function(response) {
                    console.log('Correo enviado con éxito:', response);
                    alert('Tu reserva ha sido enviada correctamente. ¡Te contactaremos pronto!');
                    document.getElementById('formReserva').reset();  // Resetear el formulario después de enviarlo
                }, function(error) {
                    console.error('Error al enviar el correo:', error);
                    alert('Hubo un problema al enviar tu reserva. Intenta de nuevo.');
                });
        }