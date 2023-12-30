var peso;
 var altura;
 var imc;


 function calcularImc() {
    peso= parseFloat(document.getElementById("weight").value);
    altura= parseFloat (document.getElementById("height").value);
    imc = peso/(altura*altura);
    document.getElementById("result").textContent = ("Seu IMC é: " + imc.toFixed(2));
 }
 