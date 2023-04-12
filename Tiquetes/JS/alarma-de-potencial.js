//Ingreso de Texto por el Textarea Cliente A
const inputData = document.getElementById("inputTextAp");
const outputData = document.querySelectorAll('[id^="ap_"]');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});});
//Ingreso de Texto por el Textarea Cliente B
const inputDataB = document.getElementById("inputTextApB");
const outputDataB = document.querySelectorAll('[id^="apB_"]');

inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputDataB.forEach((output, index) => { output.value = dataB[index] || ''; });});

//Boton Nuevo
document.getElementById("nuevoAp").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="ap_"], [id^="apB_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//Descripcion 
let modulocliente_a1 = "";
let modulocliente_a2 = "";
let modulocliente_b1 = "";
let modulocliente_b2 = "";

let descripcionAlarma =()=>{

  const templateDescripcion =`Se presenta alarma de potencia en el anillo ${document.getElementById('ap_potencia_anillo').value} entre los clientes ${document.getElementById('ap_potencia_nombrea').value} por el puerto Giga ${document.getElementById('ap_potencia_puertoa').value} contra ${document.getElementById('apB_potencia_nombreb').value} por el puerto Giga ${document.getElementById('apB_potencia_puertob').value}
  
ANILLO: ${document.getElementById('ap_potencia_anillo').value}
CIUDAD: ${document.getElementById('ap_potencia_ciudad').value}
NOMBRE CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_nombrea').value}
IP SWITCH CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_ipa').value}
CONTACTO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_contactoa').value}
CORREO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_correoa').value}
DIRECCION CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_direcciona').value}
TELÉFONO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_telefonoa').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${ document.getElementById('potencia_disponibilidada1').value} a ${document.getElementById('potencia_disponibilidada2').value}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_descartesa').value}
          
NOMBRE CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_nombreb').value}
IP SWITCH CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_ipb').value}
CONTACTO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_contactob').value}
CORREO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_correob').value}
DIRECCION CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_direccionb').value}
TELÉFONO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_telefonob').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${document.getElementById('potencia_disponibilidadb1').value} a ${document.getElementById('potencia_disponibilidadb2').value}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_descartesb').value}
          
MÓDULO CLIENTE A GIGA 0/0/1: ${modulocliente_a1}
MÓDULO CLIENTE A GIGA 0/0/2: ${modulocliente_a2}
MÓDULO CLIENTE B GIGA 0/0/1: ${modulocliente_b1}
MÓDULO CLIENTE B GIGA 0/0/2: ${modulocliente_b2}`;

  const descripcionTextArea = document.getElementById("input_descripcionAP");
  descripcionTextArea.value = templateDescripcion;

}
//Boton Copiar TT
document.getElementById("descripcionAp").addEventListener("click", ()=>{
  descripcionAlarma();
  copyToDescripcionApB();
})
let copyToDescripcionApB =()=> {
  let copyText = document.getElementById("input_descripcionAP");
  copyText.select();
  document.execCommand("copy");}

// Boton Copiar Resumen
document.getElementById("resumeAp").addEventListener( "click", ()=>{
  const generator = new SummaryGenerator( "ap_potencia_anillo", "ap_potencia_ciudad","ap_potencia_nombrea", "apB_potencia_nombreb", "ap_potencia_puertoa", "apB_potencia_puertob" );
  document.getElementById("input_resumenRein").value = generator.resumenAlarmaDePotencia();
  copyToResumenRein();
})
let copyToResumenRein =()=> {
  let copyText = document.getElementById("input_resumenRein");
  copyText.select();
  document.execCommand("copy");
}

