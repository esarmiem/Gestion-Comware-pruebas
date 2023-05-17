let segui = " ";
let resultado1 = " ";

/* const aclaraciones = `
  <div id="segui_grupo3s2" style="display: block;">
    <div id="aclaraciones" align="justify" style=" margin: 5px; height:235; border: 1px dotted; border-radius:10px">
      <p style=" font-size:19px; text-align: center;"><b>Aclaración:</b></p>
      <p>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance: (Anexar contenido)</p>
    </div>
  </div>
`;

const imaginas1 = `
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" width="304" height="147">
    <div></div>
  </div>
`;

const imaginas2 = `
  <div style="float: left; margin: 5px; width:300px;height:147px">
    Ubicación en Bmc
    <img src="Notas/img/segui2.png" >
    <div></div>
  </div>
`;

const nombre = "XXX";
const telefono = "XXX";
const contenido = "(contenido)";
const idLlamada = "(ID llamada)";

const textoS = `De acuerdo a la comunicación establecida nombre: ${nombre} Teléfono: ${telefono}:\n${contenido}\nSeguiremos gestionando su caso en pro de una solución oportuna\nID llamada: ${idLlamada}`; */
//-----------------------------------------------------------------------------------------------------//
//------------------------------------------COPIAR TEXTO!!!--------------------------------------------//
const copyTextareaAndInput =()=> {
  const textareaContent = document.querySelector('#segui_texto1').value;
  const inputValue = document.querySelector("#segui_texto3").value;
  const copyText = `${textareaContent}
${inputValue}`;
  
  navigator.clipboard.writeText(copyText)
    .then(() => {
      console.log('Copied to clipboard!');
    })
    .catch((error) => {
      console.error('Unable to copy to clipboard:', error);
    });
}
//-----------------------------------------------------------------------------------------------------//
//------------------------------------------BORRAR TEXTO!!!--------------------------------------------//
const borrartextis =()=> {
  document.getElementById("segui_texto1").value = "";
}
//-----------------------------------------------------------------------------------------------------//

function cargar1() {}
var funcionario1 = "";
var bandareso = "f";

function cambiar_botones() {}

//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------//
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
  <div id="segui_grupo3s1" >
    <input type="radio" value="value1" checked="true" id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>
    <input type="radio" value="value2" id="sale1" onChange="segui_myFunction5();" name="G3a">SALIENTE<br>
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/segui2.png">
    </div>
  </div>
  <div id="segui_grupo3s2">
    <div id="aclaraciones" >
      <p><b>Aclaración:</b></p>
      <div>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance: (Anexar contenido)</div>
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
  <div id="segui_grupo3s1" >
    <input type="radio" value="value1" checked="true" id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>
    <input type="radio" value="value2" id="sale2" onChange="segui_myFunction8();" name="G3a">SALIENTE<br>
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/segui1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2" >
    <div id="aclaraciones" >
      <p ><b>Aclaración:</b><p>
      <div>Se debe adjuntar correo</div>
    </div>
  </div>
`;

  const texto_interno = `Se brinda respuesta a la solicitud del cliente en el correo adjunto.`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction2b() {
  resultado1 = "estadoactualdelcaso";

  const texto = `
  <div id="segui_grupo3s1" >
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/segui2.png" >
      <div></div>
    </div>
  </div>
  <div id="segui_grupo3s2" >
    <div id="aclaraciones" >
      <p><b>Aclaración:</b><p>
      <div><b>Avance: </b>Ingresar contenido del avance sin descartes tecnicos de manejo interno
      Estas notas enviadas no requieren enviarse desde el buzón. Solo requiere enviarse colocando la nota como pública</div>
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
<div id="segui_grupo3s1" >
  <div class="permiso1" >
    <div class="textonoedicion" id="permiso2">1</div>
    <div id="botonMas" onclick="coloca1()"></div>
    <div id="botonMenos" onclick="coloca2()"></div>
  </div>
  <div class="imagenBmc">
    Ubicación en Bmc
    <img src="Notas/img/segui2.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
    <div id="aclaraciones" >
    <p><b>Aclaración:</b></p>
    <div>Se debe indicar el número de veces que se ha gestionado</div>
  </div>
