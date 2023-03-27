//Boton NUEVO
document.getElementById("nuevo").addEventListener("click", function(){
    const eraserInfo = document.querySelectorAll('[id^="retiro_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//Boton NUEVO

//Ingreso del texto por el textarea y asignasion de valores a los campos
const outputData = document.querySelectorAll('[id^="retiro_"]');
const inputData = document.getElementById('inputText');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => {
        output.value = data[index] || '';
    });
});
//Ingreso del texto por el textarea y asignasion de valores a los campos

//Se genera y copia CopiarResumen, ademas, se genera una plantilla si no se ingresa informacion 
document.getElementById("generateCopyResumen").addEventListener("click", function() {
    const retiroNombre = document.getElementById("retiro_nombre").value;
    const retiroAnillo = document.getElementById("retiro_anillo").value;
    let output = "";
  
    if (retiroNombre === "" || retiroAnillo === "") {
      output = "Se requiere realizar retiro desde el empalme del cliente **** ubicado en el anillo ****, el cual se encuentra apagado por más de 48 horas ¡MONITOREO PROACTIVO!";
    } else {
      output = `Se requiere realizar retiro desde el empalme del cliente ${retiroNombre} ubicado en el anillo ${retiroAnillo}, el cual se encuentra apagado por más de 48 horas ¡MONITOREO PROACTIVO!`;
    }
  
    const outputArea = document.getElementById("output-area-resumen");
    outputArea.value = output;
    copyResumen();
  });
  
  let copyResumen =()=> {
    let copyText = document.getElementById("output-area-resumen");
    copyText.select();
    document.execCommand("copy");
  }
//Se genera y copia CopiarResumen, ademas, se genera una plantilla si no se ingresa informacion 

//Se genera y copia CopiarTT, ademas, se generar una plantilla si no se ingresa informacion
document.getElementById("generateCopyTT").addEventListener("click", function(){
    const retiroNombre = document.getElementById("retiro_nombre").value;
    const retiroAnillo = document.getElementById("retiro_anillo").value;
    let output = "";
     
    if (retiroNombre === "" || retiroAnillo === "") {
        output = `Se requiere realizar retiro desde el empalme del cliente **** ubicado en el anillo ****, el cual se encuentra apagado por más de 48 horas ¡MONITOREO PROACTIVO! 
ANILLO: ****
IP SWITCH: ****
CIUDAD: ****
IDENTIFICADOR: ****
NOMBRE DEL CLIENTE: ****
CONTACTO DEL CLIENTE: ****
TELEFONO DEL CLIENTE: ****
DIRECCION DEL CLIENTE: ****
DISPONIBILIDAD DEL CLIENTE: ****`;}
    else {
        output = `Se requiere realizar retiro desde el empalme del cliente ${retiroNombre} ubicado en el anillo ${retiroAnillo}, el cual se encuentra apagado por más de 48 horas ¡MONITOREO PROACTIVO!
ANILLO: ${document.getElementById('retiro_anillo').value}
IP SWITCH: ${document.getElementById('retiro_ip1').value}.${document.getElementById('retiro_ip2').value}.${document.getElementById('retiro_ip3').value}.${document.getElementById('retiro_ip4').value}
CIUDAD: ${document.getElementById('retiro_ciudad').value}
IDENTIFICADOR: ${document.getElementById('retiro_identificador').value}
NOMBRE DEL CLIENTE: ${document.getElementById('retiro_nombre').value}
CONTACTO DEL CLIENTE: ${document.getElementById('retiro_contacto').value}
TELEFONO DEL CLIENTE: ${document.getElementById('retiro_telefono').value}
DIRECCION DEL CLIENTE: ${document.getElementById('retiro_direccion').value}
DISPONIBILIDAD DEL CLIENTE: ${document.getElementById('retiro_disponibilidad').value}`;}

    const outputTT = document.getElementById('output-area-TT');
    outputTT.value = output;
    copyTT();
});
let copyTT =()=> {
    let copyText = document.getElementById("output-area-TT");
    copyText.select();
    document.execCommand("copy");
  }
//Se genera y copia CopiarTT, ademas, se generar una plantilla si no se ingresa informacion