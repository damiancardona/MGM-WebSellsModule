app.controller('MainController', [
	"$scope",
	function($scope){

		var that = this;

		this.user={name:'', pass:''};


		this.productos = [
			{
				id:1, 
				name:"nn", 
				tag:"dfas" ,
				quantity: 0
			},
			{
				id:2, 
				name:"Prod 2", 
				tag:"002", 
				quantity: 0
			},
			{
				id:3, 
				name:"Prod 3", 
				tag:"003", 
				quantity: 0
			}
		];

		this.ventas =[];

		$scope.clientes=[];

		$scope.verBotonCargarCliente = true;

		this.filtro = "";
		try{
			this.ClienteSeleccionado = this.clientes[0];
		}catch(ex){

		}
		this.log = function() {
			var cantidad = that.productos.length;
			that.productos.push({id: cantidad, name:"Prod "+ cantidad, tag: cantidad , quantity: 0});
			//console.log(that.productos);
		};

		this.login = function(user) {
			try{

				if(user.name=='' || user.pass==''||user.name==null || user.pass==null){
					alert('COMPLETE TODOS LOS CAMPOS');
				}
				else{
					alert('Logueo de: '+user.name);				
				}
			}
			catch(ex){
					alert('COMPLETE TODOS LOS CAMPOS');
			}					
		};

		this.alert = function() {
			alert("hola");
		};
		this.loadVentas = function(){
			that.ventas =
			[
			{
				cliente:'Damian',
				fecha: new Date(),
				monto: 125.58,
				Items: 3
			},
			{
				cliente:'Jose',
				fecha: new Date(),
				monto: 85,
				Items: 1
			},
			{
				cliente:'Pablo',
				fecha: new Date(),
				monto: 1125.58,
				Items: 8
			}
			];
		};

		this.editar = function(venta){
			alert('Vendido a:'+venta.cliente+' un monto de :'+venta.monto);
		};

		this.cargarCliente = function(){
			$scope.clientes = [
			{
				nombre:'Pepe',
				codigo:'123ssa',
				mail:'pepe@123ssa.com'
			},
			{
				nombre:'Jose',
				codigo:'nadaawq1',
				mail:'jose@nadaawq1.com.es'
			},
			{
				nombre:'André',
				codigo:'alnck1',
				mail:'andre@alnck1.com.fr'
			},
			{
				nombre:'Tito',
				codigo:'9998952189',
				mail:'tito@9998952189.com.ar'
			}
			];
			$scope.verBotonCargarCliente = false;
			$scope.correctlySelected=$scope.clientes[0];
			console.log($scope.clientes);

		}

		this.sum = function(){
			var rta = 0;
			angular.forEach(that.productos,
				function(value, key){
					rta=MathService.add(rta, value.quantity);
			});
			alert(rta);
		};

		this.prod = function(){
			alert('Vendido a:'+venta.cliente+' un monto de :'+venta.monto);
		};
}]);