let inp = document.getElementById("evaluatedText");

let ans = document.getElementById("letterCount")


inp.addEventListener("keyup",(e)=>{
    ans.textContent = `${inp.value.length}`
})