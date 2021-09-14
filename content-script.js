// todo: Make keyboard shortcut and seconds configurable.

document.addEventListener("keydown", (evt) =>{
  if (evt.key === ';'){
    forwards();
  } else if (evt.key === 'h') {
    backwards();
  }
});

function forwards() {
  let v = document.querySelector('video')
  v.currentTime = v.currentTime + 1
}

function backwards() {
  let v = document.querySelector('video')
  v.currentTime = v.currentTime - 1
}
