function preguntaUno(){
    let respuestaA= document.getElementById("respuestaA");
    let nextBtn = document.getElementById("next-btn");
    if(respuestaA.checked){
        alert("Respuesta correcta");
        nextBtn.disabled = false;
        preguntaDos();
    }else{
        alert("Respuesta incorrecta");
    }  
}

