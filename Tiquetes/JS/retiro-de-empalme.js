//Ingreso de Texto por el Textarea
const inputData = document.getElementById('inputText');
const outputData = document.querySelectorAll('[id^="retiro_"]');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});});

//Boton Nuevo
document.getElementById("nuevoR").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="retiro_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});

document.getElementById("generateCopyResumen").addEventListener( "click", ()=>{
  const resumenRetiro = new SummaryGenerator( "retiro_anillo", "retiro_nombre" );
  document.getElementById("output-area-resumen").value = resumenRetiro.resumenRetiroDesdeEmpalme();
  copyToResumenRTE();
  })
let copyToResumenRTE =()=> {
  let copyText = document.getElementById("output-area-resumen");
  copyText.select();
  document.execCommand("copy");
  }

//Boton Copiar TT
document.getElementById("generateCopyTT").addEventListener("click", ()=>{
  const retiroTT = new DescriptionGenerator( "retiro_anillo", "retiro_ciudad", "retiro_nombre", "retiro_ip","retiro_identificador","retiro_contacto", "retiro_direccion", "retiro_telefono", "disponibilidad_AR", "disponibilidad_A2R" );
  document.getElementById("output-area-TT").value = retiroTT.descripcionRetiroEmpalme();
  copyToDescripcion();
})
let copyToDescripcion =()=> {
  let copyText = document.getElementById( "output-area-TT" );
  copyText.select();
  document.execCommand("copy");}