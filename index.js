const menuButtonComment = document.querySelector(".js-burger-comment");
const navComment = document.querySelector(".js-nav-comment");
const nameButton = document.querySelector(".js-name");
const navName = document.querySelector(".js-nav-name");

menuButtonComment.onclick= toggleMenuComment
nameButton.onclick = toggleMenuName

menuButtonComment.onclick = function(e) {
  e.stopPropagation();
  toggleMenuComment()
}

nameButton.onclick = function(e) {
  e.stopPropagation();
  toggleMenuName()
}

navComment.onclick = function (e) {
  e.stopPropagation();
}

navName.onclick = function (e) {
  e.stopPropagation();
}
 
document.body.onclick = function () {
  navComment.classList.remove("open");
}

document.body.onclick = function () {
  navName.classList.remove("open");
}


function toggleMenuComment() {
  if(navComment.classList.contains("open")) {
    navComment.classList.remove("open");
  }else{
    navComment.classList.add("open");
  }
}

function toggleMenuName() {
  if(navName.classList.contains("open")) {
    navName.classList.remove("open");
  }else{
    navName.classList.add("open");
  }
}






  


