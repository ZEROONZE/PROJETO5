$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 4;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostrar e ocultar o submenu
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	$('.submenu1').click(function(){
		$(this).children('.children1').slideToggle();
	});



var interval = 0;


var maxSlider = document.querySelectorAll('.box-image').length - 1;

sumir()
function sumir(){
  let img = document.querySelectorAll('.box-image img')
  img[1].style.display = "none";
  img[2].style.display = "none";
  

}
acao();


function acao() {
    let img = document.querySelectorAll('.box-image img')
    
    setInterval(function(){

          img[interval].style.display = "none";
          interval ++;
   
         if(interval > maxSlider){
       
          interval = 0;


         }     
         img[interval].style.display = 'block';

 

    },7000)
}
}