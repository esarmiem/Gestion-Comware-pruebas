//METHODS, PROPERTIES AND FUNCTIONS OF "RETIRO DEL EMPALME"//
//---------------------------------------------------------//
//Text Entry by Textarea Client//
const inputDataRE = document.getElementById('inputText');
const outputDataRE = document.querySelectorAll('[id^="retiro_"]');
inputDataRE.addEventListener('input', () => {
    const data = inputDataRE.value.split('\n');
    outputDataRE.forEach((output, index) => { output.value = data[index] || '';});}
);
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
//COPY DESCRIPTION//
document.getElementById("generateCopyTT").addEventListener("click", ()=>{
    const retiroTT = new DecriptionsGenerator( "retiro_anillo", "retiro_ciudad", "retiro_nombre", "retiro_ip","retiro_identificador","retiro_contacto", "retiro_direccion", "retiro_telefono", "disponibilidad_AR", "disponibilidad_A2R" );
    document.getElementById("output-area-TT").value = retiroTT.descripcionRetiroEmpalme();
    copyDescriptionRE();
})
let copyDescriptionRE =()=> {
    let copyText = document.getElementById( "output-area-TT" );
    copyText.select();
    document.execCommand("copy");
}
//METHODS, PROPERTIES AND FUNCTIONS OF "RETIRO DEL EMPALME"//
//END------------------------------------------------------//