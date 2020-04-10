
		function calcular(){
			
			if (document.getElementById("peso").value !=""
				&& document.getElementById("altura").value !="") { 
			var peso= parseFloat( document.getElementById("peso").value);
			var altura= parseFloat( document.getElementById("altura").value);
			var imc= peso/(altura*altura);


			document.getElementById("imc").innerHTML = imc.toFixed("1");

			}

			else{
				window.alert("preencha os campos");
			}

			if (imc<17) {document.getElementById("condicao").innerHTML="Muito Abaixo do Peso"}

			else if(imc>=17 && imc<18.5) {document.getElementById("condicao").innerHTML="Abaixo do Peso"}
				else if(imc>=18.5 && imc<25) {document.getElementById("condicao").innerHTML="Peso Normal"}
					else if(imc>=25 && imc<30) {document.getElementById("condicao").innerHTML="Acima do Peso"}
						else if(imc>=30 && imc<35) {document.getElementById("condicao").innerHTML="Obesidade 1"}
							else if(imc>=35 && imc<40) {document.getElementById("condicao").innerHTML="Obesidade 2"}
								else if(imc>40) {document.getElementById("condicao").innerHTML="Obesidade Morbida"}





			
		}
		
	