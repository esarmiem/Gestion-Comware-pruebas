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
//COPY DESCRIPTION//
document.getElementById("descripcionAD2").addEventListener("click", ()=>{
document.getElementById("output-areaD").value = descripcionAperturaDoble2C();
copyDescripcionAD2();
});
let copyDescripcionAD2 =()=> {
    let copyText = document.getElementById("output-areaD");
    copyText.select();
    document.execCommand("copy");
}
//METHODS, PROPERTIES AND FUNCTIONS OF "APERTURA DOBLE 2 CLIENTES"//
//END-------------------------------------------------------------//