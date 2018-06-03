 //Global Variable
 var interval ;
var check_flag = true;
 //Start button for starting the count/game
 function startGame(){
 var number = document.getElementById("given_num").value;
 var count = 0;
if (number>0 && check_flag){
	check_flag = false;
 interval = setInterval(function () {
	count++;
	document.getElementById("test").innerHTML = count;
	if (count % 3 == 0){
		document.getElementById("box1").style.backgroundColor = 'red';
	}
	else{
		document.getElementById("box1").style.backgroundColor = 'grey';
	}
	if(count % 5 ==0)
	{
		document.getElementById("box2").style.backgroundColor = 'red';
	}
	else{
		document.getElementById("box2").style.backgroundColor = 'grey';
	}
	
	if (count >= number)
	{clearInterval(interval);}
	}, 1000);
}
}

//Reset button for reseting the count/game
function resetGame(){
	check_flag = true;
	clearInterval(interval);
	document.getElementById("given_num").value = "";
	document.getElementById("test").innerHTML = 0;
	document.getElementById("box1").style.backgroundColor = 'grey';
	document.getElementById("box2").style.backgroundColor = 'grey';
}

////Restart button for restarting the count/game
function restartGame(){
	check_flag = true;
	clearInterval(interval);
	document.getElementById("test").innerHTML = 0;
	document.getElementById("box1").style.backgroundColor = 'grey';
	document.getElementById("box2").style.backgroundColor = 'grey';
	startGame();
}
