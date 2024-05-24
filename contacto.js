const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    
    const email = document.getElementById("email");

    if((nombre.value === "")  || (email.value === "")){
        alert("Por favor completa los campos")
    }
    else{
    
        setTimeout(function(){
            const nombre = document.getElementById("nombre");
            const section = document.createElement("section");
            const contenedorMensaje = document.getElementById("contenedor-mensaje");
            section.innerHTML = `
            <h2> ${nombre.value} Gracias por tu consulta </h2>
            <h2>Te responderemos a la brevedad</h2>
            <h3>Equipo de ProyectMusic</h3>`
            contenedorMensaje.appendChild(section);
        },1000);

        setTimeout(()=> {
            const contenedorMensaje = document.getElementById("contenedor-mensaje")
            contenedorMensaje.innerHTML = '';
        }, 5000);
    
    } 

});





