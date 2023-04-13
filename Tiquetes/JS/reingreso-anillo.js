//METHODS, PROPERTIES AND FUNCTIONS OF "REINGRESO DEL ANILLO"//
//-----------------------------------------------------------//
//Text Entry by Textarea Client//
const inputDataRA = document.getElementById('inputTextRein');
const outputDataRA = document.querySelectorAll('[id^="rein_"]');
inputDataRA.addEventListener('input', () => {
    const data = inputDataRA.value.split('\n');
    outputDataRA.forEach((output, index) => { output.value = data[index] || '';});
});
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
//COPY DESCRIPTION//
document.getElementById("descripcionRein").addEventListener("click", ()=>{
    const reingresoTT = new DecriptionsGenerator( "rein_anillo", "rein_ciudad", "rein_nombre", "rein_ip", "rein_identificador", "rein_contacto", "rein_telefono", "rein_direccion", "disponibilidad_ARein", "disponibilidad_A2Rein", "rein_descartesreingreso" );
    document.getElementById("input_descripcionRein").value = reingresoTT.descripcionReingresoAnillo();
    copyToDescripcion();
  })
  let copyToDescripcion =()=> {
    let copyText = document.getElementById( "input_descripcionRein" );
    copyText.select();
    document.execCommand("copy");
  }
//METHODS, PROPERTIES AND FUNCTIONS OF "REINGRESO DEL ANILLO"//
//END--------------------------------------------------------//