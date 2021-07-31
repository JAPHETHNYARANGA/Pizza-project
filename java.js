let open = document.querySelector('.fa-bars');
let sideBar = document.querySelector('.navigation');

open.addEventListener('click', ()=>{
    sideBar.style.width="250px";
})

var price , crustprice, toppingprice;
let total = 0;

function getOrder(name, size, crust, topping, total){
    this.name = name;
    this.size= size;
    this.crust = crust;
    this.topping=topping;
    this.total=total;
}


$(document).ready(function(){
    $("button.checkout").click(function(event){
        var pizzaname =$(".pizzaname option:selected").val();
        var pizzasize =$(".pizzasize option:selected").val();
        var pizzacrust=$(".pizzacrust option:selected").val();
        var pizzatopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            pizzatopping.push($(this).val());

    })
})