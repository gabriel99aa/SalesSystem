class Producto {

    static contadorProducto = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

class Orden {

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length  < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else {
            console.log("no se pueden agregar mas productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto._precio;
        }

        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = ' ';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';
        }

        console.log(`orden: ${this._idOrden} total: ${this.calcularTotal()} ~ productos: ${productosOrden}`);
    }
}

let producto1 = new Producto("hat", 300);
let producto2 = new Producto ("panta", 150);
let producto3 = new Producto ("t-Shirt", 50);

let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden2.agregarProducto(producto3);

orden1.mostrarOrden();
orden2.mostrarOrden();