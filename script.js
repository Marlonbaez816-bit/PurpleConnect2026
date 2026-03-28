// 1. Lógica de Proximidad con Envío Real (Web Share API)
document.getElementById('proximity-btn').addEventListener('click', async () => {
    const btn = document.getElementById('proximity-btn');
    const text = document.getElementById('beam-text');

    // Datos que se enviarán al acercar los teléfonos
    const shareData = {
        title: 'PurpleConnect Chat',
        text: 'Te envío mis datos y archivos por proximidad morada 2026',
        url: window.location.href
    };

    try {
        // Intenta abrir el menú nativo de envío de iOS/Android
        await navigator.share(shareData);
        btn.classList.add('success');
        text.innerText = "✅ Chat Enviado con éxito";
    } catch (err) {
        // Si el usuario cancela o el móvil no lo soporta
        console.log("Compartición cancelada o no soportada");
    }
});

// 2. Generación de QR Real para WhatsApp
document.getElementById('btn-sync-wa').addEventListener('click', () => {
    const setup = document.getElementById('wa-setup');
    const qrContainer = document.getElementById('qrcode-container');
    const btn = document.getElementById('btn-sync-wa');
    
    btn.innerText = "Generando sesión segura...";
    
    // Generamos un QR real (Simulación de enlace de sesión)
    setTimeout(() => {
        qrContainer.classList.remove('hidden');
        new QRCode(document.getElementById("qrcode"), {
            text: "https://wa.me", // URL de prueba
            width: 180,
            height: 180,
            colorDark : "#6A0DAD",
            colorLight : "#ffffff"
        });
        
        // Simulación de éxito tras 10 segundos
        setTimeout(() => {
            setup.classList.add('hidden');
            document.getElementById('chat-list').classList.remove('hidden');
            alert("¡WhatsApp Sincronizado!");
        }, 10000);
    }, 2000);
});

// 3. Enlace con la App de Pagos Cuba
document.getElementById('pay-module').addEventListener('click', () => {
    if(confirm("¿Abrir panel de pagos para este contacto?")) {
        window.location.href = "https://tu-usuario.github.io";
    }
});
