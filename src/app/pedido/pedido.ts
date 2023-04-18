export class Pedido{
    _idPedido:number=0
    _idCliente:number=0
    _nombreCliente:string=""
    _totalProductos:number=0
    _importeTotal:number=0
    constructor(idPedido:number, idCliente:number, nombreCliente:string, totalProductos:number, importeTotal:number){
        this._idPedido = idPedido
        this._idCliente = idCliente
        this._nombreCliente = nombreCliente
        this._totalProductos = totalProductos
        this._importeTotal = importeTotal
    }
}