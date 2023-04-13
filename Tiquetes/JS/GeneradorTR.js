//TEMPLATE FOR THE GENERATION OF DESCRIPTION AND SUMMARY "TEMPLATES"//
//------------------------------------------------------------------//
//------------------------SUMMARY GENERATOR-------------------------//
class SummaryGenerator {
    constructor(inputAnilloId = '', inputCiudadId = '', inputNombreAId = '', inputNombreBId = '', inputPuertoAId = '', inputPuertoBId = '') {
      this.input1 = document.getElementById(inputAnilloId)?.value ?? '';
      this.input2 = document.getElementById(inputNombreAId)?.value ?? '';
      this.input3 = document.getElementById(inputNombreBId)?.value ?? '';
      this.input4 = document.getElementById(inputCiudadId)?.value ?? '';
      this.input5 = document.getElementById(inputPuertoAId)?.value ?? '';
      this.input6 = document.getElementById(inputPuertoBId)?.value ?? '';
    }
  
    resumenAperturaSimple() {
      return `Se presenta apertura simple en el anillo ${this.input1}(${this.input4}) entre los clientes ${this.input2} Por el puerto Giga ${this.input5} contra ${this.input3} por el puerto Giga ${this.input6}`;
    }

    resumenAperturaDoble() {
      return `Se presenta apertura doble en el anillo ${this.input1}(${this.input4}) afectando comunicaciones del cliente ${this.input2}`
    }

    resumenAperturaDoble2C() {
      return `Se presenta apertura doble en el anillo ${this.input1}(${this.input4}) entre los clientes ${this.input2} y ${this.input3}`;
    }
  
    resumenRetiroDesdeEmpalme() {
      return `Se requiere realizar retiro desde el empalme del cliente ${this.input4} ubicado en el anillo ${this.input1}, el cual se encuentra apagado por más de 48 horas !!MONITOREO PROACTIVO¡¡`;
    }
  
    resumenReingresoDelAnillo(){
      return `Se requiere realizar el reingreso al anillo ${this.input1}(${this.input4}) desde el empalme de derivación al cliente ${this.input2}`;
    }

    resumenAlarmaDePotencia(){
      return `Se presenta alarma de potencia en el anillo ${this.input1}(${this.input4}) entre los clientes ${this.input2} por el puerto Giga ${this.input5} contra ${this.input3} por el puerto Giga ${this.input6}`;
    }
}

//------------------------------------------------------------------//
//----------------------DESCRIPTION GENERATOR-----------------------//
class DecriptionsGenerator{
  constructor( anilloId = "", ciudadId = "", nombreEmpresaAId = "", ipSwitchAId = "", puertoIpSwitchAId = "", contactoAId = "", direccionAId = "", telefonoAId = "", correoAId = "", dispoAId = "", dispoA2Id = "", medidasAId = "", pedidoRetiroAId = "", descarteAId = "", 
  nombreEmpresaBId = "", ipSwitchBId = "",  puertoIpSwitchBId = "", contactoBId = "", direccionBId = "", telefonoBId = "", correoBId = "", dispoBId = "", dispoB2Id = "", medidasBId = "", pedidoRetiroBId = "", descarteBId = "" ){
   
    //RESUMEN OF DESCRIPTION//
    this.anillo = document.getElementById(anilloId)?.value ?? '';
    this.ciudad = document.getElementById(ciudadId)?.value ?? '';

    //DESCRIPTION//
    //client A//
    this.entrada3 = document.getElementById(nombreEmpresaAId)?.value ?? '';
    this.entrada4 = document.getElementById(ipSwitchAId)?.value ?? '';
    this.entrada5 = document.getElementById(puertoIpSwitchAId)?.value ?? '';
    this.entrada6 = document.getElementById(contactoAId)?.value ?? '';
    this.entrada7 = document.getElementById(direccionAId)?.value ?? '';
    this.entrada8 = document.getElementById(telefonoAId)?.value ?? '';
    this.entrada9 = document.getElementById(correoAId)?.value ?? '';
    this.entrada10 = document.getElementById(dispoAId)?.value ?? '';
    this.entrada11 = document.getElementById(dispoA2Id)?.value ?? '';
    this.entrada12 = document.getElementById(medidasAId)?.value ?? '';
    this.entrada13 = null;
    const pedidoRetiroA = document.querySelector(`input[name="${pedidoRetiroAId}"]:checked`);
    if (pedidoRetiroA) {
      this.entrada13 = pedidoRetiroA.value;
    }
    this.entrada14 = document.getElementById(descarteAId)?.value ?? '';
  
    //Client B//
    this.entradaB1 = document.getElementById(nombreEmpresaBId)?.value ?? '';
    this.entradaB2 = document.getElementById(ipSwitchBId)?.value ?? '';
    this.entradaB3 = document.getElementById(puertoIpSwitchBId)?.value ?? '';
    this.entradaB4 = document.getElementById(contactoBId)?.value ?? '';
    this.entradaB5 = document.getElementById(direccionBId)?.value ?? '';
    this.entradaB6 = document.getElementById(telefonoBId)?.value ?? '';
    this.entradaB7 = document.getElementById(correoBId)?.value ?? '';
    this.entradaB8 = document.getElementById(dispoBId)?.value ?? '';
    this.entradaB9 = document.getElementById(dispoB2Id)?.value ?? '';
    this.entradaB10 = document.getElementById(medidasBId)?.value ?? '';
    this.entradaB11 = null;
    const pedidoRetiroB = document.querySelector(`input[name="${pedidoRetiroBId}"]:checked`);
    if (pedidoRetiroB) {
      this.entradaB11 = pedidoRetiroB.value;
    }
    this.entradaB12 = document.getElementById(descarteBId)?.value ?? '';
  }

