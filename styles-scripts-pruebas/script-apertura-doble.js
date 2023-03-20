// CLEAR BUTTON

function clearTextArea() {
    document.getElementById("input-dataC").value = "";
    document.getElementById('output-data-1-c').value = "";
    document.getElementById('output-data-2-c').value = "";
    document.getElementById('output-data-3-c').value = "";
    document.getElementById('output-data-4-c').value = "";
    document.getElementById('output-data-5-c').value = "";
    document.getElementById('output-data-6-c').value = "";
    document.getElementById('output-data-7-c').value = "";
    document.getElementById('output-data-8-c').value = "";
    document.getElementById('output-data-9-c').value = "";
    document.getElementById('output-area-resumenC').value = "";
    document.getElementById('output-areaC').value = "";
}

// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
const inputDataC = document.getElementById('input-dataC');
const outputData1C = document.getElementById('output-data-1-c');
const outputData2C = document.getElementById('output-data-2-c');
const outputData3C = document.getElementById('output-data-3-c');
const outputData4C = document.getElementById('output-data-4-c');
const outputData5C = document.getElementById('output-data-5-c');
const outputData6C = document.getElementById('output-data-6-c');
const outputData7C = document.getElementById('output-data-7-c');
const outputData8C = document.getElementById('output-data-8-c');
const outputData9C = document.getElementById('output-data-9-c');

inputDataC.addEventListener('input', () => {
    const dataC = inputDataC.value.split('\n');
    outputData1C.value = dataC[0] || '';
    outputData2C.value = dataC[1] || '';
    outputData3C.value = dataC[2] || '';
    outputData4C.value = dataC[3] || '';
    outputData5C.value = dataC[4] || '';
    outputData6C.value = dataC[5] || '';
    outputData7C.value = dataC[6] || '';
    outputData8C.value = dataC[7] || '';
    outputData9C.value = dataC[8] || '';
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// 
// 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
function uncheckNoC() {
    document.getElementById("no-retiroC").checked = false;
}

function uncheckSiC() {
    document.getElementById("si-retiroC").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA

function generateOutputC() {
    const output = [];
    const disponibilidadC = document.getElementById("disponibilidadC").value;
    const disponibilidad2C = document.getElementById("disponibilidad-2C").value;
    const medidasTomadasC = document.getElementById("browserC").value;
    const pedidoRetiroC = document.querySelector('input[name="retiroC"]:checked').value;

    output.push('SE PRESENTA APERTURA DOBLE EN EL ANILLO ' + document.getElementById('output-data-1-c').value + ' AFECTANDO COMUNICACIONES DEL CLIENTE ' + document.getElementById('output-data-4-c').value);
    // output.push('CIUDAD: ' + document.getElementById('output-data-2').value);
    output.push('ANILLO: ' + document.getElementById('output-data-1-c').value);
    output.push('IP SWITCH: ' + document.getElementById('output-data-2-c').value);
    output.push('CIUDAD: ' + document.getElementById('output-data-3-c').value);
    output.push('NOMBRE DEL CLIENTE: ' + document.getElementById('output-data-4-c').value);
    output.push('DIRECCION DEL CLIENTE: ' + document.getElementById('output-data-6-c').value);
    output.push('TELEFONO DEL CLIENTE: ' + document.getElementById('output-data-5-c').value);
    output.push('CORREO DEL CLIENTE: ' + document.getElementById('output-data-7-c').value);
    output.push('DISPONIBILIDAD: ' + disponibilidadC + ' DISPONIBILIDAD HASTA ' + disponibilidad2C);
    output.push('MEDIDAS TOMADAS CON OTDR CLIENTE: ' + medidasTomadasC);
    output.push('PEDIDO DE RETIRO: ' + pedidoRetiroC);
    output.push('DESCARTES REALIZADOS: ' + document.getElementById('output-data-9-c').value);
    output.push('\n');
    output.push('NOTA: Se debe garantizar que al cerrar el anillo los niveles de potencia queden entre los rangos establecidos');

    const outputArea = document.getElementById('output-areaC');
    outputArea.value = output.join('\n');
}

function generateOutputResumenC() {
    const output = [];

    output.push('SE PRESENTA APERTURA DOBLE EN EL ANILLO ' + document.getElementById('output-data-1-c').value + ' AFECTANDO COMUNICACIONES DEL CLIENTE ' + document.getElementById('output-data-4-c').value);

    const outputArea_1 = document.getElementById('output-area-resumenC');
    outputArea_1.value = output.join('\n');
}

function copyToClipboardC(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
}

// Se presenta apertura simple en el anillo as4d8ads4(as8dasd) entre los clientes asdasd por el puerto Giga84/84/84 contra  por el puerto Giga//