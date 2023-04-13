//----DINAMICA DE LAS VISTAS DE LA PESTAÑA TIQUETES----//
//-----------------------------------------------------//

document.getElementById("apSimple").addEventListener("click", ()=>{

    document.getElementById("apertura_simple").classList.remove("oculto");
    document.getElementById("apertura_doble").classList.add("oculto");
    document.getElementById("apertura_D2clientes").classList.add("oculto");
    document.getElementById("retiro_empalme").classList.add("oculto");
    document.getElementById("reingreso_anillo").classList.add("oculto");
    document.getElementById("alarma_potencia").classList.add("oculto");

})

document.getElementById("apDoble").addEventListener("click", ()=>{
    
    document.getElementById("apertura_doble").classList.remove("oculto");
    document.getElementById("apertura_simple").classList.add("oculto");
    document.getElementById("apertura_D2clientes").classList.add("oculto");
    document.getElementById("retiro_empalme").classList.add("oculto");
    document.getElementById("reingreso_anillo").classList.add("oculto");
    document.getElementById("alarma_potencia").classList.add("oculto");
})

document.getElementById("apDoble2C").addEventListener("click", ()=>{

    document.getElementById("apertura_D2clientes").classList.remove("oculto");
    document.getElementById("apertura_simple").classList.add("oculto");
    document.getElementById("apertura_doble").classList.add("oculto");
    document.getElementById("retiro_empalme").classList.add("oculto");
    document.getElementById("reingreso_anillo").classList.add("oculto");
    document.getElementById("alarma_potencia").classList.add("oculto");
})

document.getElementById("retiroDE").addEventListener("click", ()=>{

    document.getElementById("retiro_empalme").classList.remove("oculto");
    document.getElementById("apertura_simple").classList.add("oculto");
    document.getElementById("apertura_doble").classList.add("oculto");
    document.getElementById("apertura_D2clientes").classList.add("oculto");
    document.getElementById("reingreso_anillo").classList.add("oculto");
    document.getElementById("alarma_potencia").classList.add("oculto");
})

document.getElementById("reingresoAnillo").addEventListener("click", ()=>{

    document.getElementById("reingreso_anillo").classList.remove("oculto");
    document.getElementById("apertura_simple").classList.add("oculto");
    document.getElementById("apertura_doble").classList.add("oculto");
    document.getElementById("apertura_D2clientes").classList.add("oculto");
    document.getElementById("retiro_empalme").classList.add("oculto");
    document.getElementById("alarma_potencia").classList.add("oculto");
})

document.getElementById("alarmaPO").addEventListener("click", ()=>{

    document.getElementById("alarma_potencia").classList.remove("oculto");
    document.getElementById("apertura_simple").classList.add("oculto");
    document.getElementById("apertura_doble").classList.add("oculto");
    document.getElementById("apertura_D2clientes").classList.add("oculto");
    document.getElementById("retiro_empalme").classList.add("oculto");
    document.getElementById("reingreso_anillo").classList.add("oculto");
})