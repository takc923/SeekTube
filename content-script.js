// todo: Better extension name.
// todo: Make keyboard shortcut and seconds configurable.

document.addEventListener("keydown", (evt) =>{
  let ae = document.activeElement
  if (ae.isContentEditable || ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') {
    return
  }
  if (evt.key === ';'){
    forwards(1);
  } else if (evt.key === 'h') {
    forwards(-1);
  }
});

function forwards(seconds) {
  let v = document.querySelector('video')
  v.currentTime = v.currentTime + seconds
}
