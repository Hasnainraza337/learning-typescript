const btn = document.querySelector("#clickMe");
const body = document.body;
let isWhite = false;
btn.addEventListener("click", ()=>{
    if (isWhite) body.style.backgroundColor = "";
    else body.style.backgroundColor = "#dd5976";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.86da7ba5.js.map
