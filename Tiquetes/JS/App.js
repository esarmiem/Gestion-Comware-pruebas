//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA SIMPLE"//
//-----------------------------------------------------//
//Text Entry by Textarea Client A//
const inputDataAS = document.getElementById('inputTextA');
const outputDataAS = document.querySelectorAll('[id^="input_"]');
inputDataAS.addEventListener('input', () => {
    const data = inputDataAS.value.split('\n');
    outputDataAS.forEach((output, index) => { output.value = data[index] || '';});}
);
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
    })
let copyToResumenAPS =()=> {
    let copyText = document.getElementById("inputText_resumen");
    copyText.select();
    document.execCommand("copy");
    }  
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA SIMPLE"//
//END---------------------------------------------------//





//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE"//
//-----------------------------------------------------//
//Text Entry by Textarea Client//
const outputDataC = document.querySelectorAll('[id^="output-dataC-"]');
const inputDataC = document.getElementById('input-dataC');
inputDataC.addEventListener('input', () => {
    const dataC = inputDataC.value.split('\n');
    outputDataC.forEach((output, index) => { output.value = dataC[index] || ''; }); });
//NUEVO BUTTON//
let clearTextArea =()=> {
    const outputDataC = document.querySelectorAll('[id^="output-dataC-"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    outputDataC.forEach(output => output.value = '');
};
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
let uncheckNoC =()=> { document.getElementById("no-retiroC").checked = false; };
let uncheckSiC =()=> { document.getElementById("si-retiroC").checked = false; };
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE"//
//END--------------------------------------------------//





//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE 2 CLIENTES"//
//----------------------------------------------------------------//
//Text Entry by Textarea Client A//
const inputDataAPD = document.getElementById('input-dataD');
const outputDataAPD = document.querySelectorAll('[id^="output-data-"]');
inputDataAPD.addEventListener('input', () => {
    const dataD = inputDataAPD.value.split('\n');
    outputDataAPD.forEach((output, index) => { output.value = dataD[index] || ''; }); 
});
//Text Entry by Textarea Client B//
const inputDataAPD1 = document.getElementById('input-dataD-1');
const outputDataAPD1 = document.querySelectorAll('[id^="output-dataB-"]');
inputDataAPD1.addEventListener('input', () => {
    const dataD1 = inputDataAPD1.value.split('\n');
    outputDataAPD1.forEach((output, index) => { output.value = dataD1[index] || ''; }); 
});
// NUEVO BUTTON//
document.getElementById("nuevoAD2").addEventListener("click", ()=>{
    let outputs = document.querySelectorAll('[id^="output-data-"], [id^="output-dataB"]');
        for (let i = 0; i < outputs.length; i++) { outputs[i].value = ""; };
        document.getElementById("input-dataD").value = "";
        document.getElementById("input-dataD-1").value = "";
        document.getElementById("output-area-resumenD").value = "";
        document.getElementById("output-areaD").value = "";   
});
//COPY RESUMEN//
document.getElementById("resumeAD2").addEventListener( "click", ()=>{
    const generator = new SummaryGenerator( "output-data-1-d", "output-data-2-d", "output-data-3-d", "output-dataB-1-d" )
    document.getElementById("output-area-resumenD").value = generator.resumenAperturaDoble2C();
    copyToResumenAD2();
})
let copyToResumenAD2 =()=> {
    let copyText = document.getElementById("output-area-resumenD");
    copyText.select();
    document.execCommand("copy");
}  
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE 2 CLIENTES"//
//END-------------------------------------------------------------//





//METHODS, PROPERTIES AND FUNCTIONS OF "RETIRO DEL EMPALME"//
//---------------------------------------------------------//
//Text Entry by Textarea Client//
const inputDataRE = document.getElementById('inputText');
const outputDataRE = document.querySelectorAll('[id^="retiro_"]');
inputDataRE.addEventListener('input', () => {
    const data = inputDataRE.value.split('\n');
    outputDataRE.forEach((output, index) => { output.value = data[index] || '';});});
//NUEVO BUTTON//
document.getElementById("nuevoR").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="retiro_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//COPY RESUMEN//
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
//METHODS, PROPERTIES AND FUNCTIONS OF "RETIRO DEL EMPALME"//
//END------------------------------------------------------//





//METHODS, PROPERTIES AND FUNCTIONS OF "REINGRESO DEL ANILLO"//
//-----------------------------------------------------------//
//Text Entry by Textarea Client//
const inputDataRA = document.getElementById('inputTextRein');
const outputDataRA = document.querySelectorAll('[id^="rein_"]');
inputDataRA.addEventListener('input', () => {
    const data = inputDataRA.value.split('\n');
    outputDataRA.forEach((output, index) => { output.value = data[index] || '';});});
//NUEVO BUTTON//
document.getElementById("nuevoRein").addEventListener("click", ()=>{
    const eraserInfo = document.querySelectorAll('[id^="rein_"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    eraserInfo.forEach(output => output.value = '');
});
//COPY RESUMEN//
document.getElementById("resumeRein").addEventListener( "click", ()=>{
    const resumenReingreso = new SummaryGenerator( "rein_anillo", "rein_ciudad", "rein_nombre" );
    document.getElementById("input_resumenRein").value = resumenReingreso. resumenReingresoDelAnillo();
    copyToResumenRIA();
    })
let copyToResumenRIA =()=> {
    let copyText = document.getElementById("input_resumenRein");
    copyText.select();
    document.execCommand("copy");
    }  
//METHODS, PROPERTIES AND FUNCTIONS OF "REINGRESO DEL ANILLO"//
//END--------------------------------------------------------//





//METHODS, PROPERTIES AND FUNCTIONS OF "ALARMA DE POTENCIA"//
//---------------------------------------------------------//
//Text Entry by Textarea Client A//
const inputData = document.getElementById("inputTextAp");
const outputData = document.querySelectorAll('[id^="ap_"]');
inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => { output.value = data[index] || '';});});
//Text Entry by Textarea Client B//
const inputDataB = document.getElementById("inputTextApB");
const outputDataB = document.querySelectorAll('[id^="apB_"]');
inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputDataB.forEach((output, index) => { output.value = dataB[index] || ''; });});
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
    document.getElementById("input_resumenRein").value = generator.resumenAlarmaDePotencia();
    copyToResumenRein();
  })
let copyToResumenRein =()=> {
    let copyText = document.getElementById("input_resumenRein");
    copyText.select();
    document.execCommand("copy");
  }  
//METHODS, PROPERTIES AND FUNCTIONS OF "ALARMA DE POTENCIA"//
//END------------------------------------------------------//