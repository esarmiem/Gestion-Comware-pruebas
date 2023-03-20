// CLEAR BUTTON

function clearTextAreaD() {
    document.getElementById("input-dataD").value = "";
    document.getElementById('output-data-1-d').value = "";
    document.getElementById('output-data-2-d').value = "";
    document.getElementById('output-data-3-d').value = "";
    document.getElementById('output-data-4-d').value = "";
    document.getElementById('output-data-5-d').value = "";
    document.getElementById('output-data-6-d').value = "";
    document.getElementById('output-data-7-d').value = "";
    document.getElementById('output-data-8-d').value = "";
    document.getElementById('output-data-9-d').value = "";
    // 
    document.getElementById("input-dataD-1").value = "";
    document.getElementById('output-data-1-1-d').value = "";
    document.getElementById('output-data-2-1-d').value = "";
    document.getElementById('output-data-3-1-d').value = "";
    document.getElementById('output-data-4-1-d').value = "";
    document.getElementById('output-data-5-1-d').value = "";
    document.getElementById('output-data-6-1-d').value = "";
    document.getElementById('output-data-7-1-d').value = "";
    document.getElementById('output-area-resumenD').value = "";
    document.getElementById('output-areaD').value = "";
}

// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO A
const inputDataD = document.getElementById('input-dataD');
const outputData1D = document.getElementById('output-data-1-d');
const outputData2D = document.getElementById('output-data-2-d');
const outputData3D = document.getElementById('output-data-3-d');
const outputData4D = document.getElementById('output-data-4-d');
const outputData5D = document.getElementById('output-data-5-d');
const outputData6D = document.getElementById('output-data-6-d');
const outputData7D = document.getElementById('output-data-7-d');
const outputData8D = document.getElementById('output-data-8-d');
const outputData9D = document.getElementById('output-data-9-d');