</div>`;

  const txt1 = `Estamos gestionando el permiso de ingreso a sus instalaciones de acuerdo a los siguientes datos:

Tipo de Permiso:

Documentación adjunta:`;

  document.getElementById("segui_texto1").value = txt1;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}

function segui_myFunction3a() {
  resultado1 = "c0mun1c4c10ndelespecialista";

  const texto = `

  <div id="segui_grupo3s1" >
    <input type="radio" value="value11" checked="true" id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>
    <input type="radio" value="value22" id="sale2" onchange="segui_myFunction8b()" name="G3ab">SALIENTE<br>
    <div class="imagenBmc" >
      Ubicación en Bmc
      <img src="Notas/img/segui1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2" >
    <div id="aclaraciones" >
      <p><b>Aclaración:</b><p>
      <div>
        <b>Canal de comunicación:</b> (correo,telefóno, whatsapp, teams)<br/>
        <b>Rol del especialista:</b> (especialista, personal campo, coordinador, lider)<br><br/>
        <b>El especialista incluye al personal de campo que escribe</b>
      </div>
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
<div class="enCampo">
      <div class="itemsEnCampo">
        <div class="itemsInterno" >
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
        <div class="itemsInterno" >
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
      <div class="contenidillo" id="contenido_segui" >
        Nota interna
      </div>
 </div>
<section id="aclaracionesAp">
  <div id="aclaraciones" >
    <p class="contenidillo1" id="contenido_segui23"><b>Aclaracion:</b></p>
    <div>Indica el apoyo que un analista presta a otro. Es registrado por quien realizó el apoyo. La nemotecnia irá acompañada con el nombre del grupo al cual pertenece el analista que brindó el apoyo.</div>
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
  <div id="segui_grupo3s1" >
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/segui1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2"></div>`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction3c2() {
  const texto = `
  <div id="segui_grupo3s1" >
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/segui1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2"></div>`;

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

  const texto = `
<div id="segui_grupo3s1" >
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2"></div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `S. Avanzado:
Conclusión al ejecutar lista de chequeo:
Numeral donde se evidencia falla en la lista de chequeo:
Diagnóstico realizado:
Falla eléctrica S/N`;

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}

function segui_myFunction3c2B() {
  resultado1 = "motivo3spera";

  const texto_interno = `Motivo:
Fecha y Hora de contacto con el cliente:
Medio de contacto:
Intentos de contacto:`;

  const texto = `
<div id="segui_grupo3s1" >
  <div class="imagenBmc" >
     Ubicación en Bmc
     <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
 <div id="aclaraciones" >
     <p><b> Aclaración:</b><p>
     <div>
      <b>Motivo: </b>(Detallar el motivo por el cual el caso debe c.olocarse en Pendiente).<br>
      <b>Medio de contacto: </b>(correo, telefóno).<br>
      <b>Intentos de contacto: </b>(1,2,...).<br>
     </div>
 </div>
</div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}
function segui_myFunction3c3() {
  resultado1 = "sd3sd3l3g4d0";

  const texto = `
  <div id="segui_grupo3s1" >
    <div class="imagenBmc" >
      Ubicación en Bmc
      <img src="Notas/img/segui1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2"></div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Observaciones en legado:

Solucionado desde el legado.`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}
function segui_myFunction3c4() {
  let texto = `
<div id="segui_grupo3s1" >
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2"></div>`;

  resultado1 = "r3s0luc10n";

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Pasos realizados para la solución:
Pruebas realizadas y en donde:`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}

function segui_myFunction3c4a() {
  resultado1 = "ch4tr3s0luc10n";

  const texto = `
<div id="segui_grupo3s1" >
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2"></div>`;

  document.getElementById("segui_grupo3").innerHTML = texto;

  const texto_interno = `Pasos realizados:
Pruebas realizadas y en donde:`;

  document.getElementById("segui_texto1").value = texto_interno;
  segui_principal();
}

