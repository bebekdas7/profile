const inp= document.getElementById("entry");
const buttons= document.querySelectorAll("button");
let ans= "";
let arr= Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML== "="){
            ans= eval(ans);
            inp.value= ans;  
        }
        else if(e.target.innerHTML== "AC"){
            ans= "";
            inp.value= ans;
        }else if(e.target.innerHTML== "DEL"){
            ans= ans.substring(0, ans.length-1);
            inp.value= ans;
        }else{
            ans +=e.target.innerHTML;
            inp.value= ans;
        }
    })
})










