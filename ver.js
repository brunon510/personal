const messages = [
    "sei l'amore della mia vita",
    "Te adoro",
    "Te necesito",
    "Eres lo más importante para mí",
    "Amor mío",
    "Amo tu sonrisa",
    "Amo tus bellos ojos",
    "Siempre quiero estar con vos",
    "Adoro cada momento a tu lado",
    "Luz de mi vida",
    "Gracias por estar en mi vida",
    "Adoro la calides que me haces sentir",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubble-text");  // ✅ Corrección aquí
    container.appendChild(bubble);

    // Ajuste si se sale de pantalla
    setTimeout(() => {
        const rect = bubble.getBoundingClientRect();

        if (rect.right > window.innerWidth) {
            const newleft = window.innerWidth - rect.width - 10;
            bubble.style.left = `${newleft}px`;
        }
        if (rect.bottom > window.innerHeight) {
            const newtop = window.innerHeight - rect.height - 10;
            bubble.style.top = `${newtop}px`;
        }
        if (rect.left < 0) {
            bubble.style.left = "10px";
        }
        if (rect.top < 0) {
            bubble.style.top = "10px";
        }
    }, 10);

    // Elimina la burbuja después de 8 segundos
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);
