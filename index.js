const menuButton = document.querySelector(".js-burger");
const nav = document.querySelector(".js-nav");
const menuButtonComment = document.querySelector(".js-burger-comment");
const navComment = document.querySelector(".js-nav-comment");

menuButton.onclick = toggleMenu;
menuButtonComment.onclick= toggleMenuComment

menuButton.onclick = function(e) {
  e.stopPropagation();
  toggleMenu()
}
menuButtonComment.onclick = function(e) {
  e.stopPropagation();
  toggleMenuComment()
}

nav.onclick = function (e) {
  e.stopPropagation();
}

navComment.onclick = function (e) {
  e.stopPropagation();
}
 
document.body.onclick = function () {
  nav.classList.remove("open");
  navComment.classList.remove("open");
}

function toggleMenu() {
  if(nav.classList.contains("open")) {
    nav.classList.remove("open");
  }else{
    nav.classList.add("open");
  }
}

function toggleMenuComment() {
  if(navComment.classList.contains("open")) {
    navComment.classList.remove("open");
  }else{
    navComment.classList.add("open");
  }
}





  


