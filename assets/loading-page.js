window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('body');
    
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1000);
});
