var segui = "S3GU1M13NT0_N1";
var resultado1 = "llamadadelcliente";

const aclaraciones = `
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style=" font-size:19px;"><b>Aclaración:</b></p>
      <p>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance: (Anexar contenido)</p>
    </div>
  </div>
`;

const imaginas1 = `
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="img/segui1.png" width="304" height="147">
    <div></div>
  </div>
`;

const imaginas2 = `
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="img/segui2.png" width="304" height="147">
    <div></div>
  </div>
`;

 const nombre = "XXX";
 const telefono = "XXX";
 const contenido = "(contenido)";
 const idLlamada = "(ID llamada)";
 
 const textoS = `De acuerdo a la comunicación establecida nombre: ${nombre} Teléfono: ${telefono}:\n${contenido}\nSeguiremos gestionando su caso en pro de una solución oportuna\nID llamada: ${idLlamada}`;

 //------------------------------------------COPIAR TEXTO!!!--------------------------------------------//
 //---------------------------------------------REPLANTEAR----------------------------------------------//
function cargar1() {

}
var funcionario1 = "";
var bandareso = "f";
window.onkeydown = tecla;

function tecla(event) {
  num = event.keyCode;


  if (num == 113) {
    segui_copiarAlPortapapeles("p2");
  }

  if (num == 120) {
    segui_limpiartext();
  }

  if (num == 119) {
    cambiar_botones();
  }
  if (num == 115) {

    if (funcionario1 == "") {
      funcionario1 = "*NMC*";

      document.getElementById("tipousu123").innerHTML = "MODO NMC";
      document.getElementById("tipousu123").style.display = "block";
    } else if (funcionario1 == "*NMC*") {
      funcionario1 = "*LOC*";
      document.getElementById("tipousu123").innerHTML = "MODO LOC";
      document.getElementById("tipousu123").style.display = "block";
    } else if (funcionario1 == "*LOC*") {
      funcionario1 = "";
      document.getElementById("tipousu123").style.display = "none";
    }

    segui_principal();
  }
  if (num == 116) {
  }
  if (num == 117) {

  }
}
function cambiar_botones() {}
function borrartextis() {
  document.getElementById("segui_texto1").value = "";
}
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
function cambiartextis(orden) {}
sconte1 = '<input  type="radio" value="value2" name="G25"  checked="true"';
sconte2 = '<input  type="radio" value="value2" name="G25" ';

var_nota1 = "Nota pública";
var_nota2 = "Nota interna";

contenido1 = var_nota2;
contenido2 = var_nota1;
contenido3 = var_nota1;
contenido4 = var_nota1;
contenido5 = var_nota1;
contenido6 = var_nota1;
contenido7 = var_nota1;

contenido_viati = var_nota1;

function segui_notas(nota) {
  switch (nota) {
    case 11:
      t_inter = nota1a;
      break;
    case 12:
      t_inter = nota1b;
      break;
    case 21:
      t_inter = nota2a;
      break;
    case 22:
      t_inter = nota2b;
      break;
    case 31:
      t_inter = nota3a;
      break;
    case 32:
      t_inter = nota3b;
      break;
    case 41:
      t_inter = nota4a;
      break;
    case 42:
      t_inter = nota4b;
      break;
    case 51:
      t_inter = nota5a;
      break;
    case 52:
      t_inter = nota5b;
      break;
    case 61:
      t_inter = nota6a;
      break;
    case 62:
      t_inter = nota6b;
      break;
    case 71:
      t_inter = nota7a;
      break;
    case 72:
      t_inter = nota7b;
      break;
    case 81:
      t_inter = notaviatia;
      break;
    case 82:
      t_inter = notaviatib;
      break;

    default:
  }

  document.getElementById("segui_texto1").value = t_inter;

  segui_principal();
}

