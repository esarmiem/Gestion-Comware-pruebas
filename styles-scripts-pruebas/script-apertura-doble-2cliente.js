// CLEAR BUTTON
let clearTextAreaD =()=> {
    let outputs = document.querySelectorAll('[id^="output-data-"], [id^="output-dataB"]');
    for (let i = 0; i < outputs.length; i++) {
      outputs[i].value = "";
    };
    document.getElementById("input-dataD").value = "";
    document.getElementById("input-dataD-1").value = "";
    document.getElementById("output-area-resumenD").value = "";
    document.getElementById("output-areaD").value = "";
  };
// CLEAR BUTTON

// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS
// CLIENTE EXTREMO A
const inputDataD = document.getElementById('input-dataD');
const outputData = document.querySelectorAll('[id^="output-data-"]');

inputDataD.addEventListener('input', () => {
    const dataD = inputDataD.value.split('\n');
    outputData.forEach((output, index) => {
        output.value = dataD[index] || '';
    });
});
// CLIENTE EXTREMO B
const inputDataD1 = document.getElementById('input-dataD-1');
const outputData1 = document.querySelectorAll('[id^="output-dataB-"]');

inputDataD1.addEventListener('input', () => {
    const dataD1 = inputDataD1.value.split('\n');
    outputData1.forEach((output, index) => {
        output.value = dataD1[index] || '';
    });
});
// INSERTS DATA FROM A TEXTAREA INPUT AND FILLS OTHER INPUTS

// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER
// CLIENTE EXTERMO A
let uncheckNoD =()=> { document.getElementById("no-retiroD").checked = false;};
let uncheckSiD =()=> { document.getElementById("si-retiroD").checked = false;};
// CLIENTE EXTREMO B
let uncheckNoD1 =()=> { document.getElementById("no-retiroD-1").checked = false;};
let uncheckSiD1 =()=> { document.getElementById("si-retiroD-1").checked = false;};
// FUNCION CHECK IF SI OR NO ARE CHECK AND UNCHECK THE OTHER

// FUNCION PARA AGREGAR LA INFORMACION RESPECTIVA
let generateOutputD =()=> {
    const disponibilidadD = document.getElementById("disponibilidadD").value;
    const disponibilidadD2 = document.getElementById("disponibilidad-2D").value;
    const disponibilidadD1 = document.getElementById("disponibilidadD-1").value;
    const disponibilidadD2D = document.getElementById("disponibilidad-2D-1").value;
    const pedidoRetiroD = document.querySelector('input[name="retiroD-1"]:checked').value;
    const pedidoRetiroD1 = document.querySelector('input[name="retiroD-1"]:checked').value;

    const outputD = `SE PRESENTA APERTURA DOBLE EN EL ANILLO ${document.getElementById('output-data-1-d').value}(${document.getElementById('output-data-2-d').value}) ENTRE LOS CLIENTES ${document.getElementById('output-data-3-d').value} Y ${document.getElementById('output-dataB-1-d').value}
ANILLO: ${document.getElementById('output-data-1-d').value}
CIUDAD: ${document.getElementById('output-data-2-d').value}
NOMBRE DEL CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-3-d').value}
IP SWITCH CLIENTE EXTREMO A: ${document.getElementById('output-data-4-d').value}
CONTACTO CLIENTE CAIDO EXTREMO A : ${document.getElementById('output-data-5-d').value}
CORREO CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-6-d').value}
DIRECCIÓN CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-8-d').value}
TELÉFONO CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-7-d').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${disponibilidadD} a ${disponibilidadD2}
PEDIDO DE RETIRO (SI/NO): ${pedidoRetiroD}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('output-data-9-d').value}

NOMBRE CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-1-d').value}
IP SWITCH CLIENTE EXTREMO B: ${document.getElementById('output-dataB-2-d').value}
CONTACTO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-3-d').value}
CORREO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-4-d').value}
DIRECCIÓN CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-6-d').value}
TELÉFONO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-5-d').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${disponibilidadD1} a ${disponibilidadD2D}
PEDIDO DE RETIRO (SI/NO): ${pedidoRetiroD1}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${document.getElementById('output-dataB-7-d').value}`;

    const outputAreaD = document.getElementById('output-areaD');
    outputAreaD.value = outputD;
};

let generateOutputResumenD =()=> { 
    const outputD = `SE PRESENTA APERTURA DOBLE EN EL ANILLO ${document.getElementById('output-data-1-d').value}(${document.getElementById('output-data-2-d').value}) ENTRE LOS CLIENTES ${document.getElementById('output-data-3-d').value} Y ${document.getElementById('output-dataB-1-d').value}`;
    const outputArea_1D = document.getElementById('output-area-resumenD');
    outputArea_1D.value = outputD;
};

let copyToClipboardD =(elementId)=> {
    let copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    // alert("Copied to clipboard!");
};