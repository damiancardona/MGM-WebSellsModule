app.controller('SellsController', [
	"$scope",
	function($scope){
		
		var that = this;
		var venta;

		this.tot =0;
		this.verCarga = true;		
		this.clientes = [];		
		this.productos = [];
		this.lineasVenta={
			lineas: [],
			getTotal: function(){
				var sum = 0;
				lineas.forEach(function(line){
					sum=sum+(line.cant*line.prod.precioUnitario);
					return sum;
				});
			}
		};

		this.loadClientes = function(){
			that.clientes.push({
				id: 1,
				nombre:'Pepe',
				codigo:'123ssa',
				mail:'pepe@123ssa.com'
			});
			that.clientes.push({
				id: 2,
				nombre:'Jose',
				codigo:'nadaawq1',
				mail:'jose@nadaawq1.com.es'
			});
			that.clientes.push({
				id: 3,
				nombre:'André',
				codigo:'alnck1',
				mail:'andre@alnck1.com.fr'
			});
			that.clientes.push({
				id: 4,
				nombre:'Tito',
				codigo:'9998952189',
				mail:'tito@9998952189.com.ar'
			});		
			that.verCarga = false;
			that.selected=that.clientes[0];

			that.loadProductos();
		};

		this.loadProductos= function(){
			that.productos.push({
				id: 1,
				nombre: 'COCINA 550 STYLE',
				codigo: '18045',
				precioUnitario: 210.58,
				selectedProduct: false
			});
			that.productos.push({
				id: 2,
				nombre: 'COCINA 600 STYLE',
				codigo: '18049',
				precioUnitario: 254.37,
				selectedProduct: false
			});
			that.productos.push({
				id: 3,
				nombre: 'COCINA 900 STYLE',
				codigo: '18057',
				precioUnitario: 349.99,
				selectedProduct: false
			});
		};

		this.addLineaVenta=function(producto){
			var idLinea = 0;
			try{
				idLinea=that.lineasVenta.length;
			}catch(ex){
				idLinea=0;
			}
			var linea = {
				id: idLinea,
				prod: producto,
				cant: 1,
				subTotal:0
			};
			that.recalculaPrecio(linea);
			that.lineasVenta.lineas.push(linea);

			that.productos.forEach(function(prods){
				if(prods.id == producto.id){
					prods.selectedProduct=!(prods.selectedProduct);
				}
			})
		};

		this.recalculaPrecio=function(linea){ 
			linea.subTotal = linea.cant*linea.prod.precioUnitario; 
			that.recalculaTotal();
		};

		this.recalculaTotal=function(){ 
			that.tot=0;
			angular.forEach(that.lineasVenta.lineas, function(value, key){
					that.tot=that.tot+value.prod.precioUnitario*value.cant;
				});
		};

		this.closeVenta=function(cliente){
			try{
				angular.forEach(that.lineasVenta.lineas, function(value, key){
					that.tot=that.tot+value.prod.precioUnitario;
				});
				venta={
					lineas: that.lineasVenta.lineas,
					id_cliente: cliente.id,
					total: that.tot
				};
				console.log(venta);
			}catch(ex){
				alert('No se pudo generar la venta:\n'+ex);
			}
		};

		this.delete=function(linea){
			that.lineasVenta.lineas.splice(that.lineasVenta.lineas.indexOf( linea ) , 1); 
			that.recalculaTotal();

			//vuelvo a habilitar q agreguen el producto

			that.productos.forEach(function(p){
				if(linea.prod.id==p.id){
					p.selectedProduct=false;
				}
			});
		};

	}
]);
