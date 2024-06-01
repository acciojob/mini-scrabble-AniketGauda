//your code here
let inp = document.getElementById("evaluatedText");

let ans = document.getElementById("letterCount")

let cnt=0;

inp.addEventListener("keydown",(e)=>{
    if(e.key!='Backspace')
        cnt++;
    else
        cnt--;
    
    if(cnt<0)
        ans.textContent = `0`;
    else
        ans.textContent = `${cnt}`;
})