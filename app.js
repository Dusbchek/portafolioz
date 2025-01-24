

    // Funcionalidad para mostrar/ocultar divs de información
    const buttons = document.querySelectorAll('[id^="showInfoBtn"]');
    const infoDivs = document.querySelectorAll('[id^="infoDiv"]');


    // Hacemos que los botones muestren/oculten los divs de info
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Buscamos el div relacionado con este botón
            const buttonNumber = this.id.replace('showInfoBtn', '');
            const targetDivId = 'infoDiv' + buttonNumber;
            const targetDiv = document.getElementById(targetDivId);

            if (!targetDiv) return; // Si no hay div, nos salimos

          

            // Mostramos o escondemos el div relacionado
            if (targetDiv.classList.contains('hidden')) {
                targetDiv.classList.remove('hidden');
                setTimeout(() => {
                    targetDiv.classList.remove('opacity-0');
                    targetDiv.classList.remove('translate-y-10');
                }, 10);
            } else {
                targetDiv.classList.add('opacity-0');
                targetDiv.classList.add('translate-y-10');
                setTimeout(() => {
                    targetDiv.classList.add('hidden');
                }, 500);
            }
        });
    });

    // Si haces clic fuera, se cierran todos los divs
    document.addEventListener('click', function(e) {
        if (!e.target.closest('[id^="showInfoBtn"]') && !e.target.closest('[id^="infoDiv"]')) {
            infoDivs.forEach(div => {
                div.classList.add('opacity-0');
                div.classList.add('translate-y-10');
                setTimeout(() => {
                    div.classList.add('hidden');
                }, 500);
            });
        }
    });

  

   