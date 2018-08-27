$(document).ready(function(){
	
	$('.slider').slick({ 
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('.slider2').slick({
		prevArrow: $('.arrowLeft'),
    	nextArrow: $('.arrowRight'),

	});

	// Validation du formulaire avec affichage d'un message après

	$('#submit').click(function(event){ // rattache un evenement click au bouton submit
		event.preventDefault() // stop l'evenement (ici le raffraichissement de la page aprèsavoir appuyer sur le bouton)
		var firstName = $('#firstName').val(); // on récupère la valeur du champ #firstName (avec .val) et on l'affecte à une variable
		var name = $('#name').val();
		var mail = $('#mail').val();
		var message = $('#msg').val();
		alert('Merci ' + firstName + ' ' + name + ' d\'avoir répondu au formulaire.') // affiche un message sur la page
	});

	$('.fleche').click(function(){ // rattache un evenement au click sur l'élément fleche
		var offset = $('#second').offset().top; // on créer une variable offset et on lui donne la valeur de la position la plus haute de la div second
		window.scrollTo(0, offset); // on scroll en x et en y

	});

});