function segui_limpiartext() {
  document.getElementById("segui_texto1").value = "";
  document.getElementById("segui_texto3").value = "";
  segui_principal();
  document.getElementById("segui_texto1").focus();
}
//------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------------------------------//
function segui_myFunction() {
  const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <input type="radio" value="value1" checked="true" id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>
    <input type="radio" value="value2" id="sale1" onChange="segui_myFunction5();" name="G3a">SALIENTE<br>
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc<img src="img/segui2.png" width="304" height="147">
    </div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:19px; "><b >Aclaración:</b><p><br>
      <b>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance:</b>(Anexar contenido)
    </div>
  </div>
`;
  const texto_interno = `De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance:
Seguiremos gestionando su caso en pro de una solución oportuna.
ID llamada:
`;

  resultado1 = "llamadadelcliente";
  document.getElementById("segui_grupo3").innerHTML = texto;
  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}
function segui_myFunction2() {
  resultado1 = "correodelcliente";

  const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <input type="radio" value="value1" checked="true" id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>
    <input type="radio" value="value2" id="sale2" onChange="segui_myFunction8();" name="G3a">SALIENTE<br>
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui1.png" width="304" height="147">
    </div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:19px; "><b>Aclaración:</b><p><br>
      <b>Se debe adjuntar correo</b>
    </div>
  </div>
`;

  const texto_interno = `Se brinda respuesta a la solicitud del cliente en el correo adjunto.

`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction2b() {
  resultado1 = "estadoactualdelcaso";
  
  const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui2.png" width="304" height="147">
      <div></div>
    </div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:19px; "><b>Aclaración:</b><p><br>
      <b>Avance: </b>Ingresar contenido del avance sin descartes tecnicos de manejo interno<br>
      Estas notas enviadas no requieren enviarse desde el buzón. Solo requiere enviarse colocando la nota como pública
    </div>
  </div>
`;

  const texto_interno = `Seguiremos gestionando su caso en pro de una solución oportuna`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction3() {
  resultado1 = "p3rm1s01";

  const texto = `
  <div id="segui_grupo3s1" style="display: flex; flex-direction: column;">
    <div style="display: flex; height:20%">
      <div class="textonoedicion" id="permiso2" style="width:33%; 1px position: relative; border: solid #2090e4; border-radius:50px; font-size:35px; text-align:center">1</div>
      <div style="float:left;width:33%; border-radius:50px;background-image: url('img/mas+.png'); background-size:105px; cursor:pointer;" onclick="coloca1()"></div>
      <div style="float:left;width:33%; border-radius:50px;background-image: url('img/menos-.png'); background-size:105px; cursor:pointer;" onclick="coloca2()"></div>
    </div>
    <br>
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui2.png" width="304" height="147">
    </div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:19px;"><b>Aclaración:</b></p><br>
      <b>Se debe indicar el número de veces que se ha gestionado</b>
    </div>
  </div>`;

  const txt1 =`Estamos gestionando el permiso de ingreso a sus instalaciones de acuerdo a los siguientes datos:
Tipo de Permiso:
Documentación adjunta:`;

  document.getElementById("segui_texto1").value = txt1;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}

function segui_myFunction3a() {
  resultado1 = "c0mun1c4c10ndelespecialista";

  const texto = `

  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <input type="radio" value="value11" checked="true" id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>
    <input type="radio" value="value22" id="sale2" onchange="segui_myFunction8b()" name="G3ab">SALIENTE<br>
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui1.png" width="304" height="147">
    </div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:17px; "><b >  Aclaración:</b><p>
      <br>
      <b>Canal de comunicación</b><u>(correo,telefóno, whatsapp, teams)</u><br>
      <b>Rol del especialista</b><u>(especialista, personal campo, coordinador, lider)</u><br>
      <b> El especialista incluye al personal de campo que escribe</b>
    </div>
  </div>
`;
  const texto_interno = `Especialista que escribe:
Canal de comunicación:
Rol del especialista:
Avance o gestión solicitada por  el especialista:
Apoyo ofrecido:
`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;

  segui_principal();
}

function segui_myFunction3b() {
  resultado1 = "4poyo_highN1";

  const txt1 = `
<div style="display: flex; flex-direction: column; width: 50%;">
      <div style="display: flex; ">
        <div style="width: 50%;">
          <input type="radio" value="value6" checked="true" id="apoyo1" onchange="segui_myFunction12()" name="G3a">High N1<br>
          <input type="radio" value="value7" id="apoyo2" onchange="segui_myFunction12b()" name="G3a">High N2<br>
          <input type="radio" value="value7" id="apoyo2" onchange="segui_myFunction13()" name="G3a">Medium voz<br>
          <input type="radio" value="value8" id="apoyo3" onchange="segui_myFunction14()" name="G3a">Medium datacenter<br>
          <input type="radio" value="value9" id="apoyo4" onchange="segui_myFunction15()" name="G3a">Medium conectividad<br>
          <input type="radio" value="value10" id="apoyo5" onchange="segui_myFunction16()" name="G3a">Medium movilidad<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22c()"name="G3a">Infraestructura<br>
          <input type="radio" value="value11" id="apoyo6" onchange="segui_myFunction17()" name="G3a">Low<br>
          <input type="radio" value="value12" id="apoyo7" onchange="segui_myFunction18()" name="G3a">Stts<br>
        </div>
        <div style="width: 50%;">
          <input type="radio" value="value12" id="apoyo7" onchange="segui_myFunction18b()" name="G3a">Stts N2<br>
          <input type="radio" value="value14" id="apoyo8" onchange="segui_myFunction19()" name="G3a">Cambios<br>
          <input type="radio" value="value15" id="apoyo9" onchange="segui_myFunction20()" name="G3a">Offline<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction21()" name="G3a">Eventos<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22()" name="G3a">Edatel<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22b()" name="G3a">Despacho<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22d()" name="G3a">MFO<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22e()" name="G3a">Conectividad TV N2<br>
          <input type="radio" value="value15" id="apoyo10" onchange="segui_myFunction22f()" name="G3a">Voz y colaboracion N2
        </div>
      </div>
      <div class="contenidillo" id="contenido_segui" style="text-align: center; padding: 10px; margin: 5px;">
        Nota interna
      </div>
 </div>
<section style="display: flex; flex-direction: column; width: 50%; float: left;">
  <p class="contenidillo1" id="contenido_segui23" style="text-align: center;">Aclaracion</p>
  <p>"Indica el apoyo que un analista presta a otro. Es registrado por quien realizó el apoyo. La nemotecnia irá acompañada con el nombre del grupo al cual pertenece el analista que brindó el apoyo."</p>
</section>
`;

  document.getElementById("segui_grupo3").innerHTML = txt1;
  document.getElementById("segui_texto1").value = "Descripción del apoyo:";

  segui_principal();
}

function segui_myFunction3c() {
  resultado1 = "p3s3rv1c10";

  const texto_interno = `Prueba realizada:
Herramienta utilizada:
Resultado obtenido:`;

const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui1.png" width="304" height="147">
      <div></div>
    </div>
  </div>`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction3c2() {

  const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui1.png" width="304" height="147">
      <div></div>
    </div>
  </div>`;

  resultado1 = "d1agnostico";
  document.getElementById("segui_grupo3").innerHTML = texto;

  z = document.getElementById("chequeotipo3").checked;

  if (z == false) {
    texto_interno = `S. Básico
  ID prueba:
  Falla evidencia en la prueba:
  Diagnóstico realizado:`;
  } else {
    texto_interno = "";
    segui = "S3GU1M13NT0_N1";
  }

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}

function segui_myFunction3c2a(chequio) {
  resultado1 = "d1agnostico";

  const texto =`
<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="img/segui1.png" width="304" height="147">
      <div></div>
  </div>
</div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

 const texto_interno = `S. Avanzado:
Conclusión al ejecutar lista de chequeo:
Numeral donde se evidencia falla en la lista de chequeo:
Diagnóstico realizado:
Falla eléctrica S/N`;

  resultado1 = "d1agnostico";

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}

function segui_myFunction3c2B() {
  resultado1 = "motivo3spera";

  const texto_interno = `Motivo:
Fecha y Hora de contacto con el cliente:
Medio de contacto:
Intentos de contacto:`;

 const texto =`
<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
  <div style="float: left; margin: 5px; width:300px;height:147px">
     Ubicación en Bmc<img src="img/segui1.png" width="304" height="147">
     <div></div>
  </div>
</div>
<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
 <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
     <p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>
     <b>Motivo: </b>(Detallar el motivo por el cual el caso debe colocarse en Pendiente).<br>
     <b>Medio de contacto: </b>(correo, telefóno).<br>
     <b>Intentos de contacto: </b>(1,2,...).<br>
 </div>
</div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}
function segui_myFunction3c3() {
  resultado1 = "sd3sd3l3g4d0";

  const texto =`
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div style="float: left; margin: 5px; width:300px;height:147px">
      Ubicación en Bmc
      <img src="img/segui1.png" width="304" height="147">
      <div></div>
    </div>
  </div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Observaciones en legado:
Solucionado desde el legado.`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}
function segui_myFunction3c4() {
  texto =`
<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="img/segui1.png" width="304" height="147">
    <div></div>
  </div>
</div>`;

  resultado1 = "r3s0luc10n";

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Pasos realizados para la solución:
  Pruebas realizadas y en donde:`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}

function segui_myFunction3c4a() {
  resultado1 = "ch4tr3s0luc10n";

  const texto =`
<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="img/segui1.png" width="304" height="147">
    <div></div>
  </div>
</div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Pasos realizados:
Pruebas realizadas y en donde:`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}

function segui_myFunction3c5() {
  resultado1 = "NOTAS RESOLUCION";

const texto = `
  <div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div style="float: left; margin: 0px; width:300px;height:102px">Ubicación en Bmc<img src="img/resolucion1.png" width="300" height="102"><div></div></div>
  </div>
  <div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">
    <div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">
      <p style="color:red;font-size:19px; "><b> Aclaración:</b></p>
      <br>
      <b>Para próximas solicitudes es necesario revisar </b>Pasos que debe seguir el cliente antes de llamar (se adiciona este punto si es imputable al cliente)
    </div>
  </div>
`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `La causa fue:
La solución fue:`;

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}

function segui_myFunction3d() {
  //notas de campo
  let texto_interno = `Su reporte de falla fue escalado a nuestro personal en campo. Los datos de la persona que efectuará el respectivo soporte en sitio son:

Nombre Del Personal Asignado:
Cédula:
Fecha Visita:
Hora o franja:
Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos.
En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.`;

 let texto1 =`
 <div id="segui_grupo3s2" style="display: block; text-align: center;">
  <div id="aclaraciones" style=" margin: 2px; width:100%; height:100%; border: 1px dotted; border-radius:10px;">
    <p style="font-size:17px; margin: -1px;"><b>Aclaración:</b><p>
    <b>Fecha Visita: </b>Formato fecha: AAAA/MM/DD
  </div>
</div>`;

  document.getElementById("segui_texto1").value = texto_interno;

  resultado1 = "asignacionpersonalcampo";

  let txt1 = `
<section style="display: flex;">
  <div style="width:180px;float:left;">
    <input type="radio" value="asigna" checked="true" onchange="segui_myFunction23()" name="g4">Asign. per. campo<br>
    <input type="radio" value="asigna" onchange="segui_myFunction24a()" name="g4">Asign. pendiente<br>
    <input type="radio" value="cambio" onchange="segui_myFunction24()" name="g4">Cambio per. campo<br>
    <input type="radio" value="indidis" onchange="segui_myFunction25()" name="g4">Indisp. per. campo<br>
    <input type="radio" value="value8" onchange="segui_myFunction26()" name="g4">Modificación agenda<br>
    <input type="radio" value="value8" onchange="segui_myFunction27()" name="g4">Incumplimiento agenda<br>
    <input type="radio" value="value8" onchange="segui_myFunction28()" name="g4">Gestión inventarios<br>
    <input type="radio" value="value8" onchange="segui_myFunction28b()" name="g4">Gestión viáticos<br>
   <input type="radio" value="value8" onchange="segui_myFunction28c()" name="g4">Solicitud viáticos<br>
  </div>
  <div style="width:180px;float:left;">
    <input type="radio" value="value8" onchange="segui_myFunction28d()" name="g4">Avance Visita<br>
    <input type="radio" value="value8" onchange="segui_myFunction28e()" name="g4">Confirmación visita<br>
    <input type="radio" value="value8" onchange="segui_myFunction29()" name="g4">Falla masiva<br>
    <input type="radio" value="value8" onchange="segui_myFunction30()" name="g4">Reagenda. factores ext.<br>
    <input type="radio" value="value8" onchange="segui_myFunction31()" name="g4">Reagenda. por cliente<br>
    <input type="radio" value="value8" onchange="segui_myFunction32()" name="g4">Reagenda. cliente iloc.<br>
    <input type="radio" value="value9" onchange="segui_myFunction33()" name="g4">Pendiente plat.<br>
    <br><br><br><br><div class="contenidillo" style="float:left; position: absolute;margin-top:-30px; border: 1px solid green; margin-left:-50px;" id="contenido_segui">
  </div>
</section>
<div class="contenidillo2" style="display: block; text-align: center;" id="contenido_segui24"></div>
`;

  document.getElementById("segui_grupo3").innerHTML = txt1;
  document.getElementById("contenido_segui24").innerHTML = texto1;

  segui_principal();
  document.getElementById("contenido_segui").innerHTML = var_nota1;
}

function segui_myFunction3da() {

  resultado1 = "gestióncuadrillasb2b";
  segui_principal();
}

function segui_myFunction3db() {

  resultado1 = "gestiónnoccargue";
  segui_principal();
}
function segui_myFunction3e() {
  texto_interno = "Actividades realizadas:\n\n";

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>';
  texto +=
    "Se utiliza cuando en una Apertura Simple Sin afectación no se repara y se convierte en una Apertura Doble. </div> </div>";

  document.getElementById("segui_grupo3").innerHTML = "";

  resultado1 = "AS_AD";

  document.getElementById("segui_grupo3").innerHTML = texto;
  document.getElementById("segui_texto1").value = texto_interno;

  resultado1 = "AS_AD";
  segui_principal();
}
function segui_myFunction3f() {
  resultado1 = "visitanorequerida";
  segui_principal();

  document.getElementById("segui_grupo3").innerHTML = "Visita no requerida";
}
// function segui_myFunction3g() {
//   resultado1 = "v4l1d40ffl1n3";
//   segui_principal();
//   document.getElementById("segui_grupo3").innerHTML = imaginas1;
// }

function segui_myFunction4() {
  resultado1 = "llamadadelcliente";

  texto_interno =
    "De acuerdo a la comunicación establecida Nombre: XXX, Teléfono: XXX hemos registrado su llamada con el siguiente avance:\n\n";

  texto_interno +=
    "Seguiremos gestionando su caso en pro de una solución oportuna.\n\nID llamada:\n\n";

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input  type="radio" value="value1" checked="true" id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>';
  texto +=
    '<input  type="radio" value="value2"                id="sale1" onChange="segui_myFunction5();"  name="G3a">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui2.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>';
  texto +=
    "<b>  De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada  con el siguiente avance:  </b>(Anexar contenido)</div> </div>";

  resultado1 = "llamadadelcliente";
  document.getElementById("segui_grupo3").innerHTML = texto;
  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}
function segui_myFunction5() {
  resultado1 = "llamadaalcliente";
  segui_principal();

  texto_interno =
    "De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX ";
  texto_interno +=
    "\n\nSeguiremos gestionando su caso en pro de una solución oportuna.\n\nID llamada:\n\n";

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input  type="radio" value="value1"  id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>';
  texto +=
    '<input  type="radio" value="value2"   checked="true"             id="sale1" onChange="segui_myFunction5();"  name="G3a">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui2.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>';
  texto +=
    "<b> De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX </b>(Anexar contenido)</div> </div>";

  document.getElementById("segui_grupo3").innerHTML = texto;
  document.getElementById("segui_texto1").value = texto_interno;
}
function segui_myFunction6() {
  resultado1 = "Llamadaalespecialista";
  segui_principal();
}

function segui_myFunction7() {
  resultado1 = "correodelcliente";
  segui_principal();

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input  type="radio" value="value1" checked="true" id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>';
  texto +=
    '<input  type="radio" value="value2"                id="sale2" onChange="segui_myFunction8();"  name="G3a">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>';
  texto += "<b>  Se debe adjuntar correo  </b></div> </div>";

  texto_interno =
    "Se brinda respuesta a la solicitud del cliente en el correo adjunto. ";

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
}
function segui_myFunction8() {
  resultado1 = "correoalcliente";
  segui_principal();

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input  type="radio" value="value1"  id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>';
  texto +=
    '<input  type="radio" value="value2"    checked="true"            id="sale2" onChange="segui_myFunction8();"  name="G3a">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:19px; "><b >  Aclaración:</b><p><br>';
  texto += "<b>  Se debe adjuntar correo  </b></div> </div>";

  texto_interno =
    "Se envía respuesta a los interesados en el correo adjunto.\n\n";

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;

  texto_interno =
    "Se envía respuesta a los interesados en el correo adjunto.\n\n";
  //texto_interno+= '\La respuesta obtenida fue:\n';

  //texto_interno+= 'Seguiremos gestionando su caso en pro de una solución oportuna\n';

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}

function segui_myFunction7b() {
  resultado1 = "c0mun1c4c10ndelespecialista";

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input type="radio" value="value11" checked="true" id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>';
  texto +=
    '<input type="radio" value="value22"                id="sale2" onchange="segui_myFunction8b()"  name="G3ab">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px">';
  texto += '<p style="color:red;font-size:17px; "><b >  Aclaración:</b><p><br>';
  texto +=
    "<b> Canal de comunicación  </b><u>(correo, teléfono, whatsapp, teams)</u><br>";
  texto +=
    "<b> Rol del especialista  </b><u>(especialista, personal campo, coordinador, líder)</u><br>";
  texto +=
    "<b>  El especialista incluye al personal de campo que escribe</b> </div> </div>";

  texto_interno = "Especialista que escribe:\n";
  texto_interno += "Canal de comunicación:\n";
  texto_interno += "Rol del especialista:\n";
  texto_interno += "Avance o gestión solicitada por  el especialista:\n";
  texto_interno += "Apoyo ofrecido:\n\n";

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction8b() {
  resultado1 = "c0mun1c4c10nalespecialista";

  texto =
    '<div id="segui_grupo3s1" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<input type="radio" value="value11"  id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>';
  texto +=
    '<input type="radio" value="value22"   checked="true"             id="sale2" onchange="segui_myFunction8b()"  name="G3ab">SALIENTE<br>';
  texto +=
    '<div style="float: left; margin: 5px; width:300px;height:147px">Ubicación en Bmc<img src="img/segui1.png" width="304" height="147"><div></div></div></div>';
  texto +=
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 5px; width:300px;height:235; border: 1px dotted green; border-radius:10px;font-size:15.6px;">';
  texto += '<p style="color:red;font-size:17px; "><b >  Aclaración:</b><p>';
  texto +=
    "<b> Canal de comunicación  </b><u>(correo, teléfono, whatsapp, teams)</u><br>";
  texto +=
    "<b> Rol del especialista  </b><u>(especialista, personal campo, coordinador, líder)</u><br>";
  texto +=
    "<b>  El especialista incluye al personal de campo que escribe</b> <br><br>";
  texto +=
    "<b> Se envían por la opción de envío de correo de BMC, a no ser que requieran respuesta por medio correo. </b> </div> </div>";

  texto_interno = "Especialista a quien escribe:\n";
  texto_interno += "Canal de comunicación:\n";
  texto_interno += "Rol del especialista:\n";
  texto_interno += "Avance solicitado del especialista:\n";
  texto_interno += "Apoyo dado:\n\n";

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;

  segui_principal();
}

function segui_myFunction9() {
  resultado1 = "Correoallider";
  segui_principal();
}

function segui_myFunction10() {
  resultado1 = "Correoalcoordinador";
  segui_principal();
}

function segui_myFunction11() {
  //resultado1 ='Correoespecialista';
  resultado1 = "Correoalespecialista";
  segui_principal();
}

sfj1 = "4poyo_";
function segui_myFunction12() {
  resultado1 = sfj1 + "highN1";
  segui_principal();
}

function segui_myFunction12b() {
  resultado1 = sfj1 + "highN2";
  segui_principal();
}

function segui_myFunction13() {
  resultado1 = sfj1 + "mediumvoz";
  segui_principal();
}

function segui_myFunction14() {
  resultado1 = sfj1 + "mediumdatacencter";
  segui_principal();
}

function segui_myFunction15() {
  resultado1 = sfj1 + "mediumconectividad";
  segui_principal();
}

function segui_myFunction16() {
  resultado1 = sfj1 + "mediummovilidad";
  segui_principal();
}

function segui_myFunction17() {
  resultado1 = sfj1 + "low";
  segui_principal();
}

function segui_myFunction18() {
  resultado1 = sfj1 + "stts";
  segui_principal();
}
function segui_myFunction18b() {
  resultado1 = sfj1 + "sttsN2";
  segui_principal();
}

function segui_myFunction19() {
  resultado1 = sfj1 + "cambios";
  segui_principal();
}

function segui_myFunction20() {
  resultado1 = sfj1 + "offline";
  segui_principal();
}
function segui_myFunction21() {
  resultado1 = sfj1 + "eventos";
  segui_principal();
}
function segui_myFunction22() {
  resultado1 = sfj1 + "edatel";
  segui_principal();
}

function segui_myFunction22b() {
  resultado1 = sfj1 + "despacho";
  segui_principal();
}

function segui_myFunction22c() {
  resultado1 = sfj1 + "infraestructura";
  segui_principal();
}
function segui_myFunction22d() {
  resultado1 = sfj1 + "mfo";
  segui_principal();
}
function segui_myFunction22e() {
  resultado1 = sfj1 + "conectividadTVN2";
  segui_principal();
}
function segui_myFunction22f() {
  resultado1 = sfj1 + "vozcolaboracionN2";
  segui_principal();
}
////
function segui_myFunction23() {

  document.getElementById("contenido_segui").innerHTML = var_nota1;

  //--- asignacionpersonalcampo
  texto_interno =
    "Su reporte de falla fue escalado a nuestro personal en campo. Los datos de la persona que efectuará el respectivo soporte en sitio son:\n\n";

  texto_interno = texto_interno + "Nombre Del Personal Asignado:\n";
  texto_interno = texto_interno + "Cédula:\n";
  texto_interno = texto_interno + "Fecha Visita:\n";
  texto_interno = texto_interno + "Hora o franja:\n";
  texto_interno =
    texto_interno +
    "Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos.\n";
  texto_interno =
    texto_interno +
    "En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:19px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto += "<b> Fecha Visita: </b>Formato fecha AAAAMMDD</div> </div>";

  document.getElementById("contenido_segui24").innerHTML = texto;

  document.getElementById("segui_texto1").value = texto_interno;
  resultado1 = "asignacionpersonalcampo";
  segui_principal();
}
function segui_myFunction24() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;

  texto_interno =
    "Su reporte de falla tuvo un cambio en el nombre de la persona que efectuará el soporte en sitio, estos son los datos actuales:\n\n";

  texto_interno += "Nombre Del Personal Asignado: \n";
  texto_interno += "Cédula: \n";
  texto_interno += "Fecha de visita: \n";
  texto_interno += "Hora o franja: \n";
  texto_interno +=
    "Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos. \n";
  texto_interno +=
    "En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:19px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto += "<b> Fecha Visita: </b>Formato fecha AAAAMMDD</div> </div>";

  document.getElementById("segui_texto1").value = texto_interno;

  document.getElementById("contenido_segui24").style.display = "block";
  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "cambiopersonalcampo";
  segui_principal();
}
function segui_myFunction24a() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;

  document.getElementById("contenido_segui24").style.display = "none";

  texto_interno =
    "Su reporte de falla fue escalado a nuestro personal en campo. En este momento nos encontramos coordinándolo, tan pronto se cuente con disponibilidad en la agenda del personal técnico le estaremos informando.\n\n";
  texto_interno +=
    "En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.";

  document.getElementById("segui_texto1").value = texto_interno;

  resultado1 = "asignaciónpendiente";
  segui_principal();
}

function segui_myFunction25() {
  document.getElementById("contenido_segui").innerHTML = contenido1;
  document.getElementById("segui_texto1").value = nota1a;
  resultado1 = "indisponibilidadpersonalcampo";
  segui_principal();

  document.getElementById("contenido_segui24").style.display = "none";

}
function segui_myFunction26() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;
  document.getElementById("contenido_segui").innerHTML = contenido2;
  document.getElementById("segui_texto1").value = nota2a;

  document.getElementById("contenido_segui24").style.display = "none";

  resultado1 = "modificacionagenda";
  segui_principal();
}

