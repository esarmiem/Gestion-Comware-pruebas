//Ingreso de Texto por el Textarea Cliente A
const inputData = document.getElementById('inputTextA');
const outputData = document.querySelectorAll('[id^="input_"]');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});});
//Ingreso de Texto por el Textarea Cliente B
const inputDataB = document.getElementById("inputTextB");
const outputDataB = document.querySelectorAll('[id^="inputB_"]');

inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputDataB.forEach((output, index) => { output.value = dataB[index] || ''; });});

// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTERMO A
let uncheckNo =()=> { document.getElementById("retiroANoSimple").checked = false; };
let uncheckSi =()=> { document.getElementById("retiroASiSimple").checked = false; };
// CLIENTE EXTREMO B
let uncheckNoB =()=> { document.getElementById("retiroBNoSimple").checked = false; };
let uncheckSiB =()=> { document.getElementById("retiroBSiSimple").checked = false; };

//Boton Nuevo
document.getElementById("nuevo").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="input_"], [id^="inputB_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});

// Boton Copiar Resumen
document.getElementById("resumenSimple").addEventListener( "click", ()=>{
  const generator = new ResumenGenerator();
  document.getElementById("inputText_resumenSimple").value = generator.generateResumen();
})

//Boton Copiar TT
document.getElementById("descripcionTT").addEventListener("click", ()=>{
  const generatorTT = new DescriptionGenerator();
  document.getElementById("inputText_descripcionSimple").value = generatorTT.generateDescripcion();
})