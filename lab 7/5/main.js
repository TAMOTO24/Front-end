let slider = document.querySelector('.slider');
let track = document.querySelector('.track');
let mouseDown = false;

document.addEventListener('mousemove', (event) => {
  if (mouseDown) {
    let leftValue = track.getBoundingClientRect().left;
    let maxLeftValue = leftValue + track.clientWidth - slider.clientWidth;

    let newLeft = Math.max(leftValue, Math.min(event.x, maxLeftValue));
    slider.style.left = `${newLeft}px`;
  }
});

document.addEventListener('mouseup', () => {
  mouseDown = false;
});

slider.addEventListener('mousedown', () => {
  mouseDown = true;
});