  descripcionAperturaSimple(){
    return `Se presenta apertura simple en el anillo ${this.anillo}(${this.ciudad}) entre los clientes ${this.entrada3} por el puerto Giga ${this.entrada5} contra ${this.entradaB1} por el puerto Giga ${this.entradaB3}

NOMBRE CLIENTE EXTREMO A: ${this.entrada3}
IP SWITCH EXTREMO A: ${this.entrada4}
PUERTO SWITCH CAÍDO EN EXTREMO A: ${this.entrada5}
CONTACTO CLIENTE EXTREMO A: ${this.entrada6}
DIRECCIÓN CLIENTE EXTREMO A: ${this.entrada7}
TELÉFONO CLIENTE EXTREMO A: ${this.entrada8}
CORREO CLIENTE EXTREMO A: ${this.entrada9}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${ this.entrada10} a ${ this.entrada11}
MEDIDAS TOMADAS CON OTDR CLIENTE A: ${this.entrada12}
PEDIDO DE RETIRO (SI/NO): ${this.entrada13}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${this.entrada14} 
    
NOMBRE CLIENTE EXTREMO B: ${this.entradaB1}
IP SWITCH EXTREMO B: ${this.entradaB2}
PUERTO SWITCH CAÍDO EN EXTREMO B: ${this.entradaB3}
CONTACTO CLIENTE EXTREMO B: ${this.entradaB4}
DIRECCIÓN CLIENTE EXTREMO B: ${this.entradaB5}
TELÉFONO CLIENTE EXTREMO B: ${this.entradaB6}
CORREO CLIENTE EXTREMO B: ${this.entradaB7}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${this.entradaB8} a ${this.entradaB9} 
MEDIDAS TOMADAS CON OTDR CLIENTE B: ${this.entradaB10}
PEDIDO DE RETIRO (SI/NO): ${this.entradaB11}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${this.entradaB12}`;
  }

  descripcionAperturaDoble(){
  return `Se presenta apertura doble en el anillo ${this.anillo}(${this.ciudad}) afectando comunicaciones del cliente ${this.entrada3}

ANILLO: ${this.anillo}
IP SWITCH: ${this.entrada4}
CIUDAD: ${this.ciudad}
NOMBRE DEL CLIENTE: ${this.entrada3}
CONTACTO CLIENTE: ${this.entrada6}
DIRECCIÓN CLIENTE: ${this.entrada7}
TELÉFONO CLIENTE: ${this.entrada8}
CORREO CLIENTE: ${this.entrada9}
DISPONIBILIAD: ${this.entrada10} a ${this.entrada11}
MEDIDAS TOMADAS CON OTDR CLIENTE: ${this.entrada12}
PEDIDO DE RETIRO (SI/NO): ${this.entrada13}
DESCARTES REALIZADOS: ${this.entrada14}
  
NOTA: ¡Se debe garantizar que al cerrar el anillo los niveles de potencia queden entre los rangos establecidos!`;
}

  descripcionRetiroEmpalme(){
  return `Se requiere realizar retiro desde el empalme del cliente ${this.entrada3} ubicado en el anillo ${this.anillo}, el cual se encuentra apagado por más de 48 horas *MONITOREO PROACTIVO*

ANILLO: ${this.anillo}
IP SWITCH: ${this.entrada4}
CIUDAD: ${this.ciudad}
IDENTIFICADOR: ${this.entrada5}
NOMBRE CLIENTE: ${this.entrada3}
CONTACTO CLIENTE: ${this.entrada6}
TELÉFONO CLIENTE: ${this.entrada8}
DIRECCIÓN CLIENTE: ${this.entrada7}
DISPONIBILIDAD CLIENTE: ${this.entrada9} a ${this.entrada10}`;
}

