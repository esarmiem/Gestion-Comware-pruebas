class ResumenGenerator {
  constructor() {
    this.anillo = document.getElementById('input_anillo').value;
    this.ciudad = document.getElementById('input_ciudad').value;
    this.nombreA = document.getElementById('input_nombreA').value;
    this.puertoA = document.getElementById('input_puertoA').value;
    this.puertoB = document.getElementById('inputB_puertoB').value;
  }
  
  generateResumen() {
    return `Se presenta apertura simple en el ANILLO: ${this.anillo} En la ciudad de: ${this.ciudad} Entre los clientes: ${this.nombreA} Por el puerto GIGA ${this.puertoA} Y el Puerto GIGA: ${this.puertoB}`;
  }
}

class DescriptionGenerator {
  constructor(){
    this.anillo = document.getElementById('input_anillo').value;
    this.ciudad = document.getElementById('input_ciudad').value;
    this.nombreEmpresaA = document.getElementById('input_nombreA').value;
    this.ipSwitchA = document.getElementById('input_ipA').value;
    this.puertoIpSwitchA = document.getElementById('input_puertoA').value;
    this.contactoA = document.getElementById('input_contactoA').value;
    this.direccionA = document.getElementById('input_direccionA').value;
    this.telefonoA = document.getElementById('input_telefonoA').value;
    this.correoA = document.getElementById('input_correoA').value;
    this.dispoA = document.getElementById('disponibilidad_AS').value;
    this.dispoA2 = document.getElementById('disponibilidad_AS2').value;
    this.medidasA = document.getElementById('input_medidaA').value;
    this.retiroA = null;
    const pedidoRetiroA = document.querySelector('input[name="pedido"]:checked');
    if (pedidoRetiroA) {
      this.retiroA = pedidoRetiroA.value;
    }
    this.descarteA = document.getElementById('input_descartesA').value;

    this.nombreEmpresaB = document.getElementById('inputB_nombreB').value;
    this.ipSwitchB = document.getElementById('inputB_ipB').value;
    this.puertoIpSwitchB = document.getElementById('inputB_puertoB').value;
    this.contactoB = document.getElementById('inputB_contactoB').value;
    this.direccionB = document.getElementById('inputB_direccionB').value;
    this.telefonoB = document.getElementById('inputB_telefonoB').value;
    this.correoB = document.getElementById('inputB_correoB').value;
    this.dispoB = document.getElementById('disponibilidad_BS').value;
    this.dispoB2 = document.getElementById('disponibilidad_BS2').value;
    this.medidasB = document.getElementById('inputB_medidasB').value;
    this.retiroB = null;
    const pedidoRetiroB = document.querySelector('input[name="retiroB"]:checked');
    if (pedidoRetiroB) {
      this.retiroB = pedidoRetiroB.value;
    }
    this.descarteB = document.getElementById('inputB_descarteB').value;
  }

  generateDescripcion(){ 
    return `Se presenta apertura simple en el ANILLO: ${this.anillo} En la ciudad de: ${this.ciudad} Entre los clientes: ${this.nombreA} Por el puerto GIGA ${this.puertoA} Y el Puerto GIGA: ${this.puertoB}

NOMBRE CLIENTE EXTREMO A: ${this.nombreEmpresaA}
IP SWITCH EXTREMO A: ${this.ipSwitchA}
PUERTO SWITCH CAÍDO EN EXTREMO A: ${this.puertoIpSwitchA}
CONTACTO CLIENTE EXTREMO A: ${this.contactoA}
DIRECCIÓN CLIENTE EXTREMO A: ${this.direccionA}
TELÉFONO CLIENTE EXTREMO A: ${this.telefonoA}
CORREO CLIENTE EXTREMO A: ${this.correoA}
DISPONIBILIAD HORARIA CLIENTE EXTREMO A: ${this.dispoA} a ${this.dispoA2}
MEDIDAS TOMADAS CON OTDR CLIENTE A: ${this.medidasA}
PEDIDO DE RETIRO (SI/NO): ${this.retiroA}
DESCARTES REALIZADOS CLIENTE EXTREMO A: ${this.descarteA}
                
NOMBRE CLIENTE EXTREMO B: ${this.nombreEmpresaB}
IP SWITCH EXTREMO B: ${this.ipSwitchB}
PUERTO SWITCH CAÍDO EN EXTREMO B: ${this.puertoIpSwitchB}
CONTACTO CLIENTE EXTREMO B: ${this.contactoB}
DIRECCIÓN CLIENTE EXTREMO B: ${this.direccionB}
TELÉFONO CLIENTE EXTREMO B: ${this.telefonoB}
CORREO CLIENTE EXTREMO B: ${this.correoB}
DISPONIBILIAD HORARIA CLIENTE EXTREMO B: ${this.dispoB} a ${this.dispoB2}
MEDIDAS TOMADAS CON OTDR CLIENTE B: ${this.medidasB}
PEDIDO DE RETIRO (SI/NO): ${this.retiroB}
DESCARTES REALIZADOS CLIENTE EXTREMO B: ${this.descarteB}`;
} 

}
