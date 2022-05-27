$('.submenu').click(function(){
  $(this).children('.dropdown').slideToggle();
});










// ------------------------------ SCROLL ANIMATION + MENU ACTIVE ------------------------- //
$(document).ready(function () {
  $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
       $(document).off("scroll");
        
      $('a').each(function () {
        $(this).removeClass('menuAtivo');
      })
      $(this).addClass('menuAtivo');
      
        var target = this.hash,
         menu = target;
        $target = $(target);
        $('html, body').stop().animate({
         'scrollTop': $target.offset().top+0 // trocar o zero quando necessario
        }, 600, 'swing', function () {
          $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#ativarMenu li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if ((refElement.position().top - 120) <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#ativarMenu li a').removeClass("menuAtivo");
       currLink.addClass("menuAtivo");
      }
      else{
        currLink.removeClass("menuAtivo");
      }
  });
}


(function() {
  
  var autoUpdate = false,
      timeTrans = 4000;
  
	var cdSlider = document.querySelector('.cd-slider'),
		item = cdSlider.querySelectorAll("li"),
		nav = cdSlider.querySelector("nav");

	item[0].className = "current_slide";

	for (var i = 0, len = item.length; i < len; i++) {
		var color = item[i].getAttribute("data-color");
		item[i].style.backgroundColor=color;
	}

	// Detect IE
	// hide ripple effect on IE9
	var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE");
		if ( msie > 0 ) {
			var version = parseInt(ua.substring(msie+ 5, ua.indexOf(".", msie)));
			if (version === 9) { cdSlider.className = "cd-slider ie9";}
	}

	if (item.length <= 1) {
		nav.style.display = "none";
	}

	function prevSlide() {
		var currentSlide = cdSlider.querySelector("li.current_slide"),
			prevElement = currentSlide.previousElementSibling,
			prevSlide = ( prevElement !== null) ? prevElement : item[item.length-1],
			prevColor = prevSlide.getAttribute("data-color"),
			el = document.createElement('span');

		currentSlide.className = "";
		prevSlide.className = "current_slide";

		nav.children[0].appendChild(el);

		var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
		    ripple = nav.children[0].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = prevColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	function nextSlide() {
		var currentSlide = cdSlider.querySelector("li.current_slide"),
			nextElement = currentSlide.nextElementSibling,
			nextSlide = ( nextElement !== null ) ? nextElement : item[0],
			nextColor = nextSlide.getAttribute("data-color"),
			el = document.createElement('span');

		currentSlide.className = "";
		nextSlide.className = "current_slide";

		nav.children[1].appendChild(el);

		var size = ( cdSlider.clientWidth >= cdSlider.clientHeight ) ? cdSlider.clientWidth*2 : cdSlider.clientHeight*2,
			  ripple = nav.children[1].querySelector("span");

		ripple.style.height = size + 'px';
		ripple.style.width = size + 'px';
		ripple.style.backgroundColor = nextColor;

		ripple.addEventListener("webkitTransitionEnd", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

		ripple.addEventListener("transitionend", function() {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		});

	}

	updateNavColor();

	function updateNavColor () {
		var currentSlide = cdSlider.querySelector("li.current_slide");

		var nextColor = ( currentSlide.nextElementSibling !== null ) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
		var	prevColor = ( currentSlide.previousElementSibling !== null ) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length-1].getAttribute("data-color");

		if (item.length > 2) {
			nav.querySelector(".prev").style.backgroundColor = prevColor;
			nav.querySelector(".next").style.backgroundColor = nextColor;
		}
	}

	nav.querySelector(".next").addEventListener('click', function(event) {
		event.preventDefault();
		nextSlide();
		updateNavColor();
	});

	nav.querySelector(".prev").addEventListener("click", function(event) {
		event.preventDefault();
		prevSlide();
		updateNavColor();
	});
  
  //autoUpdate
  setInterval(function() {
    if (autoUpdate) {
      nextSlide();
      updateNavColor();
    };
	},timeTrans);

})();




let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'https://cdpn.io/thicode/debug/abpVEeB/jVMpoEDNzPxk'
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}


