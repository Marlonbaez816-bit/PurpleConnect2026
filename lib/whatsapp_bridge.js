// Este código genera un link "Deep Link" que WhatsApp reconoce
function enviarPorWhatsApp(telefono, mensaje, archivoUrl = "") {
    // Si hay un archivo (video/foto), lo preparamos
    let url = `https://wa.me{telefono}?text=${encodeURIComponent(mensaje)}`;
    
    if(archivoUrl !== "") {
        console.log("Adjuntando archivo al envío de proximidad...");
        // En 2026 usaremos el Web Share API para archivos pesados
        if (navigator.share) {
            navigator.share({
                title: 'Envío PurpleConnect',
                text: mensaje,
                url: archivoUrl,
            });
        }
    } else {
        window.open(url, '_blank');
    }
    }
