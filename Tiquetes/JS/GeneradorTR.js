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
//---------------------DESCRIPTION GENERATOR------------------------//