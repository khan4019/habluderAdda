

$(".ansbtn").click(function() {
  
    var lable = $(".ansbtn").text().trim();
 
    if(lable == "Hide Answer") {
      $(".ansbtn").text("Show Answer");
      $(".answer-show").hide();
    }
    else {
      $(".ansbtn").text("Hide Answer");
      $(".answer-show").show();
    }
   });
 


 
