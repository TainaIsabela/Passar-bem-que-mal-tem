var vis=0, aud=0, sin=0;

function Teste()
{
     

	but = document.getElementById("but");
	radio = document.getElementById("1");
	radio2 = document.getElementById("2");
	radio3 = document.getElementById("3");
	radio4 = document.getElementById("4");
	radio6 = document.getElementById("6");
	radio7 = document.getElementById("7");
	radio8 = document.getElementById("8");
	radio9 = document.getElementById("9");
	radio10 = document.getElementById("10");
	radio11 = document.getElementById("11");
	radio12 = document.getElementById("12");
	radio13 = document.getElementById("13");
	radio14 = document.getElementById("14");
	radio15 = document.getElementById("15");
	
	/*Questão 1*/	
	if (radio.checked == true) {
		vis = vis + 1;
	}
	if (radio2.checked == true) {
		sin = sin + 1;
	}
	if (radio3.checked == true) {
		aud = aud + 1;
	}
	/*Questão 2*/
	if (radio4.checked == true) {
		sin = sin + 1;
	}
	/*Questão 3*/
	if (radio6.checked == true) {
		vis = vis + 1;
	}
	if (radio7.checked == true) {
		aud = aud + 1;
	}
	/*Questão 4*/
	if (radio9.checked == true){
		vis = vis + 1;
	}
	/*Questão 5*/
	if (radio11.checked == true){
		vis = vis + 1;
	}
	if (radio12.checked == true){
		aud = aud + 1;
	}
	if (radio13.checked == true){
		sin = sin + 1;
	}
	/*Questão 6*/
	if (radio14.checked == true){
		aud = aud + 1;
	}
    
  
  

	/*Comparações*/
	/*Aud*/
	if (aud>vis && aud==sin){
		alert('Parabéns, você tem as inteligências auditiva e sinestésica na mesma intensidade');
		if (document.getElementById("res").style.display == 'none'){
			document.getElementById("res").style.display = 'block';
		}
	} else if (aud>sin && aud== vis){
		alert('Parabéns, você tem as inteligências auditiva e visual na mesma intensidade');
	} else if (aud>sin && aud>vis){
		alert('Parabéns, você é auditivo');
	}/*Vis*/else if (vis>aud && vis==sin){
		alert('Parabéns, você tem as inteligências visual e sinestésica na mesma intensidade');
	}else if (vis>sin && vis>aud){
		alert('Parabéns, você é visual');
	}/*Sinestésico*/else if (sin>aud && sin>vis){
		alert('Parabéns, você é sinestésico');
	}/*Todos iguais*/ else if (aud == vis == sin){
		alert('Parabéns, você tem todas as inteligências na mesma intensidade');
	}
	
	alert('Vis: '+vis+'; Aud: '+aud+'; Sin: '+sin);

   
    
};

