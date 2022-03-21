function cal(){
    var ano =document.querySelector("input#ano").value
    var res= document.querySelector("div.res")

    var idade = ano - 1918

    if(ano.length == 4){
        if(ano >=1918){
            res.innerHTML=`Ele teria ${idade} ano(s)`
        }else{
            res.innerHTML="O Capitão América nasceu em 1918, não é possível fazer o cálculo"
        }
    }else{
        alert("Somente permito anos com 4 digitos")
    }
}