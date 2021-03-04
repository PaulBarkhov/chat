document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("button").addEventListener("click", () => {
        const messageText = document.querySelector("input").value;
        const message = document.createElement("div");
        message.innerHTML = `<p class="message2">${messageText}</p>`;
        document.querySelector("main").append(message);
        document.querySelector("input").value = "";
    });

});