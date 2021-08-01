let open = document.querySelector('.fa-bars');
let sideBar = document.querySelector('.navigation');

open.addEventListener('click', ()=>{
    sideBar.style.width="250px";
})


//logic for the input form

$(document).ready(function() {
      $("#text-center").submit(function(event) {
        
        function pizzaname() {
          var pizzaFlavour = document.getElementById("pizzaname").value;
          return parseInt(pizzaFlavour);
        }
       
        function orderNumber() {
            var orderNumber = document.getElementById("orderNumber").value;
            return parseInt(orderNumber);
          }
        function pizzacrust() {
          var pizzacrust = document.getElementById("pizzacrust").value;
          return parseInt(pizzacrust);
        }
        function pizzasize() {
            var pizzasize = document.getElementById("pizzasize").value;
            return parseInt(pizzasize);
          }
        function pizzatopping() {
          var pizzatopping = document.getElementById("pizzatopping").value;
          return parseInt(pizzatopping);
        }
       
    
        
        function getOrder(pizzaname, pizzasize, pizzacrust, pizzatopping, orderNumber) {
          this.newpizzaname = pizzaname;
          this.newpizzasize = pizzasize;
          this.newpizzacrust = pizzacrust;
          this.newpizzatopping = pizzatopping;
          this.neworderNumber = orderNumber;
        }
    
     
        var getInput = new getOrder(pizzaname(), pizzasize(), pizzacrust(), pizzatopping(), orderNumber());
    
        var totalCost =
          (getInput .newpizzasize +
            getInput .newpizzacrust +
            getInput .newpizzatopping +
            getInput .newpizzaname) *
            getInput .neworderNumber;
    
        var finalCost = parseInt(totalCost + 200);
        alert("Your charges for Pizza" + totalCost);
        if (confirm('Do you want delivery?')) {
            var name = prompt("Please Enter Your location")
            alert('Delivery will cost you a total of ksh 200')
            alert('Your pizza will be delivered to ' + name + ' your total cost is ksh ' + finalCost);
          } else {
            // Do nothing!
            alert("Please pick your pizza from Nyaranga's Hub");
          }
       
        $("#myform").reset();

        event.preventDefault();
      });
    });
    $(document).ready(function(){
      $("#paps").mouseover(function(){
        $(".po1").show();
      }).mouseout(function(){
        $(".po1").hide();
      });
    });
    $(document).ready(function(){
      $(".cheese").mouseover(function(){
        $(".po2").show();
      }).mouseout(function(){
        $(".po2").hide();
      });
    });
    $(document).ready(function(){
      $(".chickenbbq").mouseover(function(){
        $(".po3").show();
      }).mouseout(function(){
        $(".po3").hide();
      });
    });
    $(document).ready(function(){
      $(".Buffalo").mouseover(function(){
        $(".po4").show();
      }).mouseout(function(){
        $(".po4").hide();
      });
    });
    $(document).ready(function(){
      $(".Hawii").mouseover(function(){
        $(".po5").show();
      }).mouseout(function(){
        $(".po5").hide();
      });
    });
    $(document).ready(function(){
      $(".Meat").mouseover(function(){
        $(".po6").show();
      }).mouseout(function(){
        $(".po6").hide();
      });
    });

   
    