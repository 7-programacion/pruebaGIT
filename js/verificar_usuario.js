function login(){
    let usuario = document.getElementById("nombre").value;
    let pass = document.getElementById("pass").value;
    
    console.log("Verificar Usuario: ");
    console.log(usuario);
    console.log(pass);
    
    
    
    if ((usuario == "pumbita91") & (pass=="manolo")){
        console.log("Bienvenido Pumbita!");
        prompt("hola:")
    }
    else
        console.log("Usuario Incorrecto");    

}