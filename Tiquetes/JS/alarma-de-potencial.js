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

// Boton Copiar Resumen
document.getElementById("resumeAp").addEventListener( "click", ()=>{
  const generator = new DescripcionAlarmaPotencia();
  document.getElementById("input_resumenRein").value = generator.resumenAlarmaDePotencias();
  copyToResumenRein();
})

let copyToResumenRein =()=> {
  let copyText = document.getElementById("input_resumenRein");
  copyText.select();
  document.execCommand("copy");}

//Boton Copiar TT
document.getElementById("descripcionAp").addEventListener("click", ()=>{
  const generatorAp = new DescripcionAlarmaPotencia();
  document.getElementById("input_descripcionAP").value = generatorAp.descripcionAlarmaDePotencias();
  copyToDescripcionApB();
})
let copyToDescripcionApB =()=> {
  let copyText = document.getElementById("input_descripcionAP");
  copyText.select();
  document.execCommand("copy");}