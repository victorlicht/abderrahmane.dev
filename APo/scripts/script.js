document.addEventListener("DOMContentLoaded", () => {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const whiteModeBtn = document.getElementById("white-mode-btn");

    darkModeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    });

    whiteModeBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    });


});
