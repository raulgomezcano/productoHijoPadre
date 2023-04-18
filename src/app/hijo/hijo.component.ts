import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../pedido/pedido';
@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  idPedido=0
  idCliente=0
  nombre=""
  nProductos=0
  importe=0
  @Output() enviarDatos = new EventEmitter<Pedido[]>();
  listaPedidos:Pedido[]=[]
  agregarPedido() {
    let nuevoPedido = new Pedido(this.idPedido, this.idCliente, this.nombre, this.nProductos, this.importe)
    this.listaPedidos.push(nuevoPedido)
    this.enviarDatos.emit(this.listaPedidos);
  }
}
