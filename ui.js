$(document).ready(function(){

	updateTotals(tienda);
	updateProductList(tienda.usuario.carrito);
	loadProductosInUi(tienda.productos, tienda);

	$(document).on('click', '.add-to-cart', function(){
		$(this).attr("prod");
		if($(this).attr("prod")){
			tienda.addProdToCar(1, tienda.getProduct($(this).attr("prod")));
			updateTotals(tienda);
			updateProductList(tienda.usuario.carrito);
		}
	});

	function updateTotals(ti){
		var totales = $(".totales");
		var subtotal = $(".subtotal");
		var iva = $(".iva");
		totales.html("Total: $" + parseFloat(ti.usuario.carrito.total).toFixed(2) + " <span class='caret'></span>");
		subtotal.html("Subtotal: $" + parseFloat(ti.usuario.carrito.subTotal).toFixed(2));
		iva.html("IVA: $" + parseFloat(ti.usuario.carrito.iva).toFixed(2));
	}

	function updateProductList(carrito){
		var productos = $(".productos");
		if (carrito.listaEntradas.length == 0){
			productos.append(
				"<li><a href='javascript:void(0)'>No hay productos en tu carrito</a></li>"
				);
		} else {
			productos.html("");
		}
		var cantidad = $(".cantidad-productos");
		cantidad.html("" + carrito.listaEntradas.length + " <span class='caret'></span>");
		for(i = 0; i < carrito.listaEntradas.length; i++){
			productos.append(
				"<li><a href='javascript:void(0)'>" + carrito.listaEntradas[i].canti + " " 
				+ carrito.listaEntradas[i].producto.nombre 
				+ " - P. Unitario: $" + carrito.listaEntradas[i].producto.precio + "</a></li>"
				);
		}
	}

	function loadProductosInUi(array, ti){
		for(i = 0; i < array.length; i++){
			$(".features_items").append(
				"<div class='col-sm-4'>" +
					"<div class='product-image-wrapper'>" +
						"<div class='single-products'>" +
							"<div class='productinfo text-center'>" +
								"<img src='" + array[i].img + "' alt='' />" +
								"<h2>$" + array[i].precio + "</h2>" +
								"<p>" + array[i].nombre + "</p>" +
								"<a href='javascript:void(0)' class='btn btn-default add-to-cart' prod='" + array[i].nombre + "'><i class='fa fa-shopping-cart'></i>Add to cart</a>" +
							"</div>" +
						"</div>" +
						"<div class='choose'>" +
							"<ul class='nav nav-pills nav-justified'>" +
								"<li><a href='#'><i class='fa fa-plus-square'></i>Add to wishlist</a></li>" +
								"<li><a href='#''><i class='fa fa-plus-square'></i>Add to compare</a></li>" +
							"</ul>" +
						"</div>" +
					"</div>" +
				"</div>");
		}
	}
});