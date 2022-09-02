var player = {
      left: 40,
      top: 250
  }
  var cell = {
      left: 800,
      top: 250
  }

  function drawCell(){
      
  }
  function drawPlayer(){
      content = "<div class='player' style='left:"+player.left+"px; top:"+player.top+"px'></div>";
      document.getElementById("players").innerHTML = content;
  }
  drawPlayer();

  document.onkeydown = function(e) {
      console.log(e);
      if(e.keyCode == 37 && player.left > 10){ // left
          player.left = player.left - 10;
      }
      if(e.keyCode == 39 && player.left < 840){ // right
          player.left = player.left + 10;
      }
      if(e.keyCode == 38 && player.top > 8){ // UP
          player.top = player.top - 10;
      }
      if(e.keyCode == 40 && player.top < 540){ // DOWN
          player.top = player.top + 10;
      }
      drawPlayer();
  }