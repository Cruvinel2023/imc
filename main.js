


 function calcularImc() {
    peso= parseFloat(document.getElementById("weight").value.replace(',', '.'));
    altura= parseFloat (document.getElementById("height").value.replace(',', '.'));
    imc = peso /(altura*altura);
   document.getElementById("result").value = ("Seu IMC é: " + imc.toFixed(2));
   determinarCategoria(imc);
  
 }

 function determinarCategoria(imc) {
  var categoria;
  if (imc < 18.5) {
    categoria = "Abaixo do peso";
  } else if (imc < 25) {
    categoria = "Peso Normal";
  } else if (imc < 30) { 
    categoria = "Sobrepeso";
  } else  {
    categoria = "Obesidade";
  }
  document.getElementById("category").value = categoria;
 }
 
   