app.controller('MainController', [
	"$scope",
	function($scope){

		var that = this;

		this.productos = [{id:1, name:"Prod 1", tag:"001", quantity: 0},{id:2, name:"Prod 2", tag:"002", quantity: 0},{id:3, name:"Prod 3", tag:"003", quantity: 0}];

		this.filtro = "";

		this.log = function() {
			var cantidad = that.productos.length;
			that.productos.push({id: cantidad, name:"Prod "+ cantidad, tag: cantidad , quantity: 0});
			//console.log(that.productos);
		};

		this.alert = function() {
			alert("hola");
		};
	}
]);