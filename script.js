document.querySelector('h1').addEventListener('mouseover', function() {
    this.style.color = 'red';
});

document.querySelector('h1').addEventListener('mouseout', function() {
    this.style.color = 'white';
});