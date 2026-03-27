// Lógica PurpleConnect 2026
document.getElementById('proximity-btn').addEventListener('click', async () => {
    const btn = document.getElementById('proximity-btn');
    btn.innerHTML = "<p>Buscando dispositivos cercanos...</p>";
    btn.style.filter = "hue-rotate(45deg)";

    // Simulación de detección por proximidad (NFC/Bluetooth)
    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            console.log("Escaneo NFC activado");
        } catch (error) {
            console.log("NFC no disponible, usando Bluetooth Beacon...");
        }
    }

    // Simulamos que encuentra a alguien en 3 segundos
    setTimeout(() => {
        alert("¡iPhone Detectado! Enviando chat por proximidad...");
        btn.innerHTML = "<p>✅ Chat Enviado con éxito</p>";
        btn.style.background = "#2ecc71"; // Cambia a verde éxito
    }, 3000);
});

// Función para el enlace con la App de Pagos (Transfermóvil/Enzona)
document.getElementById('pay-link').addEventListener('click', () => {
    const confirmPay = confirm("¿Deseas abrir el módulo de pagos para este contacto?");
    if(confirmPay) {
        window.location.href = "https://tu-usuario.github.io"; // Aquí irá tu otra app
    }
});

// Monitor de "En Línea" (Simulación de Log)
function trackStatus(contacto) {
    const ahora = new Date().toLocaleTimeString();
    console.log(`[LOG 2026] ${contacto} se conectó a las ${ahora}`);
              }
      
