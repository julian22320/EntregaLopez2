class Prestamo{
    constructor(nombre,importe,cuota){
        this.nombre = nombre;
        this.importe = importe;
        this.cuota = cuota;
        this.importeFinal = 0;
    }

    calcularCuotas(importe, cuota){
        let interes;
        if(cuota =="1"){
            interes = importe * 0.10
            this.importeFinal = importe + interes;
        }

        else if(cuota == "3"){
            interes = importe * 0.40
            this.importeFinal = importe + interes;
        }

        else if(cuota == "6"){
            interes = importe * 0.70;
            this.importeFinal = importe + interes;
        }

        else if(cuota == "12"){
            interes = importe * 1.00
            this.importeFinal = importe + interes;
        }
    }

    getDatosPrestamo(){

        console.log("PRESTAMO DE: ", this.nombre);
        console.log("Importe: ", this.importe);
        console.log("Cuotas: ", this.cuotas);
        console.log("Total a devolver: ", this.importeFinal);
    }
}

function consultarPrestamos(objPrestamo){
    return objPrestamo.nombre == nombre;
}

let nombreCliente = "";
let listaPrestamos = [];


while(nombreCliente != "TERMINAR"){
    
    console.log("SIMULADOR DE PRESTAMO");
    console.log("---------------------");

    nombreCliente = prompt("Ingrese su nombre o TERMINAR para finalizar");
    if(nombreCliente != "TERMINAR"){
    let importe = prompt("Ingrese el importe");
    importe = parseInt(importe);
    
    console.log("INTERES POR CANTIDAD DE CUOTAS:");
    console.log("1: 10% || 3: 40% || 6: 70% || 12: 100%");

    let cuota = prompt("Ingrese la cantidad de cuotas");

    let objPrestamo = new Prestamo(nombreCliente,importe,cuota);
    objPrestamo.calcularCuotas(importe,cuota);
    listaPrestamos.push(objPrestamo);
    console.log("Gracias por utilizar nuestro simulador");
}
}

let opcion = prompt("A) Consultar todos los prestamos || B) Consultar prestamos por cliente || C) Para ver rentabilidad de prestamos");

let nombre;

if(opcion == "A"){
    console.log("TODOS LOS PRESTAMOS");
    for( let prestamo of listaPrestamos){
        prestamo.getDatosPrestamo();
    }
}
    else if(opcion == "B"){
        nombre = prompt("Ingresar cliente a consultar");
        let resultadoFilter = listaPrestamos.filter(consultarPrestamos);

        if(resultadoFilter.length != 0){
            for(let prestamo of resultadoFilter){
                prestamo.getDatosPrestamo();
            }
        }
        else{
            console.log("El Cliente no posee prestamos registrados");
        }
        
    }

    else if(opcion == "C"){
        function calcularTotalPedido(acu, objPrestamo){
            acu = acu + objPrestamo.importe;
            return acu;
        }
        let totalPedido = listaPrestamos.reduce(calcularTotalPedido, 0);

        console.log("El dinero total solicitado es de: ", totalPedido);

        function calcularTotalDevuelto(acuDos, objPrestamo){
            acuDos = acuDos + objPrestamo.importeFinal;
            return acuDos;
        }
        let totalDevuelto = listaPrestamos.reduce(calcularTotalDevuelto, 0);

        console.log("Los cientes devolvieron: ", totalDevuelto);

        console.log("La rentabilidad de los prestamos es de: ", totalDevuelto - totalPedido);
    }

