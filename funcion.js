function verificarRespuesta(preguntaId) {
    const pregunta = document.getElementById(preguntaId);
    const opciones = pregunta.querySelectorAll("input[type=radio]");
    let respuestaCorrecta = false;

    opciones.forEach((opcion) => {
        if (opcion.checked) {
           
            switch (preguntaId) {
                case "pregunta1":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta2":
                    respuestaCorrecta = opcion.value === "B";
                    break;
                
                case "pregunta3":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta4":
                    respuestaCorrecta = opcion.value === "A";
                    break;
                case "pregunta5":
                        respuestaCorrecta = opcion.value === "A";
                        break; 
                case "pregunta6":
                        respuestaCorrecta = opcion.value === "A";
                        break;
                case "pregunta7":
                        respuestaCorrecta = opcion.value === "C";
                        break;
                case "pregunta8":
                        respuestaCorrecta = opcion.value === "B";
                        break; 
                case "pregunta9":
                        respuestaCorrecta = opcion.value === "B";
                        break;
                case "pregunta10":
                        respuestaCorrecta = opcion.value === "C";
                        break;                              
                
                default:
                    respuestaCorrecta = false;
            }
        }
    });

    if (respuestaCorrecta) {
        pregunta.style.display = "none";

        // Mostrar la siguiente pregunta si existe
        const siguientePreguntaId = "pregunta" + (parseInt(preguntaId.slice(8)) + 1);
        const siguientePregunta = document.getElementById(siguientePreguntaId);
        if (siguientePregunta) {
            siguientePregunta.style.display = "block";
            
        } else {
            
            // Si no hay más preguntas, se puede mostrar un mensaje o realizar alguna acción final.
            alert("¡Felicidades! has ganado 1 millon de pesos ");
        }
    } else {
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }
}