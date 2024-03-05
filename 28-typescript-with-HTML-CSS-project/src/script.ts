const btn = document.querySelector("#clickMe") as HTMLButtonElement
const body: HTMLElement = document.body;
let isWhite: boolean = false




btn.addEventListener("click", () => {
    if (isWhite) {
        body.style.backgroundColor = ""
    } else {
        body.style.backgroundColor = "#dd5976"
    }

    isWhite = !isWhite
})