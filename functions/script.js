function cm1_c1b() {
    var nit1 = document.getElementById("gen-1").value;
    var nit3 = nit1.split(" ")[0];
    
    if (isNaN(nit3)) {
    // alert('Corregir numero NIT');
    return;
    }
    
    var vpri = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    var x = 0;
    
    for (var i = 0, z = nit3.length; i < z; i++) {
    x += nit3.charAt(i) * vpri[z - 1 - i];
    }
    
    var y = x % 11;
    var dv1 = (y > 1) ? 11 - y : y;
    var niti = dv1;
    
    document.getElementById("gen-2").value = niti;
    document.getElementById("gen-3").value = parseInt(nit3 + niti);
    }
    
    function cm1_c1c() {
    cm1_c3('gen-3');
    document.getElementById("gen-1").value = "";
    document.getElementById("gen-2").value = "";
    document.getElementById("gen-3").value = "";
    }
    
    function cm1_tecla2(evt) {
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

    document.getElementById("checkbox").addEventListener("click",()=>{
        let checkbox = document.getElementById("checkbox");
            checkbox.checked = true;
            setTimeout(function() {
            checkbox.checked = false;
            }, 1000);})
    