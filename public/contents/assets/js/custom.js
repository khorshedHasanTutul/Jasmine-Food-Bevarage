"use strict";


//add remove js
var $cart = document.querySelector(".cart-box");
$cart.addEventListener('click', function () {
    var $cart_view = document.querySelector(".cart_box_container") 	    
    if($cart_view.classList.contains("selected")){
	    $cart_view.classList.remove("selected"); 
	} else {
		$cart_view.classList.add("selected"); 
	}	
});

var $cart = document.querySelector(".card-select-cross");
$cart.addEventListener('click', function () {
    var $cart_view = document.querySelector(".cart_info") 	    
    if($cart_view.classList.contains("shopoff")){
	    $cart_view.classList.remove("shopoff"); 
	} else {
		$cart_view.classList.add("shopoff"); 
	}	
});





//Mobile Menu js
function openNav() {
  document.getElementById("mySidepanel").style.left = "0";
}
function closeNav() {
  document.getElementById("mySidepanel").style.left = "-100%";
}       

// mobile menu dropdown js 
var allHasChildren = document.querySelectorAll(".prent-dropdown .inner-flex");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function() {
        // get the first submenu and toggle using classes
        var subMenu = this.parentNode.getElementsByClassName("child-dropdown")[0];
        if (subMenu.classList.contains('show-menu')) {
            subMenu.classList.remove("show-menu");
        } else {
            subMenu.classList.add("show-menu");
        }
    }
}


// click add class
var allHasChildren = document.querySelectorAll(".add-to-cart");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function() {
        var subMenu = this.parentNode.getElementsByClassName("add-tocart-overlay")[0];
        if (subMenu.classList.contains('show')) {
            // subMenu.classList.remove("show");
        } else {
            subMenu.classList.add("show");
        }
    }
}


// Window Scroll class add js
var scrollpos = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("fade-in");
}

function remove_class_on_scroll() {
    header.classList.remove("fade-in");
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    // console.log(scrollpos);
});



//splide slider auto scroll
document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '.spices-auto-scroll', {
        padding: 10,
        type: 'loop',
        speed: 1000,
        perPage:5,
        width:'100%',
        breakpoints: {
          375: {
              perPage: 1,
          },
          576: {
              perPage: 2,
          },
          991: {
              perPage: 3,
          },
          992: {
              perPage: 4,
          },
          1024: {
              perPage: 4,
          },
          1200: {
              perPage: 5,
          }
    },
        autoScroll: {
        speed: 1,
      },
    }).mount( window.splide.Extensions );
  } );

  

var splides = document.querySelectorAll('.splide-slider-parent');
if(splides.length){
    for(var i=0; i<splides.length; i++){
        var splideElement = splides[i];
        var splideDefaultOptions = 
        {
            rewind: true,
            type: 'loop',
            autoplay: false,
            rewindSpeed: 1000,
            speed: 500,
            pauseOnHover:false,
            perPage:5,
            width:'100%',
            breakpoints: {
              375: {
                  perPage: 1,
              },
              576: {
                  perPage: 2,
              },
              991: {
                  perPage: 3,
              },
              992: {
                  perPage: 4,
              },
              1024: {
                  perPage: 4,
              },
              1200: {
                  perPage: 5,
              }
        }
        }
 
        new Splide( splideElement, splideDefaultOptions ).mount();
    }
}


//splide slider js
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide',{
  	 rewind: true,
      type: 'loop',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
      pauseOnHover:false
  } );
  splide.mount();
} );


document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.offer-splide', {
  	  rewind: true,
      type: 'loop',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
      pauseOnHover:false,
      perPage:2,
      width:'100%',
      breakpoints: {
        375: {
            perPage: 1,
        },
        575: {
            perPage: 1,
        },
  }
      
  } );
  splide.mount();
} );

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.product-gallery-splide', {
  	  rewind: true,
      type: 'loop',
      autoplay: true,
      rewindSpeed: 1000,
      speed: 500,
      pauseOnHover:false,
      perPage:4,
      width:'100%',
      breakpoints: {
        375: {
            perPage: 1,
        },
        576: {
            perPage: 2,
        },
        991: {
            perPage: 3,
        },
        992: {
            perPage: 4,
        },
        1024: {
            perPage: 4,
        },
        1200: {
            perPage: 5,
        }
  }
  } );
  splide.mount();
} );


// back to top btn
var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
  var toTop = document.getElementById('toTop');
  window.scrollY > 45 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}

function abcd() {
  var y1 = window.scrollY;
  y1 = y1 - 1000;
  window.scrollTo(0, y1);
  if (y1 > 0) {
    t1 = setTimeout("abcd()", 50);
  } else {
    clearTimeout(t1);
  }
}

// tab js
document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(kat).style.display = "block";
  evt.currentTarget.className += " active";
}




		




