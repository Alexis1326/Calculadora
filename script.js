function numeros(valor){
    document.getElementById("result").value += valor;
}

function operacion(){
    var operacion = document.getElementById("result").value;
    if(operacion == 0){
        document.getElementById("result").value="sin operación"
    }else{
        document.getElementById("result").value = eval(operacion);
        parseFloat(operacion);
    }
}

function borrar(){
    document.getElementById("result").value = "";
}

function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "modo-dia.css") {
    theme.href = "modo-noche.css";
  } else {
    theme.href = "modo-dia.css";
  }
}