function segui_myFunction3c5() {
  resultado1 = "NOTAS RESOLUCION";

  const texto = `
  <div id="segui_grupo3s1">
    <div class="imagenBmc">
      Ubicación en Bmc
      <img src="Notas/img/resolucion1.png" >
    </div>
  </div>
  <div id="segui_grupo3s2" >
    <div id="aclaraciones" >
      <p><b>Aclaración:</b></p>
      <div>
        <b>Para próximas solicitudes es necesario revisar, </b>Pasos que debe seguir el cliente antes de llamar (se adiciona este punto si es imputable al cliente)
      </div>
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

  let texto1 = `
  <div id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b>Fecha Visita: </b>Formato fecha: AAAA/MM/DD
    </div>
  </div>`;

  document.getElementById("segui_texto1").value = texto_interno;

  resultado1 = "asignacionpersonalcampo";

  let txt1 = `
  <section class="enCampo">
  <div class="itemsEnCampo">
      <div class="itemsInterno" >
          <input type="radio" value="asigna" checked="true" onchange="segui_myFunction23()" name="g4">Asign. per.
          campo<br>
          <input type="radio" value="asigna" onchange="segui_myFunction24a()" name="g4">Asign. pendiente<br>
          <input type="radio" value="cambio" onchange="segui_myFunction24()" name="g4">Cambio per. campo<br>
          <input type="radio" value="indidis" onchange="segui_myFunction25()" name="g4">Indisp. per. campo<br>
          <input type="radio" value="value8" onchange="segui_myFunction26()" name="g4">Modificación agenda<br>
          <input type="radio" value="value8" onchange="segui_myFunction27()" name="g4">Incumplimiento agenda<br>
          <input type="radio" value="value8" onchange="segui_myFunction28()" name="g4">Gestión inventarios<br>
          <input type="radio" value="value8" onchange="segui_myFunction28b()" name="g4">Gestión viáticos<br>
          <input type="radio" value="value8" onchange="segui_myFunction28c()" name="g4">Solicitud viáticos<br>
      </div>
      <div class="itemsInterno">
          <input type="radio" value="value8" onchange="segui_myFunction28d()" name="g4">Avance Visita<br>
          <input type="radio" value="value8" onchange="segui_myFunction28e()" name="g4">Confirmación visita<br>
          <input type="radio" value="value8" onchange="segui_myFunction29()" name="g4">Falla masiva<br>
          <input type="radio" value="value8" onchange="segui_myFunction30()" name="g4">Reagenda. factores ext.<br>
          <input type="radio" value="value8" onchange="segui_myFunction31()" name="g4">Reagenda. por cliente<br>
          <input type="radio" value="value8" onchange="segui_myFunction32()" name="g4">Reagenda. cliente iloc.<br>
          <input type="radio" value="value9" onchange="segui_myFunction33()" name="g4">Pendiente plat.<br>
      </div>
  </div>
  <div class="contenidillo" id="contenido_segui">
      Nota pública
  </div>
</section>
<div class="contenidillo2" id="contenido_segui24"></div>
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
  let texto_interno = `Actividades realizadas:`;

  const texto = `
<div id="segui_grupo3s1" >
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
    Se utiliza cuando en una Apertura Simple Sin afectación no se repara y se convierte en una Apertura Doble.
    </div>
  </div>
</div>`;

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

function segui_myFunction4() {
  resultado1 = "llamadadelcliente";

  let texto_interno = `De acuerdo a la comunicación establecida Nombre: XXX, Teléfono: XXX hemos registrado su llamada con el siguiente avance:

Seguiremos gestionando su caso en pro de una solución oportuna.

ID llamada:`;

  let texto = `
<div id="segui_grupo3s1" >
  <input type="radio" value="value1" checked="true" id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>
  <input type="radio" value="value2" id="sale1" onChange="segui_myFunction5();" name="G3a">SALIENTE<br>
  <div class="imagenBmc" >
    Ubicación en Bmc<img src="Notas/img/segui2.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b> De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX hemos registrado su llamada con el siguiente avance: </b>(Anexar contenido)
    </div>
  </div>
</div>`;

  resultado1 = "llamadadelcliente";
  document.getElementById("segui_grupo3").innerHTML = texto;
  document.getElementById("segui_texto1").value = texto_interno;

  segui_principal();
}
function segui_myFunction5() {
  resultado1 = "llamadaalcliente";
  segui_principal();

  let texto_interno = `De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX 
Seguiremos gestionando su caso en pro de una solución oportuna.
ID llamada:`;

  const texto = `
<div id="segui_grupo3s1" >
  <input type="radio" value="value1" id="entra1" onChange="segui_myFunction4();" name="G3a">ENTRANTE<br>
  <input type="radio" value="value2" checked="true" id="sale1" onChange="segui_myFunction5();" name="G3a">SALIENTE<br>
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui2.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b> Aclaración:</b></p>
    <div>
    <b>De acuerdo a la comunicación establecida Nombre: XXX Teléfono: XXX </b>(Anexar contenido)
    </div>
  </div>
</div>`;

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

  texto = `
<div id="segui_grupo3s1" >
  <input type="radio" value="value1" checked="true" id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>
  <input type="radio" value="value2" id="sale2" onChange="segui_myFunction8();" name="G3a">SALIENTE<br>
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b></p>
    <div>
      <b>  Se debe adjuntar correo  </b>
    </div>
  </div>
</div>`;

  let texto_interno = `Se brinda respuesta a la solicitud del cliente en el correo adjunto.`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
}
function segui_myFunction8() {
  resultado1 = "correoalcliente";
  segui_principal();

  let texto = `
<div id="segui_grupo3s1" >
  <input type="radio" value="value1" id="entra2" onChange="segui_myFunction7();" name="G3a">ENTRANTE<br>
  <input type="radio" value="value2" checked="true" id="sale2" onChange="segui_myFunction8();" name="G3a">SALIENTE<br>
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png">
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b> Se debe adjuntar correo</b>
    </div>
  </div>
</div>`;

  let texto_interno = `Se envía respuesta a los interesados en el correo adjunto.`;

  document.getElementById("segui_texto1").value = texto_interno;

  document.getElementById("segui_grupo3").innerHTML = texto;

  segui_principal();
}

function segui_myFunction7b() {
  resultado1 = "c0mun1c4c10ndelespecialista";

  const texto = `
<div id="segui_grupo3s1" >
  <input type="radio" value="value11" checked="true" id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>
  <input type="radio" value="value22" id="sale2" onchange="segui_myFunction8b()"  name="G3ab">SALIENTE<br>
  <div class="imagenBmc" >
    Ubicación en Bmc
    <img src="Notas/img/segui1.png" >
  </div>
</div>
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
      <p><b>Aclaración:</b></p>
      <div>
        <b> Canal de comunicación  </b><u>(correo, teléfono, whatsapp, teams)</u><br>
        <b> Rol del especialista  </b><u>(especialista, personal campo, coordinador, líder)</u><br>
        <b> El especialista incluye al personal de campo que escribe</b>
      </div>
  </div>
</div>`;

  let texto_interno = `Especialista que escribe:
Canal de comunicación:
Rol del especialista:
Avance o gestión solicitada por  el especialista:
Apoyo ofrecido:`;

  document.getElementById("segui_texto1").value = texto_interno;
  document.getElementById("segui_grupo3").innerHTML = texto;
  segui_principal();
}
function segui_myFunction8b() {
  resultado1 = "c0mun1c4c10nalespecialista";

  const texto = `
    <div id="segui_grupo3s1" >
        <input type="radio" value="value11" id="entra2" onchange="segui_myFunction7b()" name="G3ab">ENTRANTE<br>
        <input type="radio" value="value22" checked="true" id="sale2" onchange="segui_myFunction8b()" name="G3ab">SALIENTE<br>
        <div class="imagenBmc" >
            Ubicación en Bmc
            <img src="Notas/img/segui1.png" >
        </div>
    </div>
    <div id="segui_grupo3s2" >
        <div id="aclaraciones" >
            <p><b>Aclaración:</b></p>
            <div>
              <b> Canal de comunicación  </b><u>(correo, teléfono, whatsapp, teams)</u><br>
              <b> Rol del especialista  </b><u>(especialista, personal campo, coordinador, líder)</u><br>
              <b>El especialista incluye al personal de campo que escribe</b><br><br>
              <b>Se envían por la opción de envío de correo de BMC, a no ser que requieran respuesta por medio correo.</b>
            </div>
        </div>
    </div>`;

  let texto_interno = `Especialista a quien escribe:
Canal de comunicación:
Rol del especialista:
Avance solicitado del especialista:
Apoyo dado:`;

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
  let texto_interno = `Su reporte de falla fue escalado a nuestro personal en campo. Los datos de la persona que efectuará el respectivo soporte en sitio son:
Nombre Del Personal Asignado:
Cédula:
Fecha Visita:
Hora o franja:
Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos.
En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.
`;

  let texto = `
<div id="segui_grupo3s2" >
  <div  id="aclaraciones" >
    <p><b>Aclaración:</b>
    <div>
      <p><b> Fecha Visita: </b>Formato fecha: AAAA/MM/DD
    </div>
  </div>
</div>`;

  document.getElementById("contenido_segui24").innerHTML = texto;

  document.getElementById("segui_texto1").value = texto_interno;
  resultado1 = "asignacionpersonalcampo";
  segui_principal();
}
function segui_myFunction24() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;

  texto_interno = `Su reporte de falla tuvo un cambio en el nombre de la persona que efectuará el soporte en sitio, estos son los datos actuales:
Nombre Del Personal Asignado:
Cédula:
Fecha de visita:
Hora o franja:
Nota: Le solicitamos, en caso que nuestro personal requiera permisos de ingreso, por favor gestionarlos.
En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance`;

  let texto = `
<div id="segui_grupo3s2" >
  <div  id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b> Fecha Visita: </b>Formato fecha AAAAMMDD
    </div>
  </div>
</div>`;

  document.getElementById("segui_texto1").value = texto_interno;

  document.getElementById("contenido_segui24").style.display = "block";
  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "cambiopersonalcampo";
  segui_principal();
}
function segui_myFunction24a() {
  document.getElementById("contenido_segui").innerHTML = var_nota1;

  document.getElementById("contenido_segui24").style.display = "none";

  let texto_interno = `Su reporte de falla fue escalado a nuestro personal en campo. En este momento nos encontramos coordinándolo, tan pronto se cuente con disponibilidad en la agenda del personal técnico le estaremos informando.

En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.`;

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
  let texto = `
<div id="segui_grupo3s2" >
  <div  id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b> Adjuntar correo</b>
    </div>
  </div>
</div>`;

  txt1 = `Se envía correo para gestionar viáticos.`;

  document.getElementById("contenido_segui24").innerHTML = texto;
  document.getElementById("contenido_segui24").style.display = "block";

  document.getElementById("contenido_segui").innerHTML = var_nota2;
  document.getElementById("segui_texto1").value = txt1;
  resultado1 = "solicitudviaticos";
  segui_principal();
}