function segui_myFunction27() {
  document.getElementById("contenido_segui24").style.display = "none";
  document.getElementById("contenido_segui").innerHTML = contenido3;
  document.getElementById("segui_texto1").value = nota3a;
  resultado1 = "incumplimientoagenda";
  segui_principal();
}

function segui_myFunction28() {
  document.getElementById("contenido_segui").innerHTML = contenido4;
  document.getElementById("segui_texto1").value = nota4a;
  document.getElementById("contenido_segui24").style.display = "none";
  resultado1 = "gestioninventario";
  segui_principal();
}
function segui_myFunction28b() {
  document.getElementById("contenido_segui").innerHTML = contenido_viati;
  document.getElementById("segui_texto1").value = notaviatia;

  resultado1 = "gestionviaticos";
  segui_principal();
}

function segui_myFunction28c() {
  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:19px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto += "<b> Adjuntar correo</b></div> </div>";

  txt1 = "Se envía correo para gestionar viáticos.\n\n";

  document.getElementById("contenido_segui24").innerHTML = texto;
  document.getElementById("contenido_segui24").style.display = "block";

  document.getElementById("contenido_segui").innerHTML = var_nota2;
  document.getElementById("segui_texto1").value = txt1;
  resultado1 = "solicitudviaticos";
  segui_principal();
}

