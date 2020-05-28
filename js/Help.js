/* @Título "DNI y su letra correspondiente"
   @ versión 1.0
   @ autor Gaby */

   var dniCompleto= [];
   resultado,
   letras= [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
   ];

   do {
       var numeroDni = prompt ('Escribe los dígitos del DNI:');
       const RESTO = numeroDni % 23
       switch (true) {
           case numeroDni <0:
           case numeroDni.length !== 8:
           case numeroDni ==="":
             alert ('ERROR!. Por favor inténtalo nuevamente con los parámetros correctos.')
           break;
           if (numeroDni === "salir"){
               alert ('Adiós, hasta pronto!')
               break;
               
           }

           default: resultado = numeroDni + letras [RESTO];
           dniCompleto.push (resultado);

       } while (numeroDni !== "salir");

       for (var dni of dniCompleto){
           document.write (dni + "<br>")
       }
   }