function segui_myFunction28d() {
  document.getElementById("contenido_segui").innerHTML = var_nota2;

  let txt1 = `Fecha y hora:
Personal en campo:
Contacto en sitio:
Observación: El personal en campo indica que se encuentra en sitio.`;

  document.getElementById("contenido_segui24").style.display = "block";

  let texto = `
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b> Fecha y hora: </b>de la comunicación con el personal en campo.<br>
      <b> Personal en campo: </b>Nombre del personal en campo que realiza la visita.<br>
      <b> Contacto en sitio: </b>Nombre de la persona que recibió al personal en el sitio.<br>
      Observación: El personal en campo indica que se encuentra en sitio.<br>
      (Breve descripción de lo que está haciendo en el momento).
    </div>
  </div>
</div>
`;

  document.getElementById("segui_texto1").value = txt1;
  document.getElementById("contenido_segui").innerHTML = var_nota2;

  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "avancevisita";
  segui_principal();
}

function segui_myFunction28e() {
  document.getElementById("contenido_segui24").style.display = "block";
  let txt1 = `De acuerdo a la comunición telefonica se confirma:
Nombre:
Teléfono:
Disponibilidad:

Cliente confirma disponibilidad para atender la visita en el horario indicado:
Se reagenda para Fecha y Hora:`;

  let texto = `
<div id="segui_grupo3s2" >
  <div  id="aclaraciones" >
    <p>Aclaración:</b><p>
    <div>
      <b> Nombre:  </b>Usuario con quien se tuvo contacto telefónico<br>
      <b> Telefono:  </b>Número del teléfono al cual se realizó la llamada.<br>
      <b> Disponibilidad:  </b>Disponibilidad horaria que confirme la persona de contacto.<br>
      <b> Observación:  </b>Si el cliente tiene disponibilidad para atender la visita:<br>
      Cliente confirma disponibilidad para atender la visita en el horario indicado: (SI/NO):<br>
      Se reagenda para Fecha y Hora: Si aplica reagendamiento
    </div>
  </div>
</div>
`;

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

  let texto = `Su reporte de falla está asociado a una falla masiva. El área encargada se encuentra trabajando en la solución, por lo tanto, se cancela el soporte a sitio.

En su correo y en el Portal podrá visualizar nuevas actualizaciones de avance.`;

  document.getElementById("segui_texto1").value = texto;
  resultado1 = "fallamasiva";
  segui_principal();
}
function segui_myFunction30() {
  document.getElementById("contenido_segui24").style.display = "block";

  let texto = `
<div id="segui_grupo3s2" >
  <div  id="aclaraciones" >
    <p><b>Aclaración:</b><p>
    <div>
      <b>El personal en campo asignado, nos indica que debido a: </b>Se debe especificar (Problemas de orden público o factores climáticos)
    </div>
  </div>
</div>
`;

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

  let texto = `
  <div id="segui_grupo3s2" >
    <div id="aclaraciones" >
      <p><b>Aclaración:</b></p>
      <div>
        <b>La visita ha sido reagendada debido a: </b>[Motivo de la reagendación].<br>
        <b>Contacto en sitio:</b> [Nombre de la persona que recibió al personal en el sitio].<br>
        <b>Personal en campo:</b> [Nombre del personal en campo que realiza la visita].<br>
        Por lo tanto, reagendaremos su caso para una nueva visita el día <b>[AAMMDD]</b>, indicado por usted.
      </div>
    </div>
  </div>
  `;

  document.getElementById("contenido_segui24").innerHTML = texto;

  resultado1 = "reagendamientoporcliente";
  segui_principal();
}

