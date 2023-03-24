// CLEAR BUTTON
let clearTextArea =()=> {
    const outputDataC = document.querySelectorAll('[id^="output-data-"]');
    const textAreas = document.querySelectorAll('textarea');
    textAreas.forEach(textArea => textArea.value = '');
    outputDataC.forEach(output => output.value = '');
};
// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
const outputDataC = document.querySelectorAll('[id^="output-data-"]');
const inputDataC = document.getElementById('input-dataC');

inputDataC.addEventListener('input', () => {
    const dataC = inputDataC.value.split('\n');
    outputDataC.forEach((output, index) => {
        output.value = dataC[index] || '';
    });
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
 
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
let uncheckNoC =()=> { document.getElementById("no-retiroC").checked = false; };
let uncheckSiC =()=> { document.getElementById("si-retiroC").checked = false; };
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA
let generateOutputC =()=> {
    const disponibilidadC = document.getElementById("disponibilidadC").value;
    const disponibilidad2C = document.getElementById("disponibilidad-2C").value;
    const medidasTomadasC = document.getElementById("browserC").value;
    const pedidoRetiroC = document.querySelector('input[name="retiroC"]:checked').value;
    
    //output.push('CIUDAD: ' + document.getElementById('output-data-2').value)
    const output = `SE PRESENTA APERTURA DOBLE EN EL ANILLO ${document.getElementById('output-data-1-c').value} AFECTANDO COMUNICACIONES DEL CLIENTE ${document.getElementById('output-data-4-c').value}
ANILLO: ${document.getElementById('output-data-1-c').value}
IP SWITCH: ${document.getElementById('output-data-2-c').value}
CIUDAD: ${document.getElementById('output-data-3-c').value}
NOMBRE DEL CLIENTE: ${document.getElementById('output-data-4-c').value}
DIRECCION DEL CLIENTE: ${document.getElementById('output-data-6-c').value}
TELEFONO DEL CLIENTE: ${document.getElementById('output-data-5-c').value}
CORREO DEL CLIENTE: ${document.getElementById('output-data-7-c').value}
DISPONIBILIDAD: ${disponibilidadC} DISPONIBILIDAD HASTA ${disponibilidad2C}
MEDIDAS TOMADAS CON OTDR CLIENTE: ${medidasTomadasC}
PEDIDO DE RETIRO: ${pedidoRetiroC}
DESCARTES REALIZADOS: ${document.getElementById('output-data-9-c').value}
    
NOTA: Se debe garantizar que al cerrar el anillo los niveles de potencia queden entre los rangos establecidos`;

    const outputArea = document.getElementById('output-areaC');
    outputArea.value = output;
};

let generateOutputResumenC =()=> {
    const output = `SE PRESENTA APERTURA DOBLE EN EL ANILLO ${document.getElementById('output-data-1-c').value} AFECTANDO COMUNICACIONES DEL CLIENTE ${document.getElementById('output-data-4-c').value}`;
    const outputArea_1 = document.getElementById('output-area-resumenC');
    outputArea_1.value = output;
};

let copyToClipboardC =(elementId)=> {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
};

// Se presenta apertura simple en el anillo as4d8ads4(as8dasd) entre los clientes asdasd por el puerto Giga84/84/84 contra  por el puerto Giga//