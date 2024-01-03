// this file adjusts the textarea's container
const textarea = document.getElementById('myTextarea');
const container = document.getElementById('container');

textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

container.addEventListener('input', function() {
  checkOverflow();
});

function checkOverflow() {
  const isOverflowing = container.scrollHeight > container.clientHeight;

  if (isOverflowing) {
    container.style.height = 'auto';
    container.style.height = (this.scrollHeight) + 'px';
    console.log('is working')
  }
}