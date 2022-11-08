var btn=document.querySelectorAll(".calculate");
var amounts=document.querySelectorAll(".price");
var total1=document.getElementById("total1");



function calc(){
    let a=this.parentNode.previousElementSibling.previousElementSibling;
    let b=a.innerText;
    let c=parseInt(b);

    let d=this.parentNode.previousElementSibling.firstChild;
    let e=d.value;
    let t=c*e;

    let amount = this.parentNode.nextElementSibling;
    amount.innerText=t;

    let total=0;
    amounts.forEach((amt)=>{
        total=total+parseInt(amt.innerText);
    })

total1.innerText=total;

}
btn.forEach(function(k){
    k.addEventListener("click",calc);
}
)


