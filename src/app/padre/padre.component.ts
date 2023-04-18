import { Component } from '@angular/core';
import { Pedido } from '../pedido/pedido';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  listaPedidos:Pedido[]=[]
  agregarPedidop(pedidos:any){
    this.listaPedidos=pedidos
  }
}
