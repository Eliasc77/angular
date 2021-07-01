import { Producto } from './Producto';
export class Carrito{

  item:any;
  idProducto:any;
  nombre:any;
  descripcion:any;
  precioUnit:any;
  cantidad:any;
  subtotal:any;
  foto:any;

  constructor(producto : Producto){
    this.idProducto=producto.cod_prod;
    this.nombre=producto.nombre_prod;
    this.descripcion=producto.descripcion;
    this.precioUnit=producto.precio;
    this.cantidad=1;
    this.foto=producto.foto;
  }
}
