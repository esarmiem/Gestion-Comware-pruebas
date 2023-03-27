// CLEAR BUTTON
function clearTextArea() {
    var outputs = document.querySelectorAll('[id^="output-data-"]');
    for (var i = 0; i < outputs.length; i++) {
      outputs[i].value = "";
    }
    document.getElementById("input-data").value = "";
    document.getElementById("output-area-resumen").value = "";
    document.getElementById("output-area").value = "";
  } 
// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
const inputData = document.getElementById('input-data');
const outputData = document.querySelectorAll('[id^="output-data-"]');

inputData.addEventListener('input', () => {
    const data = inputData.value.split('\n');
    outputData.forEach((output, index) => {
        output.value = data[index] || '';
    });
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS

// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
function uncheckNo() {
    document.getElementById("no-retiro").checked = false;
}
function uncheckSi() {
    document.getElementById("si-retiro").checked = false;
}
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER


// FUNCIÓN PARA GENERAR DESCRIPCION Y RESUMEN DE LA INFORMACION INGRESADA
function generateOutput() {
    const disponibilidad = document.getElementById("disponibilidad").value;
    const disponibilidad2 = document.getElementById("disponibilidad-2").value;
    const medidasTomadas = document.getElementById("browser").value;
    const pedidoRetiro = document.querySelector('input[name="retiro"]:checked').value;

    const output = `Se presenta apertura simple en el ANILLO: ${document.getElementById('output-data-1').value} 
En la ciudad de: ${document.getElementById('output-data-2').value} 
Entre los clientes: ${document.getElementById('output-data-3').value} 
Por el puerto GIGA ${document.getElementById('output-data-5').value} Y el Puerto GIGA:

NOMBRE CLIENTE EXTREMO A: ${document.getElementById('output-data-3').value}
IP SWITCH EXTREMO A: ${document.getElementById('output-data-4').value}
PUERTO SWITCH CAÍDO EN EXTREMO A: ${document.getElementById('output-data-5').value}
CONTACTO CLIENTE EXTREMO A: ${document.getElementById('output-data-6').value}
DIRECCIÓN CLIENTE EXTREMO A: ${document.getElementById('output-data-7').value}
TELÉFONO CLIENTE EXTREMO A: ${document.getElementById('output-data-8').value}
CORREO CLIENTE EXTREMO A: ${document.getElementById('output-data-9').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${disponibilidad} a ${disponibilidad2}
MEDIDAS TOMADAS CON OTDR CLIENTE A: ${medidasTomadas}
PEDIDO DE RETIRO (SI/NO): ${pedidoRetiro}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('output-data-10').value}`;

    const outputArea = document.getElementById('output-area');
    outputArea.value = output;
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
    // alert("Copied to clipboard!");
}

// Se presenta apertura simple en el anillo as4d8ads4(as8dasd) entre los clientes asdasd por el puerto Giga84/84/84 contra  por el puerto Giga//