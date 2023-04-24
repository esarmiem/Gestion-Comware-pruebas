let segui = "S3GU1M13NT0_N1";//S3GU1M13NT0_N1
let resultado1 = "llamadadelcliente";//llamadadelcliente
let imaginas1 =
  '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div>';
let imaginas2 =
  '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui2.png" width="304" height="147"><div></div></div>';
let aclaracion1 =
  '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
let aclaracion2 =
  '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
let aclaracion3a =
  '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>  ';
let aclaracion3b =
  "<b>  De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada  con el siguiente avance:  </b>(Anexar contenido)";
let aclaracion4 = "</div>";

let aclaraciones = aclaracion1 + aclaracion2 + aclaracion3a + aclaracion3b; //falta cerrarla en cada 1 con la 3b y la 4

textoS = "De acuerdo a la comunicación establecida nombre: XXX Teléfono: XXX :\n";
textoS += "(contenido)";
textoS += "\nSeguiremos gestionando su caso en pro de una solución oportuna";
textoS += "\nID llamada:";

//-----------------------BARRA DE TITULOS-------------------------------//
function segui_principal() {
    x = document.getElementById("titulo_1").checked;
    y = document.getElementById("titulo_2").checked;
    z = document.getElementById("titulo_3").checked;
    w = document.getElementById("titulo_4").checked;

    document.getElementById("grupodiagnostico1").style.display = "none";
    document.getElementById("grupodiagnostico2").style.display = "none";
 
    if (segui == "S3GU1M13NT0_N1") {
      if (x == true) {
        document.getElementById("grupodiagnostico1").style.display = "block";
        document.getElementById("grupodiagnostico2").style.display = "block";
      }
  
      if (z == true) {
        document.getElementById("grupodiagnostico1").style.display = "block";
      }
    }
  
    if (segui == "S3GU1M13NT0_N2CW") {
      if (y == true) {
        document.getElementById("grupodiagnostico1").style.display = "block";
        document.getElementById("grupodiagnostico2").style.display = "block";
      }
    }
  
    if (segui == "S3GU1M13NT0_N2TG") {
      if (z == true) {
      }
    }
  
    if (segui == "S3GU1M13NT0_3V3NT0S") {
      if (w == true) {
        document.getElementById("grupodiagnostico2").style.display = "block";
        document.getElementById("grupodiagnostico2").style.marginLeft = "5px";
      }
    }
  
    document.getElementById("mesa2").style.display = "none";
    document.getElementById("mesa3").style.display = "none";
    document.getElementById("mesaquemas").style.display = "none";
    document.getElementById("mesaquemas1").style.display = "block";
    document.getElementById("catamas").style.display = "block";
    document.getElementById("norequiere1").style.display = "none";

    document.getElementById("catamas").style.display = "block";
    if (segui == "S3GU1M13NT0_LC") {
      document.getElementById("mesaquemas").style.display = "block";
      document.getElementById("norequiere1").style.display = "block";
    }
    if (segui == "S3GU1M13NT0_MESATT") {
    }
  
    if (segui == "S3GU1M13NT0_N2TG") {
      document.getElementById("mesaquemas").style.display = "block";
      document.getElementById("norequiere1").style.display = "block";
      document.getElementById("mesa2").style.display = "block";
      document.getElementById("mesa3").style.display = "block";
    }
  
    //V4L1D40FFL1N3
    if (segui == "S3GU1M13NT0_3V3NT0S") {
    }
   
    f2 = resultado1;
    var x = document.getElementById("segui_texto1").value;
    var y = funcionario1;
  
    document.getElementById("segui_texto3").value = "";
    document.getElementById("segui_texto2").value = x;
  
    x2 = document.getElementById("apoyis333").checked;
    x3 = document.getElementById("encampo333").checked;
  
    if (bandareso == "f") {

      x += "\n";
  
      if (x2 == true || x3 == true) {
        document.getElementById("segui_texto1").value =
          x + "\n\n" + segui + ":" + f2 + y;
      } else {
        document.getElementById("segui_texto1").value = x + segui + ":" + f2 + y;
      }
  
      document.getElementById("segui_texto3").value = segui + ":" + f2 + y;
    }
  
    document.getElementById("p2").innerHTML =
      document.getElementById("segui_texto1").value;
  }


  function segui_myFunction3c2() {
    texto =
      '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
    texto +=
      '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="ima2/segui1.png" width="304" height="147"><div></div></div></div>';
  
    resultado1 = "d1agnostico";
    document.getElementById("segui_grupo3").innerHTML = texto;
  
    z = document.getElementById("chequeotipo3").checked;
  
    if (z == false) {
      texto_interno = "S. Básico\n";
      texto_interno += "	ID prueba: \n";
      texto_interno += "	Falla evidencia en la prueba:\n";
      texto_interno += "	Diagnóstico realizado:\n";
    } else {
      texto_interno = "";
      segui = "S3GU1M13NT0_N1";
    }
  
    document.getElementById("segui_texto1").value = texto_interno;
  
    segui_principal();
  }







  function copyTextareaAndInput() {
    const textareaContent = document.querySelector('textarea').value;
    const inputValue = document.querySelector('input').value;
    const copyText = `${textareaContent} ${inputValue}`;
    
    navigator.clipboard.writeText(copyText)
      .then(() => {
        console.log('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Unable to copy to clipboard:', error);
      });
  }
  