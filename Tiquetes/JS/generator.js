//Generador de Resumes de las vistas Tiquetes
class ResumenGenerator {
  constructor(inputAnilloId = '', inputCiudadId = '', inputNombreAId = '', inputPuertoAId = '', inputPuertoBId = '') {
    this.anillo = document.getElementById(inputAnilloId)?.value ?? '';
    this.nombreA = document.getElementById(inputNombreAId)?.value ?? '';
    this.ciudad = document.getElementById(inputCiudadId)?.value ?? '';
    this.puertoA = document.getElementById(inputPuertoAId)?.value ?? '';
    this.puertoB = document.getElementById(inputPuertoBId)?.value ?? '';
  }

  generateResumen() {
    return `Se presenta apertura simple en el ANILLO: ${this.anillo} En la ciudad de: ${this.ciudad} Entre los clientes: ${this.nombreA} Por el puerto GIGA ${this.puertoA} Y el Puerto GIGA: ${this.puertoB}`;
  }

  resumenRetiroEmpalme() {
    return `Se requiere realizar retiro desde el empalme del cliente ${this.nombreA} ubicado en el anillo ${this.anillo}, el cual se encuentra apagado por más de 48 horas !!MONITOREO PROACTIVO¡¡`;
  }

  resumenReingreso(){
    return `Se requiere realizar el reingreso al anillo ${this.anillo} ubicado en la ciudad de ${this.ciudad} desde el empalme de derivación al cliente ${this.nombreA}`
  }
}

//Generador de Descripciones de las vistas Tiquetes
class DescriptionGenerator {
  constructor(anilloId = "", ciudadId = "", nombreEmpresaAId = "", ipSwitchAId = "", puertoIpSwitchAId = "", contactoAId = "", direccionAId = "", telefonoAId = "", correoAId = "", dispoAId = "", dispoA2Id = "", medidasAId = "", pedidoRetiroAId = "", descarteAId = "", nombreEmpresaBId = "", ipSwitchBId = "", puertoIpSwitchBId = "", contactoBId = "", direccionBId = "", telefonoBId = "", correoBId = "", dispoBId = "", dispoB2Id = "", medidasBId = "", pedidoRetiroBId = "", descarteBId = "" ) {
    this.anillo = document.getElementById(anilloId)?.value ?? '';
    this.ciudad = document.getElementById(ciudadId)?.value ?? '';
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
  
//Descripcion para cada vista de tiquetes
    
  generateDescripcion(){ 
    return `Se presenta apertura simple en el ANILLO: ${this.anillo} En la ciudad de: ${this.ciudad} Entre los clientes: ${this.entrada3} Por el puerto GIGA ${this.entrada5} Y el Puerto GIGA: ${this.entradaB3}

NOMBRE CLIENTE EXTREMO A: ${this.entrada3}
IP SWITCH EXTREMO A: ${this.entrada4}
PUERTO SWITCH CAÍDO EN EXTREMO A: ${this.entrada5}
CONTACTO CLIENTE EXTREMO A: ${this.entrada6}
DIRECCIÓN CLIENTE EXTREMO A: ${this.entrada7}
TELÉFONO CLIENTE EXTREMO A: ${this.entrada8}
CORREO CLIENTE EXTREMO A: ${this.entrada9}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${this.entrada10} a ${this.entrada11}
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

descripcionReingreso(){
  return `Se requiere realizar el reingreso al anillo ${this.anillo} unicado en la ciudad de ${this.ciudad} desde el empalme de derivación al cliente ${this.entrada3}

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
