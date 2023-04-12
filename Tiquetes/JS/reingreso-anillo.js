//Ingreso de Texto por el Textarea
const inputData = document.getElementById('inputTextRein');
const outputData = document.querySelectorAll('[id^="rein_"]');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});});

//Boton Nuevo
document.getElementById("nuevoRein").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="rein_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});

// Boton Copiar Resumen
document.getElementById("resumeRein").addEventListener( "click", ()=>{
  const resumenReingreso = new SummaryGenerator( "rein_anillo", "rein_ciudad", "rein_nombre" );
  document.getElementById("input_resumenRein").value = resumenReingreso. resumenReingresoDelAnillo();
  copyToResumen();
})
let copyToResumen =()=> {
  let copyText = document.getElementById("input_resumenRein");
  copyText.select();
  document.execCommand("copy");}

//Boton Copiar TT
document.getElementById("descripcionRein").addEventListener("click", ()=>{
  const reingresoTT = new DescriptionGenerator( "rein_anillo", "rein_ciudad", "rein_nombre", "rein_ip", "rein_identificador", "rein_contacto", "rein_telefono", "rein_direccion", "disponibilidad_ARein", "disponibilidad_A2Rein", "rein_descartesreingreso" );
  document.getElementById("input_descripcionRein").value = reingresoTT.descripcionReingreso();
  copyToDescripcion();
})
let copyToDescripcion =()=> {
  let copyText = document.getElementById( "input_descripcionRein" );
  copyText.select();
  document.execCommand("copy");}