usuario = "";

function cm1_c1b() {
  //document.getElementById("digito3").value = "validando";
  var vpri, x, y, z, i, nit1, dv1, niti;
  //nit1=document.form1.nit.value;
  nit1 = document.getElementById("dian1").value;
  nit2 = nit1;
  var arreglo1 = nit1.split(" ");
  nit3 = arreglo1[0];

  if (isNaN(nit3)) {
    //document.form1.dv.value="X";
    alert("corrige el nit");
  } else {
    vpri = new Array(16);
    x = 0;
    y = 0;
    z = nit3.length;
    vpri[1] = 3;
    vpri[2] = 7;
    vpri[3] = 13;
    vpri[4] = 17;
    vpri[5] = 19;
    vpri[6] = 23;
    vpri[7] = 29;
    vpri[8] = 37;
    vpri[9] = 41;
    vpri[10] = 43;
    vpri[11] = 47;
    vpri[12] = 53;
    vpri[13] = 59;
    vpri[14] = 67;
    vpri[15] = 71;

    for (i = 0; i < z; i++) {
      y = nit3.substr(i, 1);
      x += y * vpri[z - i];
    }
    y = x % 11;
    if (y > 1) {
      dv1 = 11 - y;
    } else {
      dv1 = y;
    }

    niti = dv1;

    document.getElementById("dian2").value = niti;

    xxx = parseInt(nit3 + niti);

    document.getElementById("dian3").value = xxx;
    //actualización1
  }
}

function cm1_c1c() {
  cm1_c3("dian3");
}
function cm1_c3(id_elemento) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function cm1_tecla1(evt) {
  var e = evt || window.event;
  var charCode = evt.which ? evt.which : evt.keyCode;

  if (charCode == 13) {
    cm1_c1();
  }

  return true;
}

function cm1_tecla2(evt) {
  cm1_c1b();
}

function cm1_c1() {
  alto = "1800";
  ancho = "1600";

  var ancho2 = window.innerWidth;

  ancho = ancho2 - 120;

  usuario = document.getElementById("cm1_t1").value;
  usuario = usuario.trim();

  x = localStorage.getItem("lastname");
  if (x == usuario) {
    //document.getElementById("cm1_t1").visible = false ;

    document.getElementById("cm1_t1").style.display = "none";

    //document.getElemente
  }

  if (usuario != "") {
    localStorage.setItem("lastname", usuario);

    fuente1 =
      "http://netvm-pcmi01/cmi_pymes/web/main/login?username=" +
      usuario +
      "&email=fd5956c04b672141e914051e630aefb2@tigoune.com.co";

    fuente2 =
      '<object  id="datos1" type="text/html"  data="' +
      fuente1 +
      '" width="' +
      ancho +
      ' px"  height="' +
      alto +
      ' px"> </object>';

    document.getElementById("cm1_demo").innerHTML = fuente2;

    // data="http://netvm-pcmi01/cmi_pymes/web/main/login?username=halvarro&email=fd5956c04b672141e914051e630aefb2@tigoune.com.co" width="1246 px"  height="1800 px
  } else {
    document.getElementById("cm1_t1").value = "";
    document.getElementById("cm1_t1").style.display = "block";

    //document.getElementById("cm1_t1").visibility = true;
  }
}
