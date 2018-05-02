$(document).ready(function(){
  $('.carousel-games').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    touchMove: false
  });
});

function changeConsole() {
  if (document.getElementById("imageConsole").style.backgroundImage == "")
    {
      document.getElementById("imageConsole").style.backgroundImage = "url(\"ps.png\")";
    }
  else if (document.getElementById("imageConsole").style.backgroundImage == "url(\"computer.png\")")
    {
      document.getElementById("imageConsole").style.backgroundImage = "url(\"ps.png\")";
    }
  else if (document.getElementById("imageConsole").style.backgroundImage == "url(\"ps.png\")")
    {
      document.getElementById("imageConsole").style.backgroundImage = "url(\"xbox.png\")";
    }
  else
    {
      document.getElementById("imageConsole").style.backgroundImage = "url(\"computer.png\")";
    }
}