inputDataD.addEventListener('input', () => {
    const dataD = inputDataD.value.split('\n');
    outputData1D.value = dataD[0] || '';
    outputData2D.value = dataD[1] || '';
    outputData3D.value = dataD[2] || '';
    outputData4D.value = dataD[3] || '';
    outputData5D.value = dataD[4] || '';
    outputData6D.value = dataD[5] || '';
    outputData7D.value = dataD[6] || '';
    outputData8D.value = dataD[7] || '';
    outputData9D.value = dataD[8] || '';
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO B
const inputDataD1 = document.getElementById('input-dataD-1');
const outputData1D1 = document.getElementById('output-data-1-1-d');
const outputData2D1 = document.getElementById('output-data-2-1-d');
const outputData3D1 = document.getElementById('output-data-3-1-d');
const outputData4D1 = document.getElementById('output-data-4-1-d');
const outputData5D1 = document.getElementById('output-data-5-1-d');
const outputData6D1 = document.getElementById('output-data-6-1-d');
const outputData7D1 = document.getElementById('output-data-7-1-d');

inputDataD1.addEventListener('input', () => {
    const dataD1 = inputDataD1.value.split('\n');
    outputData1D1.value = dataD1[0] || '';
    outputData2D1.value = dataD1[1] || '';
    outputData3D1.value = dataD1[2] || '';
    outputData4D1.value = dataD1[3] || '';
    outputData5D1.value = dataD1[4] || '';
    outputData6D1.value = dataD1[5] || '';
    outputData7D1.value = dataD1[6] || '';
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// 
// 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTERMO A
function uncheckNoD() {
    document.getElementById("no-retiroD").checked = false;
}

function uncheckSiD() {
    document.getElementById("si-retiroD").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTREMO B
function uncheckNoD1() {
    document.getElementById("no-retiroD-1").checked = false;
}

function uncheckSiD1() {
    document.getElementById("si-retiroD-1").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA

function generateOutputD() {
    const outputD = [];
    const disponibilidadD = document.getElementById("disponibilidadD").value;
    const disponibilidadD2 = document.getElementById("disponibilidad-2D").value;
    const disponibilidadD1 = document.getElementById("disponibilidadD-1").value;
    const disponibilidadD2D = document.getElementById("disponibilidad-2D-1").value;
    const pedidoRetiroD = document.querySelector('input[name="retiroD-1"]:checked').value;
    const pedidoRetiroD1 = document.querySelector('input[name="retiroD-1"]:checked').value;

    outputD.push('SE PRESENTA APERTURA DOBLE EN EL ANILLO ' + document.getElementById('output-data-1-d').value + '(' + document.getElementById('output-data-2-d').value + ')' + ' ENTRE LOS CLIENTES ' + document.getElementById('output-data-3-d').value + ' Y ' + document.getElementById('output-data-1-1-d').value);
    outputD.push('ANILLO: ' + document.getElementById('output-data-1-d').value);
    outputD.push('CIUDAD: ' + document.getElementById('output-data-2-d').value);
    outputD.push('NOMBRE CLIENTE CAIDO EXTREMO A: ' + document.getElementById('output-data-3-d').value);
    outputD.push('IP SWITCH CLIENTE EXTREMO A: ' + document.getElementById('output-data-4-d').value);
    outputD.push('CONTACTO CLIENTE CAIDO EXTREMO A : ' + document.getElementById('output-data-5-d').value);
    outputD.push('CORREO CLIENTE CAIDO EXTREMO A: ' + document.getElementById('output-data-6-d').value);
    outputD.push('DIRECCIÓN CLIENTE CAIDO EXTREMO A: ' + document.getElementById('output-data-8-d').value);
    outputD.push('TELÉFONO CLIENTE CAIDO EXTREMO A: ' + document.getElementById('output-data-7-d').value);
    outputD.push('DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ' + disponibilidadD + ' a ' + disponibilidadD2);
    outputD.push('PEDIDO DE RETIRO (SI/NO): ' + pedidoRetiroD);
    outputD.push('DESCARTES REALIZADOS CLIENTE EXTREMO A: ' + document.getElementById('output-data-9-d').value);
    outputD.push('\n');
    outputD.push('NOMBRE CLIENTE CAIDO EXTREMO B: ' + document.getElementById('output-data-1-1-d').value);
    outputD.push('IP SWITCH CLIENTE EXTREMO B: ' + document.getElementById('output-data-2-1-d').value);
    outputD.push('CONTACTO CLIENTE CAIDO EXTREMO B: ' + document.getElementById('output-data-3-1-d').value);
    outputD.push('CORREO CLIENTE CAIDO EXTREMO B: ' + document.getElementById('output-data-4-1-d').value);
    outputD.push('DIRECCIÓN CLIENTE CAIDO EXTREMO B: ' + document.getElementById('output-data-6-1-d').value);
    outputD.push('TELÉFONO CLIENTE CAIDO EXTREMO B: ' + document.getElementById('output-data-5-1-d').value);
    outputD.push('DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ' + disponibilidadD1 + ' a ' + disponibilidadD2D);
    outputD.push('PEDIDO DE RETIRO (SI/NO): ' + pedidoRetiroD1);
    outputD.push('DESCARTES REALIZADOS CLIENTE EXTREMO B: ' + document.getElementById('output-data-7-1-d').value);

    const outputAreaD = document.getElementById('output-areaD');
    outputAreaD.value = outputD.join('\n');
}

function generateOutputResumenD() {
    const outputD = [];

    outputD.push('SE PRESENTA APERTURA DOBLE EN EL ANILLO ' + document.getElementById('output-data-1-d').value + '(' + document.getElementById('output-data-2-d').value + ')' + ' ENTRE LOS CLIENTES ' + document.getElementById('output-data-3-d').value + ' Y ' + document.getElementById('output-data-1-1-d').value);

    const outputArea_1D = document.getElementById('output-area-resumenD');
    outputArea_1D.value = outputD.join('\n');
}

function copyToClipboardD(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
}