function segui_myFunction32() {
  document.getElementById("contenido_segui").innerHTML = contenido7;
  document.getElementById("segui_texto1").value = nota7a;

  let texto = `
<div id="segui_grupo3s2" >
  <div id="aclaraciones" >
    <p><b>Aclaración:</b></p>
    <div>
      <b>El personal en campo asignado, nos indica que el lugar de atención se encuentra:</b> Se debe especificar (cerrado o no logra ubicar la dirección).<br>
      Se adjunta evidencia fotográfica.
    </div>
  </div>
</div>
`;

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
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//


//-----------Funcion de cambio de estado de la opcion Permiso-----------------//
//--------------------------Boton de Incremento-------------------------------//
const coloca1 =()=> {
  let sumaxx;
  sumaxx = document.getElementById("permiso2").innerHTML;
  sumaxx = sumaxx.trim();
  sumaxx = parseInt(sumaxx) + 1;
  document.getElementById("permiso2").innerHTML = sumaxx;
  f1();
}
//--------------------------Boton de decremento-------------------------------//
const coloca2 =()=> {
  let sumaxx;
  sumaxx = document.getElementById("permiso2").innerHTML;
  sumaxx = sumaxx.trim();
  sumaxx = parseInt(sumaxx) + -1;
  if (sumaxx >= 0) {
    document.getElementById("permiso2").innerHTML = sumaxx;
    f1();
  }
}
//--------------------------combio en el numero 1-------------------------------//
const f1 =()=> {
  let pper = document.getElementById("permiso2").innerHTML;
  resultado1 = `p3rm1s0: ${pper}`;
  segui_principal();
}
//----------------------------------------------------------------------------//
//-------------------Funcion de chequeo principal-----------------------------//
const segui_principal =()=> {
  const nivelN1 = document.getElementById("nivel1").checked;
  const nivelN2CW = document.getElementById("nivel2").checked;
  const nivelN2TG = document.getElementById("nivel2TG").checked;
  const nivelLC = document.getElementById("nivelLC").checked;
  const nivelMesaTT = document.getElementById("mesaTT").checked;
  const nivelEventos = document.getElementById("nivelEventos").checked;
//---------------------------Ajuste de condicionales---------------------------//
  document.getElementById("grupodiagnostico1").style.display = "block";
  document.getElementById("grupodiagnostico2").style.display = "block";
  document.getElementById("mesa2").style.display = "block";
  document.getElementById("mesa3").style.display = "block";
  document.getElementById("mesaquemas").style.display = "block";
  document.getElementById("norequiere1").style.display = "block";
//--------------------------------Para Nivel 1---------------------------------//
  if (document.getElementById("chequeotipo1").checked) {
    if ( nivelN1 ) {
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
    }
    if ( nivelN2CW || nivelMesaTT || nivelEventos ) {
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelN2TG ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelLC ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
  }  
//--------------------------------Para Nivel 2---------------------------------//
  if ( document.getElementById("chequeotipo2").checked ){
    if ( nivelN1 || nivelMesaTT || nivelEventos ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelN2CW ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
    }
    if ( nivelN2TG ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelLC ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
  }
//--------------------------------Infraestructura---------------------------------//
  if ( document.getElementById("chequeotipo3").checked ){
    if ( nivelN1 ){
      document.getElementById("grupodiagnostico2").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
    }
    if ( nivelN2CW || nivelMesaTT || nivelEventos ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
    }
    if ( nivelN2TG ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelLC ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
  }
//--------------------------------Eventos---------------------------------//
  if ( document.getElementById("chequeotipo4").checked ){
    if ( nivelN1 || nivelN2CW || nivelMesaTT ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
    }
    if ( nivelN2TG ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
      document.getElementById("mesa2").style.display = "block";
      document.getElementById("mesa3").style.display = "block";
      document.getElementById("mesaquemas").style.display = "block";
      document.getElementById("norequiere1").style.display = "block";
    }
    if ( nivelLC ){
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("grupodiagnostico2").style.display = "none";
    }
    if ( nivelEventos ){
      document.getElementById("grupodiagnostico1").style.display = "none";
      document.getElementById("mesaquemas").style.display = "none";
      document.getElementById("norequiere1").style.display = "none";
      document.getElementById("mesa2").style.display = "none";
      document.getElementById("mesa3").style.display = "none";
    }
  }
//--------------------------------Otros Grupos---------------------------------//
if ( document.getElementById("chequeotipo5").checked ){
  if ( nivelN1 || nivelN2CW || nivelMesaTT || nivelEventos ){
    document.getElementById("grupodiagnostico1").style.display = "none";
    document.getElementById("grupodiagnostico2").style.display = "none";
    document.getElementById("mesaquemas").style.display = "none";
    document.getElementById("norequiere1").style.display = "none";
    document.getElementById("mesa2").style.display = "none";
    document.getElementById("mesa3").style.display = "none";
  }
  if ( nivelN2TG ){
    document.getElementById("grupodiagnostico1").style.display = "none";
    document.getElementById("grupodiagnostico2").style.display = "none";
  }
  if ( nivelLC ){
    document.getElementById("mesa2").style.display = "none";
    document.getElementById("mesa3").style.display = "none";
    document.getElementById("grupodiagnostico1").style.display = "none";
    document.getElementById("grupodiagnostico2").style.display = "none";
  }
}

  let x = document.getElementById("segui_texto1").value;

  if (bandareso == "f") {
    `${x}`
    document.getElementById("segui_texto3").value = `${segui}: ${resultado1}  ${funcionario1}`;
  }
}