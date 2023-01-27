const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('.column',{interval: 200}); 
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});