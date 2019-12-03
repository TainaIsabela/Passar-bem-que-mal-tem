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

	var seven = document.getElementsByName("seven");
	for (var i = 0; i < six.length; i++) {
		if(seven[i].checked){
			seven[i].checked = false;
		}
	}
	
	var eight = document.getElementsByName("eight");
	for (var i = 0; i < six.length; i++) {
		if(eight[i].checked){
			eight[i].checked = false;
		}
	}

	var nine = document.getElementsByName("nine");
	for (var i = 0; i < six.length; i++) {
		if(nine[i].checked){
			nine[i].checked = false;
		}
	}

	var ten = document.getElementsByName("ten");
	for (var i = 0; i < six.length; i++) {
		if(ten[i].checked){
			ten[i].checked = false;
		}
	}

	var eleven = document.getElementsByName("eleven");
	for (var i = 0; i < six.length; i++) {
		if(eleven[i].checked){
			eleven[i].checked = false;
		}
	}

	var twelve = document.getElementsByName("twelve");
	for (var i = 0; i < twelve.length; i++) {
		if(twelve[i].checked){
			twelve[i].checked = false;
		}
	}

	var thirteen = document.getElementsByName("thirteen");
	for (var i = 0; i < thirteen.length; i++) {
		if(thirteen[i].checked){
			thirteen[i].checked = false;
		}
	}

	var fourteen = document.getElementsByName("fourteen");
	for (var i = 0; i < fourteen.length; i++) {
		if(fourteen[i].checked){
			fourteen[i].checked = false;
		}
	}

	var fifteen = document.getElementsByName("fifteen");
	for (var i = 0; i < fifteen.length; i++) {
		if(fifteen[i].checked){
			fifteen[i].checked = false;
		}
	}

}

function Teste()
{
	var d1 = document.getElementById("d1");
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

	var seven = document.getElementsByName("seven");
	for (var i = 0; i < seven.length; i++) {
		if(seven[i].checked){
			prod++;
		}
	}

	var eight = document.getElementsByName("eight");
	for (var i = 0; i < eight.length; i++) {
		if(eight[i].checked){
			prod++;
		}
	}	

	var nine = document.getElementsByName("nine");
	for (var i = 0; i < nine.length; i++) {
		if(nine[i].checked){
			prod++;
		}
	}	

	var ten = document.getElementsByName("ten");
	for (var i = 0; i < ten.length; i++) {
		if(ten[i].checked){
			prod++;
		}
	}	

	var eleven = document.getElementsByName("eleven");
	for (var i = 0; i < eleven.length; i++) {
		if(eleven[i].checked){
			prod++;
		}
	}	

	var twelve = document.getElementsByName("twelve");
	for (var i = 0; i < twelve.length; i++) {
		if(twelve[i].checked){
			prod++;
		}
	}	

	var thirteen = document.getElementsByName("thirteen");
	for (var i = 0; i < thirteen.length; i++) {
		if(thirteen[i].checked){
			prod++;
		}
	}	

	var fourteen = document.getElementsByName("fourteen");
	for (var i = 0; i < fourteen.length; i++) {
		if(fourteen[i].checked){
			prod++;
		}
	}	

	var fifteen = document.getElementsByName("fifteen");
	for (var i = 0; i < fifteen.length; i++) {
		if(fifteen[i].checked){
			prod++;
		}
	}


	if (prod == 15) {

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
	radio16 = document.getElementById("16");
	radio17 = document.getElementById("17");
	radio18 = document.getElementById("18");
	radio19 = document.getElementById("19");
	radio20 = document.getElementById("20");
	radio21 = document.getElementById("21");
	radio22 = document.getElementById("22");
	radio23 = document.getElementById("23");
	radio24 = document.getElementById("24");
	radio25 = document.getElementById("25");
	radio26 = document.getElementById("26");
	radio27 = document.getElementById("27");
	radio28 = document.getElementById("28");
	radio29 = document.getElementById("29");
	radio30 = document.getElementById("30");
	radio31 = document.getElementById("31");
	radio32 = document.getElementById("32");
	radio33 = document.getElementById("33");
	radio34 = document.getElementById("34");
	radio35 = document.getElementById("35");
	radio36 = document.getElementById("36");
	radio37 = document.getElementById("37");
	radio38 = document.getElementById("38");
	radio39 = document.getElementById("39");
	radio40 = document.getElementById("40");
	radio41 = document.getElementById("41");
	radio42 = document.getElementById("42");
	radio43 = document.getElementById("43");
	radio44 = document.getElementById("44");
	radio45 = document.getElementById("45");

	
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
	/*Questão 7*/
	if (radio19.checked == true){
		sin = sin + 1;
	} 
	/*Questão 8*/
	if (radio22.checked == true){
		sin = sin + 1;
	} 
	/*Questão 9*/
	if (radio25.checked == true){
		sin = sin + 1;
	}
	if (radio26.checked == true){
		aud = aud + 1;
	}
	if (radio27.checked == true){
		vis = vis + 1;
	}
	/*Questão 10*/
	if (radio28.checked == true){
		aud = aud + 1;
	}
	/*Questão 11*/
	if (radio31.checked == true){
		vis = vis + 1;
	}
	if (radio32.checked == true){
		aud = aud + 1;
	}
	if (radio33.checked == true){
		sin = sin + 1;
	}
	/*Questão 12*/
	if (radio34.checked == true){
		vis = vis + 1;
	}
	/*Questão 13*/
	if (radio37.checked == true){
		vis = vis + 1;
	}
	if (radio38.checked == true){
		aud = aud + 1;
	}
	if (radio39.checked == true){
		sin = sin + 1;
	}
	/*Questão 14*/
	if (radio40.checked == true){
		vis = vis + 1;
	}
	/*Questão 15*/
	if (radio43.checked == true){
		sin = sin + 1;
	}
	if (radio44.checked == true){
		aud = aud + 1;
	}
	if (radio45.checked == true){
		vis = vis + 1;
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


