// CLEAR BUTTON

function clearTextAreaA() {
    document.getElementById("input-dataA").value = "";
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
    // 
    document.getElementById("input-dataB").value = "";
    document.getElementById('output-data-1-1').value = "";
    document.getElementById('output-data-2-1').value = "";
    document.getElementById('output-data-3-1').value = "";
    document.getElementById('output-data-4-1').value = "";
    document.getElementById('output-data-5-1').value = "";
    document.getElementById('output-data-6-1').value = "";
    document.getElementById('output-data-7-1').value = "";
    document.getElementById('output-data-8-1').value = "";
    document.getElementById('output-area-resumen').value = "";
    document.getElementById('output-area').value = "";
}

// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO A
const inputDataA = document.getElementById('input-dataA');
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

inputDataA.addEventListener('input', () => {
    const data = inputDataA.value.split('\n');
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

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO B
const inputDataB = document.getElementById('input-dataB');
const outputData1B = document.getElementById('output-data-1-1');
const outputData2B = document.getElementById('output-data-2-1');
const outputData3B = document.getElementById('output-data-3-1');
const outputData4B = document.getElementById('output-data-4-1');
const outputData5B = document.getElementById('output-data-5-1');
const outputData6B = document.getElementById('output-data-6-1');
const outputData7B = document.getElementById('output-data-7-1');
const outputData8B = document.getElementById('output-data-8-1');

inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputData1B.value = dataB[0] || '';
    outputData2B.value = dataB[1] || '';
    outputData3B.value = dataB[2] || '';
    outputData4B.value = dataB[3] || '';
    outputData5B.value = dataB[4] || '';
    outputData6B.value = dataB[5] || '';
    outputData7B.value = dataB[6] || '';
    outputData8B.value = dataB[7] || '';
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// 
// 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTERMO A
function uncheckNo() {
    document.getElementById("no-retiro").checked = false;
}

function uncheckSi() {
    document.getElementById("si-retiro").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTREMO B
function uncheckNoB() {
    document.getElementById("no-retiroB").checked = false;
}

function uncheckSiB() {
    document.getElementById("si-retiroB").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA

function generateOutput() {
    const output = [];
    const disponibilidad = document.getElementById("disponibilidad").value;
    const disponibilidad2 = document.getElementById("disponibilidad-2").value;
    const disponibilidadB = document.getElementById("disponibilidadB").value;
    const disponibilidad2B = document.getElementById("disponibilidad-2B").value;
    const medidasTomadas = document.getElementById("browser").value;
    const medidasTomadasB = document.getElementById("browserB").value;
    const pedidoRetiro = document.querySelector('input[name="retiro"]:checked').value;
    const pedidoRetiroB = document.querySelector('input[name="retiroB"]:checked').value;

    output.push('Se presenta apertura simple en el ANILLO: ' + document.getElementById('output-data-1').value + ' En la ciudad de: ' + document.getElementById('output-data-2').value + ' Entre los clientes: ' + document.getElementById('output-data-3').value + ' Por el puerto GIGA ' + document.getElementById('output-data-5').value + ' Y el Puerto GIGA: ' + document.getElementById('output-data-3-1').value);
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
    output.push('\n');
    output.push('NOMBRE CLIENTE EXTREMO B: ' + document.getElementById('output-data-1-1').value);
    output.push('IP SWITCH EXTREMO B: ' + document.getElementById('output-data-2-1').value);
    output.push('PUERTO SWITCH CAÍDO EN EXTREMO B: ' + document.getElementById('output-data-3-1').value);
    output.push('CONTACTO CLIENTE EXTREMO B: ' + document.getElementById('output-data-4-1').value);
    output.push('DIRECCIÓN CLIENTE EXTREMO B: ' + document.getElementById('output-data-5-1').value);
    output.push('TELÉFONO CLIENTE EXTREMO B: ' + document.getElementById('output-data-6-1').value);
    output.push('CORREO CLIENTE EXTREMO B: ' + document.getElementById('output-data-7-1').value);
    output.push('DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ' + disponibilidadB + ' a ' + disponibilidad2B);
    output.push('MEDIDAS TOMADAS CON OTDR CLIENTE B: ' + medidasTomadasB);
    output.push('PEDIDO DE RETIRO (SI/NO): ' + pedidoRetiroB);
    output.push('DESCARTES REALIZADOS CLIENTE EXTREMO B: ' + document.getElementById('output-data-8-1').value);

    const outputArea = document.getElementById('output-area');
    outputArea.value = output.join('\n');
}

function generateOutputResumen() {
    const output = [];

    output.push('Se presenta apertura simple en el ANILLO: ' + document.getElementById('output-data-1').value + ' En la ciudad de: ' + document.getElementById('output-data-2').value + ' Entre los clientes: ' + document.getElementById('output-data-3').value + ' Por el puerto GIGA ' + document.getElementById('output-data-5').value + ' Y el Puerto GIGA: ' + document.getElementById('output-data-3-1').value);

    const outputArea_1 = document.getElementById('output-area-resumen');
    outputArea_1.value = output.join('\n');
}

function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
}