var app = angular.module('miTienda', []);
app.controller('TiendaController', function() {

	this.articulos = productos;
	
	this.stockClass = function (stock) {
		if(stock >= 15)
			return 'label-success';
		else if(stock === 0)
			return 'label-danger';
		else
			return 'label-warning';
	}

	this.addCar = function (articulo) {
		console.log("vendido " + articulo.nombre);
	}

});

var productos = [{
    nombre: 'FUJIFILM FinePix S8600',
    precio: 149.00,
    imagen: 'img/fujifilm.jpg',
    stock: 5
}, {
    nombre: 'PANASONIC TX-55AS650E',
    precio: 1499.00,
    imagen: 'img/tv1.jpg',
    stock: 9
}, {
    nombre: 'SAMSUNG Galaxy S4',
    precio: 399.00,
    imagen: 'img/fujifilm.jpg',
    stock: 22,
}, {
    nombre: 'WD WD Red WD40EFRX',
    precio: 174.90,
    imagen: 'img/disco-duro.jpg',
    stock: 0,
}, {
    nombre: 'SAMSUNG Gear',
    precio: 199.00,
    imagen: 'img/samsung-gear.jpg',
    stock: 34,
}];
