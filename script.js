// Lógica de Proximidad 2026
document.getElementById('proximity-btn').addEventListener('click', async () => {
    const btn = document.getElementById('proximity-btn');
    btn.innerHTML = "<p>Buscando otros iPhones...</p>";
    
    // Simulación de conexión P2P (Peer to Peer)
    setTimeout(() => {
        alert("📱 ¡Dispositivo Detectado! Sincronizando chat y videos...");
        btn.style.background = "#2ecc71";
        btn.innerHTML = "<p>✅ Datos Enviados por Proximidad</p>";
    }, 2500);
});

// Vinculación de WhatsApp
document.getElementById('btn-sync-wa').addEventListener('click', () => {
    const setup = document.getElementById('wa-setup');
    const qrContainer = document.getElementById('qrcode-container');
    const chatList = document.getElementById('chat-list');
    
    document.getElementById('btn-sync-wa').innerText = "Generando sesión segura...";
    qrContainer.classList.remove('hidden');

    // Simulamos que el usuario escanea el QR
    setTimeout(() => {
        alert("¡Conexión Exitosa con WhatsApp!");
        setup.classList.add('hidden');
        chatList.classList.remove('hidden');
        
        // Empezamos registro de estados
        console.log("Iniciando monitoreo de estados en línea...");
    }, 5000);
});

// Enlace con el sistema de pagos Cuba (Transfermóvil/Enzona)
document.getElementById('pay-module').addEventListener('click', () => {
    const r = confirm("¿Deseas abrir el panel de pagos para este contacto?");
    if(r) {
        window.location.href = "https://tu-usuario.github.io";
    }
});
