//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA SIMPLE"//
//-----------------------------------------------------//
//Text Entry by Textarea Client A//
const inputDataAS = document.getElementById('inputTextA');
const outputDataAS = document.querySelectorAll('[id^="input_"]');
inputDataAS.addEventListener('input', () => {
    const data = inputDataAS.value.split('\n');
    outputDataAS.forEach((output, index) => { output.value = data[index] || '';});
});
//Text Entry by Textarea Client B//
const inputDataBAS = document.getElementById("inputTextB");
const outputDataBAS = document.querySelectorAll('[id^="inputB_"]');
inputDataBAS.addEventListener('input', () => {
    const dataB = inputDataBAS.value.split('\n');
    outputDataBAS.forEach((output, index) => { output.value = dataB[index] || ''; });}
);
//NUEVO BUTTON//
document.getElementById("nuevo").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="input_"], [id^="inputB_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//COPY RESUMEN//
document.getElementById("resumenSimple").addEventListener( "click", ()=>{
    const generator = new SummaryGenerator( "input_anillo", "input_ciudad", "input_nombreA", "inputB_nombreB", "input_puertoA", "inputB_puertoB" );
    document.getElementById("inputText_resumen").value = generator.resumenAperturaSimple();
    copyToResumenAPS();
});
let copyToResumenAPS =()=> {
    let copyText = document.getElementById("inputText_resumen");
    copyText.select();
    document.execCommand("copy");
};
//COPY DESCRIPTION//
document.getElementById("descripcionTT").addEventListener("click", ()=>{
    const generatorTT = new DecriptionsGenerator( "input_anillo", "input_ciudad", "input_nombreA", "input_ipA", "input_puertoA", "input_contactoA", "input_direccionA", "input_telefonoA", "input_correoA",
      "disponibilidad_A", "disponibilidad_A2", "input_medidaA", "pedido", "input_descartesA", "inputB_nombreB",
      "inputB_ipB", "inputB_puertoB", "inputB_contactoB", "inputB_direccionB", "inputB_telefonoB", "inputB_correoB", "disponibilidad_BS", "disponibilidad_BS2", "inputB_medidasB", "retiroB", "inputB_descarteB" );
      document.getElementById("inputText_descripcion").value = generatorTT.descripcionAperturaSimple();
    copyToDescripcionAPS();
})
let copyToDescripcionAPS =()=> {
    let copyText = document.getElementById("inputText_descripcion");
    copyText.select();
    document.execCommand("copy");
}
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA SIMPLE"//
//END---------------------------------------------------//