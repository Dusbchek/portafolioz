document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.min(scrollPosition / (maxScroll * 0.5), 1);
    
    const overlay = document.querySelector('.overlay');
    
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${scrollPercentage * 0.9})`;
});