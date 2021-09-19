document.addEventListener("keydown", (evt) =>{
  let ae = document.activeElement
  if (ae.isContentEditable || ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') {
    return
  }
  if (evt.key === ';'){
    seekBy(1);
  } else if (evt.key === 'h') {
    seekBy(-1);
  }
});

function seekBy(seconds) {
  let v = document.querySelector('video[src]')
  if (!v) return
  v.currentTime = v.currentTime + seconds * v.playbackRate
}
