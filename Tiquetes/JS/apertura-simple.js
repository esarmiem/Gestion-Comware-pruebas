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
let uncheckNo =()=> { document.getElementById("retiroANo").checked = false; };
let uncheckSi =()=> { document.getElementById("retiroASi").checked = false; };
// CLIENTE EXTREMO B
let uncheckNoB =()=> { document.getElementById("retiroBNo").checked = false; };
let uncheckSiB =()=> { document.getElementById("retiroBSi").checked = false; };

//Boton Nuevo
document.getElementById("nuevo").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="input_"], [id^="inputB_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});

// Boton Copiar Resumen
document.getElementById("resumenSimple").addEventListener( "click", ()=>{
  const generator = new SummaryGenerator( "input_anillo", "input_ciudad", "input_nombreA", "inputB_nombreB", "input_puertoA", "inputB_puertoB" );
  document.getElementById("inputText_resumen").value = generator.resumenAperturaSimple();
  copyToResumen();
})

let copyToResumen =()=> {
  let copyText = document.getElementById("inputText_resumen");
  copyText.select();
  document.execCommand("copy");}

//Boton Copiar TT
document.getElementById("descripcionTT").addEventListener("click", ()=>{
  const generatorTT = new DescriptionGenerator( "input_anillo", "input_ciudad", "input_nombreA", "input_ipA", "input_puertoA", "input_contactoA", "input_direccionA", "input_telefonoA", "input_correoA",
    "disponibilidad_A", "disponibilidad_A2", "input_medidaA", "pedido", "input_descartesA", "inputB_nombreB",
    "inputB_ipB", "inputB_puertoB", "inputB_contactoB", "inputB_direccionB", "inputB_telefonoB", "inputB_correoB", "disponibilidad_BS", "disponibilidad_BS2", "inputB_medidasB", "retiroB", "inputB_descarteB" );
    document.getElementById("inputText_descripcion").value = generatorTT.generateDescripcion();
  copyToDescripcion();
})
let copyToDescripcion =()=> {
  let copyText = document.getElementById("inputText_descripcion");
  copyText.select();
  document.execCommand("copy");}