function segui_myFunction28d() {
  document.getElementById("contenido_segui").innerHTML = var_nota2;

  txt1 = "Fecha y hora: \n";
  txt1 += "Personal en campo: \n";
  txt1 += "Contacto en sitio: \n";
  txt1 +=
    "Observación: El personal en campo indica que se encuentra en sitio.\n";

  document.getElementById("contenido_segui24").style.display = "block";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:17.4px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto +=
    "<b> Fecha y hora: </b>de la comunicación con el personal en campo.<br>";
  texto +=
    "<b> Personal en campo: </b>Nombre del personal en campo que realiza la visita.<br>";
  texto +=
    "<b> Contacto en sitio: </b>Nombre de la persona que recibió al personal en el sitio.<br>";
  texto +=
    "Observación: El personal en campo indica que se encuentra en sitio.<br>";
  texto +=
    "(Breve descripción de lo que está haciendo en el momento).</div> </div>";

  document.getElementById("segui_texto1").value = txt1;
  document.getElementById("contenido_segui").innerHTML = var_nota2;

  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "avancevisita";
  segui_principal();
}

function segui_myFunction28e() {

  document.getElementById("contenido_segui24").style.display = "block";
  txt1 = "De acuerdo a la comunición telefonica se confirma:\n\n";
  txt1 += "Nombre : \n";
  txt1 += "Teléfono : \n";
  txt1 += "Disponibilidad : \n";
  txt1 +=
    "Cliente confirma disponibilidad para atender la visita en el horario indicado:  \n";
  txt1 += "Se reagenda para Fecha y Hora:  : \n";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:14.7px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto += "<b> Nombre:  </b>Usuario con quien se tuvo contacto telefónico<br>";
  texto +=
    "<b> Telefono:  </b>Número del teléfono al cual se realizó la llamada.<br>";
  texto +=
    "<b> Disponibilidad:  </b>Disponibilidad horaria que confirme la persona de contacto.<br>";
  texto +=
    "<b> Observación:  </b>Si el cliente tiene disponibilidad para atender la visita:<br>";
  texto +=
    "Cliente confirma disponibilidad para atender la visita en el horario indicado: (SI/NO):<br>";
  texto +=
    "Se reagenda para Fecha y Hora: Si aplica reagendamiento</div> </div>";

  document.getElementById("segui_texto1").value = txt1;
  document.getElementById("contenido_segui").innerHTML = var_nota1;
  document.getElementById("contenido_segui24").innerHTML = texto;
  resultado1 = "confirmacionvisita";
  segui_principal();
}