  descripcionReingresoAnillo(){
  return `Se requiere realizar el reingreso al anillo ${this.anillo}(${this.ciudad}) desde el empalme de derivación al cliente ${this.entrada3}

ANILLO: ${this.anillo}
IP SWITCH: ${this.entrada4}
CIUDAD: ${this.ciudad}
IDENTIFICADOR: ${this.entrada5} 
NOMBRE DEL CLIENTE: ${this.entrada3}
CONTACTO CLIENTE: ${this.entrada6}
TELÉFONO CLIENTE: ${this.entrada7}
DIRECCIÓN: ${this.entrada8}
DISPONIBILIAD HORARIA: ${this.entrada9} a ${this.entrada10}
DESCARTES REALIZADOS: ${this.entrada11}
  
NOTA: Se debe garantizar que al cerrar el anillo los niveles de potencia queden entre los rangos establecidos`
}
}

//------------------------------------------------------------------//
//--------------DESCRIPTION APERTURA DOBLE 2CLIENTES----------------//
const descripcionAperturaDoble2C =()=> {

  let retiroAD2A = "";
    const pedidoRetiroA = document.querySelector(`input[name="retiroD"]:checked`);
    if (pedidoRetiroA) {
    retiroAD2A = pedidoRetiroA.value;
    }
  let retiroAD2B = "";
    const pedidoRetiroB = document.querySelector(`input[name="retiroD-1"]:checked`);
    if (pedidoRetiroB) {
    retiroAD2B = pedidoRetiroB.value;
    }

  return `Se presenta apertura doble en el anillo ${document.getElementById('output-data-1-d').value}(${document.getElementById('output-data-2-d').value}) entre los clientes ${document.getElementById('output-data-3-d').value} y ${document.getElementById('output-dataB-1-d').value}
  
ANILLO: ${document.getElementById('output-data-1-d').value}
CIUDAD: ${document.getElementById('output-data-2-d').value}
NOMBRE DEL CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-3-d').value}
IP SWITCH CLIENTE EXTREMO A: ${document.getElementById('output-data-4-d').value}
CONTACTO CLIENTE CAIDO EXTREMO A : ${document.getElementById('output-data-5-d').value}
CORREO CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-6-d').value}
DIRECCIÓN CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-8-d').value}
TELÉFONO CLIENTE CAIDO EXTREMO A: ${document.getElementById('output-data-7-d').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${document.getElementById("disponibilidadD").value} a ${document.getElementById("disponibilidad-2D").value}
PEDIDO DE RETIRO (SI/NO): ${retiroAD2A}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('output-data-9-d').value}
  
NOMBRE CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-1-d').value}
IP SWITCH CLIENTE EXTREMO B: ${document.getElementById('output-dataB-2-d').value}
CONTACTO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-3-d').value}
CORREO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-4-d').value}
DIRECCIÓN CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-6-d').value}
TELÉFONO CLIENTE CAIDO EXTREMO B: ${document.getElementById('output-dataB-5-d').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${document.getElementById("disponibilidadD-1").value} a ${document.getElementById("disponibilidad-2D-1").value}
PEDIDO DE RETIRO (SI/NO): ${retiroAD2B}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${document.getElementById('output-dataB-7-d').value}`;
};

//------------------------------------------------------------------//
//-----------------DESCRIPTION ALARMA DE POTENCIA-------------------//
let modulocliente_a1 = "";
let modulocliente_a2 = "";
let modulocliente_b1 = "";
let modulocliente_b2 = "";

const descripcionAlarmaDePotencia =()=>{

  return `Se presenta alarma de potencia en el anillo ${document.getElementById('ap_potencia_anillo').value} entre los clientes ${document.getElementById('ap_potencia_nombrea').value} por el puerto Giga ${document.getElementById('ap_potencia_puertoa').value} contra ${document.getElementById('apB_potencia_nombreb').value} por el puerto Giga ${document.getElementById('apB_potencia_puertob').value}
  
ANILLO: ${document.getElementById('ap_potencia_anillo').value}
CIUDAD: ${document.getElementById('ap_potencia_ciudad').value}
NOMBRE CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_nombrea').value}
IP SWITCH CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_ipa').value}
CONTACTO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_contactoa').value}
CORREO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_correoa').value}
DIRECCION CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_direcciona').value}
TELÉFONO CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_telefonoa').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${ document.getElementById('potencia_disponibilidada1').value} a ${document.getElementById('potencia_disponibilidada2').value}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${document.getElementById('ap_potencia_descartesa').value}
          
NOMBRE CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_nombreb').value}
IP SWITCH CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_ipb').value}
CONTACTO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_contactob').value}
CORREO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_correob').value}
DIRECCION CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_direccionb').value}
TELÉFONO CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_telefonob').value}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${document.getElementById('potencia_disponibilidadb1').value} a ${document.getElementById('potencia_disponibilidadb2').value}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${document.getElementById('apB_potencia_descartesb').value}
          
MÓDULO CLIENTE A GIGA 0/0/1: ${modulocliente_a1}
MÓDULO CLIENTE A GIGA 0/0/2: ${modulocliente_a2}
MÓDULO CLIENTE B GIGA 0/0/1: ${modulocliente_b1}
MÓDULO CLIENTE B GIGA 0/0/2: ${modulocliente_b2}`;
}