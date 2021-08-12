$(".card-loja").click(function(){
    $(this).toggleClass("flip");
});

//Changes the advantages colors at donation's page
var tableBody = document.getElementById("table-body");
for(tableChildren of tableBody.children){
    for(element of tableChildren.children){
        if(element.innerText == "Sim"){
            element.classList.add("text-green")
        }else if(element.innerText == "Não"){
            element.classList.add("text-reddanger")
        }
    }
}