function segui_myFunction29() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;

  texto_interno = "";
  document.getElementById("contenido_segui24").style.display = "none";

  texto =
    "Su reporte de falla está asociado a una falla masiva. El área encargada se encuentra trabajando en la solución, por lo tanto, se cancela el soporte a sitio.\n";
  texto +=
    "En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.";

  document.getElementById("segui_texto1").value = texto;
  resultado1 = "fallamasiva";
  segui_principal();
}
function segui_myFunction30() {
  document.getElementById("contenido_segui24").style.display = "block";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:19px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto +=
    "<b> El personal en campo asignado, nos indica que debido a:  </b>Se debe especificar (Problemas de orden público o factores climáticos)</div> </div>";

  document.getElementById("contenido_segui24").innerHTML = texto;

  document.getElementById("contenido_segui").innerHTML = contenido5;
  document.getElementById("segui_texto1").value = nota5a;

  resultado1 = "reagendamientofactoresexternos";
  segui_principal();
}

function segui_myFunction31() {
  document.getElementById("contenido_segui").innerHTML = contenido6;
  document.getElementById("segui_texto1").value = nota6a;
  document.getElementById("contenido_segui24").style.display = "block";

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:16.9px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto +=
    "<b> El personal en campo asignado, nos indica que se debe reagendar la visita por motivo de: </b>Se debe especificar  (orden del suscriptor/cliente no autoriza).<br>";
  texto +=
    "<b> Contacto en sitio:   </b>Nombre de la persona que recibió al personal en el sitio.<br>";
  texto +=
    "<b> Personal en campo:   </b>Nombre del personal en campo que realiza la visita.<br>";
  texto +=
    "por lo tanto, reagendaremos su caso para nueva visita el día: <b>AAMMDD</b> indicado por usted.</div> </div>";

  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "reagendamientoporcliente";
  segui_principal();
}

