
const segui = "S3GU1M13NT0_N1"; //S3GU1M13NT0_N1
const resultado1 = "llamadadelcliente"; //llamadadelcliente

const imaginas1 = `
  <div style="float: left; margin: 5px; width: 300px; height: 147px">
    Ubicación en Bmc
    <img src="ima2/segui1.png" width="304" height="147">
    <div></div>
  </div>
`;

const imaginas2 = `
  <div style="float: left; margin: 5px; width: 300px; height: 147px">
    Ubicación en Bmc
    <img src="ima2/segui2.png" width="304" height="147">
    <div></div>
  </div>
`;

const aclaracion1 = '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';

const aclaracion2 = '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width: 300px; height: 235px; border: 1px dotted green; border-radius: 10px">';

const aclaracion3a = '<p style="color: red; font-size: 19px;"><b>Aclaración:</b></p><br>';

const aclaracion3b = `<b>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance:</b> (Anexar contenido)`;

const aclaracion4 = '</div></div>';

const aclaraciones = `${aclaracion1}${aclaracion2}${aclaracion3a}${aclaracion3b}${aclaracion4}`;

let textoS = `De acuerdo a la comunicación establecida nombre: XXX Teléfono: XXX :
(contenido)
Seguiremos gestionando su caso en pro de una solución oportuna
ID llamada:`;


let checkRadioP =()=>{
        const titulo1 = document.getElementById("titulo_1");
        const titulo2 = document.getElementById("titulo_2");
        const titulo3 = document.getElementById("titulo_3");
        const titulo4 = document.getElementById("titulo_4");
        const diag1 = document.getElementById("grupodiagnostico1");
        const diag2 = document.getElementById("grupodiagnostico2");
      
        diag1.style.display = "none";
        diag2.style.display = "none";
      
        switch (segui) {
          case "S3GU1M13NT0_N1":
            if (titulo1.checked || titulo3.checked) {
              diag1.style.display = "block";
              diag2.style.display = "block";
            }
            break;
      
          case "S3GU1M13NT0_N2CW":
            if (titulo2.checked) {
              diag1.style.display = "block";
              diag2.style.display = "block";
            }
            break;
      
          case "S3GU1M13NT0_N2TG":
            if (titulo3.checked) {
              // do something
            }
            break;
      
          case "S3GU1M13NT0_3V3NT0S":
            if (titulo4.checked) {
              diag2.style.display = "block";
              diag2.style.marginLeft = "5px";
            }
            break;
      
          default:
            break;
        }

const mesa2 = document.getElementById("mesa2");
const mesa3 = document.getElementById("mesa3");
const mesaquemas = document.getElementById("mesaquemas");
const mesaquemas1 = document.getElementById("mesaquemas1");
const catamas = document.getElementById("catamas");
const norequiere1 = document.getElementById("norequiere1");

mesa2.style.display = "none";
mesa3.style.display = "none";
mesaquemas.style.display = "none";
mesaquemas1.style.display = "block";
catamas.style.display = "block";
norequiere1.style.display = "none";

catamas.style.display = "block";

// Show elements conditionally
if (segui == "S3GU1M13NT0_LC" || segui == "S3GU1M13NT0_N2TG") {
  mesaquemas.style.display = "block";
  norequiere1.style.display = "block";
}

if (segui == "S3GU1M13NT0_N2TG") {
  mesa2.style.display = "block";
  mesa3.style.display = "block";
}









// Set values
const segui_texto3 = document.getElementById("segui_texto3");
const segui_texto2 = document.getElementById("segui_texto2");

f2 = resultado1;
const x = document.getElementById("segui_texto1").value;
const y = funcionario1;

segui_texto3.value = "";
segui_texto2.value = x;

const apoyis333 = document.getElementById("apoyis333").checked;
const encampo333 = document.getElementById("encampo333").checked;

if (bandareso == "f") {
  const segui_texto2_value = x + ":" + f2 + y;

  if (apoyis333 || encampo333) {
    segui_texto2_value = x + "\n\n" + segui + ":" + f2 + y;
  }

  segui_texto2.value = segui_texto2_value;
  segui_texto3.value = segui + ":" + f2 + y;
}

document.getElementById("p2").innerHTML = segui_texto2.value;

      


}