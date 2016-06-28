$(function(){
  var carNum=1;
  $("#carForm").on("submit", function(event){
      event.preventDefault();
      var make=$("#make").val();
      var model=$("#model").val();
      var year=$("#year").val();
      var color=$("#color").val();
      var rating=$("#rating").val();
      var price=$("#price").val();
      var car1 = new Car(make, model, year, color, rating, price);
      $("article").append("<div><ul></ul></div>");
      $("div:last").addClass("carDisplay").prepend("<h4>Car "+ carNum + "</h4><button class =\"remove\">Remove</button> ");
      carNum++;
      $("ul:last").append("<li>Make: "+make+"</li>");
      $("ul:last").append("<li>Model: "+model+"</li>");
      $("ul:last").append("<li>Year: "+year+"</li>");
      $("ul:last").append("<li>Color: "+color+"</li>");
      $("ul:last").append("<li>Rating: "+rating+"</li>");
      $("ul:last").append("<li>Price: $"+price+"</li>");
      $("button").on("click",function(){
        $(this).parent().remove();
      });
      if(car1.rating>=4){
        $("div:last").addClass("goodCar");
      }
      else if(car1.rating <=2 && car1.rating >0){
        $("div:last").addClass("badCar");
      }
  });
  function Car(make, model, year, color, rating, price){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.rating=rating;
    this.price=price;
  }

});