function segui_myFunction32() {
  document.getElementById("contenido_segui").innerHTML = contenido7;
  document.getElementById("segui_texto1").value = nota7a;

  texto =
    '<div id="segui_grupo3s2" style="display: block; float:left; margin-left:4px; margin-top:4px">';
  texto +=
    '<div  id="aclaraciones" align="justify" style="float: left; margin: 2px; width:300px;height:244px; border: 1px dotted green; border-radius:10px;font-size:19px;">';
  texto +=
    '<p style="color:red;font-size:17px; margin: -1px;  "><b > Aclaración:</b><p>';
  texto +=
    "<b>El personal en campo asignado, nos indica que el lugar de atención se encuentra: </b>Se debe especificar (cerrado o no logra ubicar la dirección).<br>";
  texto += "Se debe adjuntar evidencia fotográfica.</div> </div>";

  document.getElementById("contenido_segui24").innerHTML = texto;

  document.getElementById("contenido_segui24").style.display = "block";

  resultado1 = "reagendamientoclienteilocalizado";
  segui_principal();
}

function segui_myFunction33() {
  document.getElementById("contenido_segui").innerHTML = contenido7;
  document.getElementById("segui_texto1").value = nota8;

  document.getElementById("contenido_segui24").style.display = "none";

  resultado1 = "pendienteplataforma";
  segui_principal();
}


