const generar = () => {
    const form = document.querySelector("#form");
    const result = document.querySelector("#result");
    
    form.classList.add("hidden");
    result.classList.remove("hidden");
}

const volver = () => {
    result.classList.add("hidden");
    form.classList.remove("hidden");
}
