
    $('document').ready(function(){
    	var counter = 0;
      $('button').click(function(){
      	
      	if(counter>9) {
      		counter = 0;
      	}

      	var colors = ["#e6261f", "#eb7532", "#f7d038", "#a3e048", "#49da9a","#34bbe6","#4355db","#d23be7", "black" ];

        $('body').css('background', colors[counter]);  
        counter = counter+1;
      });
    });
