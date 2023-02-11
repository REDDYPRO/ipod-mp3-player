//playlist toggling
function menu() {
  let menu = document.querySelector(".menu")
  let playlist = document.querySelector(".playlist")
  if (menu.innerHTML == "menu") {
    playlist.classList.add("slide-up")
    playlist.classList.remove("slide-down")
    menu.innerHTML = "close"
  } else {
    playlist.classList.remove("slide-up")
    playlist.classList.add("slide-down")
    menu.innerHTML = "menu"
  }
}

