//METHODS, PROPERTIES AND FUNCTIONS OF "ALARMA DE POTENCIA"//
//---------------------------------------------------------//
//Text Entry by Textarea Client A//
const inputData = document.getElementById("inputTextAp");
const outputData = document.querySelectorAll('[id^="ap_"]');
inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});
});
//Text Entry by Textarea Client B//
const inputDataB = document.getElementById("inputTextApB");
const outputDataB = document.querySelectorAll('[id^="apB_"]');
inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputDataB.forEach((output, index) => { output.value = dataB[index] || ''; });
});
//NUEVO BUTTON//
document.getElementById("nuevoAp").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="ap_"], [id^="apB_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//COPY RESUMEN//
document.getElementById("resumeAp").addEventListener( "click", ()=>{
    const generator = new SummaryGenerator( "ap_potencia_anillo", "ap_potencia_ciudad","ap_potencia_nombrea", "apB_potencia_nombreb", "ap_potencia_puertoa", "apB_potencia_puertob" );
    document.getElementById("input_resumenADP").value = generator.resumenAlarmaDePotencia();
    copyResumenADP();
})
let copyResumenADP =()=> {
    let copyText = document.getElementById("input_resumenADP");
    copyText.select();
    document.execCommand("copy");
}
//COPY DESCRIPTION//
document.getElementById("descripcionAp").addEventListener("click", ()=>{
    document.getElementById("input_descripcionAP").value = descripcionAlarmaDePotencia();
    copyDescripcionADP();
})
let copyDescripcionADP =()=> {
    let copyText = document.getElementById("input_descripcionAP");
    copyText.select();
    document.execCommand("copy");
}
//METHODS, PROPERTIES AND FUNCTIONS OF "ALARMA DE POTENCIA"//
//END------------------------------------------------------//