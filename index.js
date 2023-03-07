const menuButtonComment = document.querySelector(".js-burger-comment");
const navComment = document.querySelector(".js-nav-comment");

menuButtonComment.onclick= toggleMenuComment

menuButtonComment.onclick = function(e) {
  e.stopPropagation();
  toggleMenuComment()
}

navComment.onclick = function (e) {
  e.stopPropagation();
}
 
document.body.onclick = function () {
  navComment.classList.remove("open");
}


function toggleMenuComment() {
  if(navComment.classList.contains("open")) {
    navComment.classList.remove("open");
  }else{
    navComment.classList.add("open");
  }
}






  


