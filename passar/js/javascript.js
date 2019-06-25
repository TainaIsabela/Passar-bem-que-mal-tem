var vis=0, aud=0, sin=0, cont=0, prod=0;

function InicioTeste(){

	var one = document.getElementsByName("one");
	for (var i = 0; i < one.length; i++) {
		if(one[i].checked){
			one[i].checked = false;
		}
	}


	var two = document.getElementsByName("two");
	for (var i = 0; i < two.length; i++) {
		if(two[i].checked){
			two[i].checked = false;
		}
	}

	var three = document.getElementsByName("three");
	for (var i = 0; i < three.length; i++) {
		if(three[i].checked){
			three[i].checked = false;
		}
	}


	var four = document.getElementsByName("four");
	for (var i = 0; i < four.length; i++) {
		if(four[i].checked){
			four[i].checked = false;
		}
	}

	var five = document.getElementsByName("five");
	for (var i = 0; i < five.length; i++) {
		if(five[i].checked){
			five[i].checked = false;
		}
	}
	
	var six = document.getElementsByName("six");
	for (var i = 0; i < six.length; i++) {
		if(six[i].checked){
			six[i].checked = false;
		}
	}
	
}
function Teste()
{
	prod = 0;
	var one = document.getElementsByName("one");
	for (var i = 0; i < one.length; i++) {
		if(one[i].checked){
			prod++;
		}
	}


	var two = document.getElementsByName("two");
	for (var i = 0; i < two.length; i++) {
		if(two[i].checked){
			prod++;
		}
	}

	var three = document.getElementsByName("three");
	for (var i = 0; i < three.length; i++) {
		if(three[i].checked){
			prod++;
		}
	}


	var four = document.getElementsByName("four");
	for (var i = 0; i < four.length; i++) {
		if(four[i].checked){
			prod++;
		}
	}

	var five = document.getElementsByName("five");
	for (var i = 0; i < five.length; i++) {
		if(five[i].checked){
			prod++;
		}
	}
	
	var six = document.getElementsByName("six");
	for (var i = 0; i < six.length; i++) {
		if(six[i].checked){
			prod++;
		}
	}


	if (prod == 6) {

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
	if (aud>vis && aud==sin){
			location.href = "teste/audcin.html"
		} else if (aud>sin && aud== vis){
			location.href = "teste/audcin.html"
		} else if (aud>sin && aud>vis){
			location.href = "teste/aud.html"
		}/*Vis*/else if (vis>aud && vis==sin){
			location.href = "teste/cinvis.html"
		}else if (vis>sin && vis>aud){
			location.href = "teste/vis.html"
		}/*Sinestésico*/else if (sin>aud && sin>vis){
			location.href = "teste/cin.html"
		}/*Todos iguais*/ else if (aud == vis == sin){
			location.href = "teste/visaudcin.html"
		}
	
	InicioTeste();
} else {
  Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'Algumas questões estão sem resposta!',
})
}
};


