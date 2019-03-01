
    $('document').ready(function(){
    	var counter = 0;
      $('button').click(function(){
      	
      	if(counter>5) {
      		counter = 0;
      	}

      	var colors = ["#e3e81d", "#1de840", "#1ddde8", "#2b1de8", "#dd00f3", "black" ];

        $('body').css('background', colors[counter]);  
        counter = counter+1;
      });
    });
