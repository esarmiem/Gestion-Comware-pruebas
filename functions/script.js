// cm1-nit-generator
function cm1_c1b() {

    //document.getElementById("digito3").value = "validando";
    var vpri, x, y, z, i, nit1, dv1, niti;
    //nit1=document.form1.nit.value;
    nit1 = document.getElementById("gen-1").value;
    nit2 = nit1;
    var arreglo1 = nit1.split(" ");
    nit3 = arreglo1[0];

    if (isNaN(nit3)) {
        //document.form1.dv.value="X";
        alert('Corregir numero NIT');
    } else {
        vpri = new Array(16);
        x = 0; y = 0; z = nit3.length;
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
            y = (nit3.substr(i, 1));
            x += (y * vpri[z - i]);
        }
        y = x % 11
        if (y > 1) {
            dv1 = 11 - y;
        } else {
            dv1 = y;
        }
        niti = dv1;
        document.getElementById("gen-2").value = niti;
        xxx = parseInt(nit3 + niti);
        document.getElementById("gen-3").value = xxx;
        //actualizaciÃ³n1
    }

}


function cm1_c1c() {
    cm1_c3('gen-3');
}

function cm1_tecla2(evt){ 
    cm1_c1b();
}

function cm1_c3(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).value);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}
// cm1-nit-generator