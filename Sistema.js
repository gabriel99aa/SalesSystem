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
        this._contadorProductosAgregados = 0;
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
            totalVenta += producto.precio;
        }
    }

    mostrarOrden(){
        let productosOrden = ' ';
        for (let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }

        console.log(`orden: ${this._idOrden} total: ${this.calcularTotal()} productos: ${productosOrden}`);
    }
}