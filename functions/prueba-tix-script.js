// CLEAR BUTTON

function clearTextArea() {
    document.getElementById("input-data").value = "";
    document.getElementById('output-data-1').value = "";
    document.getElementById('output-data-2').value = "";
    document.getElementById('output-data-3').value = "";
    document.getElementById('output-data-4').value = "";
    document.getElementById('output-data-5').value = "";
    document.getElementById('output-data-6').value = "";
    document.getElementById('output-data-7').value = "";
    document.getElementById('output-data-8').value = "";
    document.getElementById('output-data-9').value = "";
    document.getElementById('output-data-10').value = "";
    document.getElementById('output-area-resumen').value = "";
    document.getElementById('output-area').value = "";
}  

// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
const inputData = document.getElementById('input-data');
const outputData1 = document.getElementById('output-data-1');
const outputData2 = document.getElementById('output-data-2');
const outputData3 = document.getElementById('output-data-3');
const outputData4 = document.getElementById('output-data-4');
const outputData5 = document.getElementById('output-data-5');
const outputData6 = document.getElementById('output-data-6');
const outputData7 = document.getElementById('output-data-7');
const outputData8 = document.getElementById('output-data-8');
const outputData9 = document.getElementById('output-data-9');
const outputData10 = document.getElementById('output-data-10');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData1.value = data[0] || '';
    outputData2.value = data[1] || '';
    outputData3.value = data[2] || '';
    outputData4.value = data[3] || '';
    outputData5.value = data[4] || '';
    outputData6.value = data[5] || '';
    outputData7.value = data[6] || '';
    outputData8.value = data[7] || '';
    outputData9.value = data[8] || '';
    outputData10.value = data[9] || '';
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// 
// 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
function uncheckNo() {
    document.getElementById("no-retiro").checked = false;
}

function uncheckSi() {
    document.getElementById("si-retiro").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA

function generateOutput() {
    const output = [];
    const disponibilidad = document.getElementById("disponibilidad").value;
    const disponibilidad2 = document.getElementById("disponibilidad-2").value;
    const medidasTomadas = document.getElementById("browser").value;
    const pedidoRetiro = document.querySelector('input[name="retiro"]:checked').value;

    output.push('Se presenta apertura simple en el ANILLO: ' + document.getElementById('output-data-1').value + ' En la ciudad de: ' + document.getElementById('output-data-2').value + ' Entre los clientes: ' + document.getElementById('output-data-3').value + ' Por el puerto GIGA ' + document.getElementById('output-data-5').value + ' Y el Puerto GIGA: ');
    // output.push('CIUDAD: ' + document.getElementById('output-data-2').value);
    output.push('NOMBRE CLIENTE EXTREMO A: ' + document.getElementById('output-data-3').value);
    output.push('IP SWITCH EXTREMO A: ' + document.getElementById('output-data-4').value);
    output.push('PUERTO SWITCH CAÍDO EN EXTREMO A: ' + document.getElementById('output-data-5').value);
    output.push('CONTACTO CLIENTE EXTREMO A: ' + document.getElementById('output-data-6').value);
    output.push('DIRECCIÓN CLIENTE EXTREMO A: ' + document.getElementById('output-data-7').value);
    output.push('TELÉFONO CLIENTE EXTREMO A: ' + document.getElementById('output-data-8').value);
    output.push('CORREO CLIENTE EXTREMO A: ' + document.getElementById('output-data-9').value);
    output.push('DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ' + disponibilidad + ' a ' + disponibilidad2);
    output.push('MEDIDAS TOMADAS CON OTDR CLIENTE A: ' + medidasTomadas);
    output.push('PEDIDO DE RETIRO (SI/NO): ' + pedidoRetiro);
    output.push('DESCARTES REALIZADOS CLIENTE EXTREMO A: ' + document.getElementById('output-data-10').value);
    
    const outputArea = document.getElementById('output-area');
    outputArea.value = output.join('\n');
}

function generateOutputResumen(){
    const output = [];

    output.push('Se presenta apertura simple en el ANILLO: ' + document.getElementById('output-data-1').value + ' En la ciudad de: ' + document.getElementById('output-data-2').value + ' Entre los clientes: ' + document.getElementById('output-data-3').value + ' Por el puerto GIGA ' + document.getElementById('output-data-5').value + ' Y el Puerto GIGA: ');

    const outputArea_1 = document.getElementById('output-area-resumen');
    outputArea_1.value = output.join('\n');
}

function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// Se presenta apertura simple en el anillo as4d8ads4(as8dasd) entre los clientes asdasd por el puerto Giga84/84/84 contra  por el puerto Giga//