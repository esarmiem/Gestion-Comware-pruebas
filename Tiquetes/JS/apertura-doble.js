//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE"//
//-----------------------------------------------------//
//Text Entry by Textarea Client//
const datosAPD = document.getElementById('input-dataC');
const salidaAPD = document.querySelectorAll('[id^="output-dataC-"]');
datosAPD.addEventListener('input', () => {
    const dataAPD = datosAPD.value.split('\n');
    salidaAPD.forEach((output, index) => { output.value = dataAPD[index] || ''; }); 
});
//NUEVO BUTTON//
document.getElementById("nuevoAD").addEventListener("click", ()=>{
    const salidaDataC = document.querySelectorAll('[id^="output-dataC-"]');
    const areaTexto = document.querySelectorAll('textarea');
    areaTexto.forEach(textArea => textArea.value = '');
    salidaDataC.forEach(output => output.value = '');
})
//COPY RESUMEN//
document.getElementById("resumeAD").addEventListener("click", ()=> {
    const resumanADP = new SummaryGenerator( "output-dataC-1-c", "output-dataC-3-c", "output-dataC-4-c" )
    document.getElementById("output-area-resumenC").value = resumanADP.resumenAperturaDoble();
    copyResumenAD();
})
let copyResumenAD =()=> {
    var copyText = document.getElementById("output-area-resumenC");
    copyText.select();
    document.execCommand("copy");
};
//COPY DESCRIPTION//
document.getElementById("descripcionAD").addEventListener("click", ()=>{
    const generateAD = new DecriptionsGenerator( "output-dataC-1-c", "output-dataC-3-c", "output-dataC-4-c", "output-dataC-2-c","", "output-dataC-5-c", "output-dataC-6-c", "output-dataC-8-c",  "output-dataC-7-c", "disponibilidadC", 
     "disponibilidad-2C", "output-dataC-9-c", "retiroC", "output-dataC-10-c" )
    document.getElementById("output-areaC").value = generateAD.descripcionAperturaDoble();
    copyDescriptionAD();
})
let copyDescriptionAD =()=> {
    var copyText = document.getElementById("output-areaC");
    copyText.select();
    document.execCommand("copy");
};
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE"//
//END--------------------------------------------------//