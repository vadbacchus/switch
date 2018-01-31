var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("reviews");
	if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
   slides[slideIndex-1].style.display = "block"; 
}

$(document).ready(function(){



	var click = document.getElementsByClassName ('menu__hamburger');
	var i;
		for (i=0;i<click.length;i++) {
			click[i].onclick = function() {
				var menu = document.getElementById('menu__id');
				if (menu.className === 'menu__list') {
					menu.className += ' responsive';
				}
				else {
					menu.className = 'menu__list';
				}
			}
		}


$("a.scrollbtn-down, a.offer, a.menu__link, a.back2top").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top+1;
    jQuery("html, body").animate({
        scrollTop: destination
    }, 500);
    return false;
 });

$(window).scroll(function() {
	if($(window).scrollTop()>300) {
		$(".back2top").fadeIn(500).css({"display": "flex"});
	}
	else {
		$(".back2top").fadeOut(1000);
	}
})
			
$(".filter button").click(function(){
    var value = $(this).attr('data-filter');
      if(value == "photo" || value == "design" || value == "print") {
        $(".pics").not('.'+value).fadeOut();
        $('.pics').filter('.'+value).fadeIn();   
        }
    });








});	








		