function coloca1() {
  var sumaxx;
  sumaxx = document.getElementById("permiso2").innerHTML;
  sumaxx = sumaxx.trim();
  sumaxx = parseInt(sumaxx) + 1;
  document.getElementById("permiso2").innerHTML = sumaxx;
  f1();
}
function coloca2() {
  var sumaxx;
  document.getElementById("permiso2").innerHTML;
  sumaxx = document.getElementById("permiso2").innerHTML;
  sumaxx = sumaxx.trim();
  sumaxx = parseInt(sumaxx) + -1;
  if (sumaxx > 0) {
    document.getElementById("permiso2").innerHTML = sumaxx;
    f1();
  }
}

function f1() {
  var pper = document.getElementById("permiso2").innerHTML;
  resultado1 = "p3rm1s0" + pper;
  segui_principal();
}

function segui_principal() {
  x = document.getElementById("chequeotipo1").checked;
  y = document.getElementById("chequeotipo2").checked;
  z = document.getElementById("chequeotipo3").checked;
  w = document.getElementById("chequeotipo4").checked;
  document.getElementById("grupodiagnostico1").style.display = "none";
  document.getElementById("grupodiagnostico2").style.display = "none";
  //document.getElementById('grupodiagnostico1').style.display.none;

  document.getElementById("grupodiagnostico2").style.marginLeft = "0px";
  if (segui == "S3GU1M13NT0_N1") {
    if (x == true) {
      document.getElementById("grupodiagnostico1").style.display = "block";
      document.getElementById("grupodiagnostico2").style.display = "block";
    }

    if (z == true) {
      document.getElementById("grupodiagnostico1").style.display = "block";
      //document.getElementById('grupodiagnostico2').style.display = "block";
      //document.getElementById('grupodiagnostico1b').style.display = "block";
    }
  }

  if (segui == "S3GU1M13NT0_N2CW") {
    if (y == true) {
      document.getElementById("grupodiagnostico1").style.display = "block";
      document.getElementById("grupodiagnostico2").style.display = "block";
    }
  }

  if (segui == "S3GU1M13NT0_N2TG") {
    if (z == true) {
      //document.getElementById('grupodiagnostico1').style.display = "block";
      //document.getElementById('grupodiagnostico2').style.display = "block";
      //document.getElementById('grupodiagnostico1b').style.display = "block";
    }
  }

  if (segui == "S3GU1M13NT0_3V3NT0S") {
    if (w == true) {
      //document.getElementById('grupodiagnostico1').style.display = "block";
      document.getElementById("grupodiagnostico2").style.display = "block";

      document.getElementById("grupodiagnostico2").style.marginLeft = "5px";
    }
  }

  document.getElementById("mesa2").style.display = "none";
  document.getElementById("mesa3").style.display = "none";
  document.getElementById("mesaquemas").style.display = "none";
  document.getElementById("mesaquemas1").style.display = "block";
  document.getElementById("catamas").style.display = "block";
  document.getElementById("norequiere1").style.display = "none";
  //document.getElementById('validacionfuera').style.display = "none";

  document.getElementById("catamas").style.display = "block";
  if (segui == "S3GU1M13NT0_LC") {
    document.getElementById("mesaquemas").style.display = "block";
    document.getElementById("norequiere1").style.display = "block";

    //'document.getElementById('grupollamada1').style.display = "none";
    //'document.getElementById('grupocorreo1').style.display = "none";
  }
  if (segui == "S3GU1M13NT0_MESATT") {
    //'document.getElementById('grupollamada1').style.display = "none";
    //'document.getElementById('grupocorreo1').style.display = "none";
  }

  if (segui == "S3GU1M13NT0_N2TG") {
    document.getElementById("mesaquemas").style.display = "block";
    document.getElementById("norequiere1").style.display = "block";

    document.getElementById("mesa2").style.display = "block";
    document.getElementById("mesa3").style.display = "block";
  }

  //V4L1D40FFL1N3
  if (segui == "S3GU1M13NT0_3V3NT0S") {
    //document.getElementById('mesaquemas1').style.display = "block";
  }

  ////if (segui =='S3GU1M13NT0_N1' ){
  //document.getElementById('validacionfuera').style.display = "block";
  //}

  f2 = resultado1;
  var x = document.getElementById("segui_texto1").value;
  var y = funcionario1;

  document.getElementById("segui_texto3").value = "";
  document.getElementById("segui_texto2").value = x;

  x2 = document.getElementById("apoyis333").checked;
  x3 = document.getElementById("encampo333").checked;

  if (bandareso == "f") {
    //f8888 = x +'\n' + segui + ':' +f2 +y+': ';
    //alert (f8888);

    x += "\n";

    if (x2 == true || x3 == true) {
      document.getElementById("segui_texto2").value =
        x + "\n\n" + segui + ":" + f2 + y;
    } else {
      document.getElementById("segui_texto2").value = x + segui + ":" + f2 + y;
    }

    document.getElementById("segui_texto3").value = segui + ":" + f2 + y;
  }

  document.getElementById("p2").innerHTML =
    document.getElementById("segui_texto2").value;
}

function segui_copiarAlPortapapeles(id_elemento) {
  document.getElementById("segui_texto2").focus();
  document.getElementById("segui_texto2").select();
  document.execCommand("copy");
}
