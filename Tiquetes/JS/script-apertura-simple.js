// CLEAR BUTTON
let clearTextAreaA =()=> {
    let outputs = document.querySelectorAll('[id^="output-data-"], [id^="output-dataB"]');
    for (let i = 0; i < outputs.length; i++) {
      outputs[i].value = "";
    }
    document.getElementById("input-dataA").value = "";
    document.getElementById("input-dataB").value = "";
    document.getElementById("output-area-resumen").value = "";
    document.getElementById("output-area").value = "";
  };
// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO A
const inputDataA = document.getElementById("input-dataA");
const outputData = document.querySelectorAll('[id^="output-data-"]');

inputDataA.addEventListener('input', () => {
    const data = inputDataA.value.split('\n');
    outputData.forEach((output, index) => {
        output.value = data[index] || '';
    });
});
// CLIENTE EXTREMO B
const inputDataB = document.getElementById('input-dataB');
const outputDataB = document.querySelectorAll('[id^="output-dataB-"]');

inputDataB.addEventListener('input', () => {
    const dataB = inputDataB.value.split('\n');
    outputDataB.forEach((output, index) => {
        output.value = dataB[index] || '';
    });
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTERMO A
let uncheckNo =()=> { document.getElementById("no-retiro").checked = false; };
let uncheckSi =()=> { document.getElementById("si-retiro").checked = false; };
// CLIENTE EXTREMO B
let uncheckNoB =()=> { document.getElementById("no-retiroB").checked = false; };
let uncheckSiB =()=> { document.getElementById("si-retiroB").checked = false; };
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA
let generateOutput =()=> {
    const disponibilidad = document.getElementById("disponibilidad").value;
    const disponibilidad2 = document.getElementById("disponibilidad-2").value;
    const disponibilidadB = document.getElementById("disponibilidadB").value;
    const disponibilidad2B = document.getElementById("disponibilidad-2B").value;
    const medidasTomadas = document.getElementById("browser").value;
    const medidasTomadasB = document.getElementById("browserB").value;
    const pedidoRetiro = document.querySelector('input[name="retiro"]:checked').value;
    const pedidoRetiroB = document.querySelector('input[name="retiroB"]:checked').value;

    // output.push('CIUDAD: ' + document.getElementById('output-data-2').value);
    const output = `Se presenta apertura simple en el ANILLO: ${document.getElementById('output-data-1').value} En la ciudad de: ${document.getElementById('output-data-2').value} Entre los clientes: ${document.getElementById('output-data-3').value} Por el puerto GIGA ${document.getElementById('output-data-5').value} Y el Puerto GIGA: ${document.getElementById('output-dataB-3-1').value}
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
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('output-data-10').value}

NOMBRE CLIENTE EXTREMO B: ${document.getElementById('output-dataB-1-1').value}
IP SWITCH EXTREMO B: ${document.getElementById('output-dataB-2-1').value}
PUERTO SWITCH CAÍDO EN EXTREMO B: ${document.getElementById('output-dataB-3-1').value}
CONTACTO CLIENTE EXTREMO B: ${document.getElementById('output-dataB-4-1').value}
DIRECCIÓN CLIENTE EXTREMO B: ${document.getElementById('output-dataB-5-1').value}
TELÉFONO CLIENTE EXTREMO B: ${document.getElementById('output-dataB-6-1').value}
CORREO CLIENTE EXTREMO B: ${document.getElementById('output-dataB-7-1').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${disponibilidadB} a ${disponibilidad2B}
MEDIDAS TOMADAS CON OTDR CLIENTE B: ${medidasTomadasB}
PEDIDO DE RETIRO (SI/NO): ${pedidoRetiroB}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${document.getElementById('output-dataB-8-1').value}
`;
    const outputArea = document.getElementById('output-area');
    outputArea.value = output;
};

let generateOutputResumen =()=> {
    const output = `Se presenta apertura simple en el ANILLO: ${document.getElementById('output-data-1').value} En la ciudad de: ${document.getElementById('input_ciudad').value} Entre los clientes: ${document.getElementById('input_nombreA').value} Por el puerto GIGA ${document.getElementById('input_puertoA').value} Y el Puerto GIGA: ${document.getElementById('inputB_puertoB').value}`;
    const outputArea_1 = document.getElementById('output-area-resumen');
    outputArea_1.value = output;
};

let copyToClipboard =(elementId)=> {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
};