const course = () => {

    const counterElement = document.getElementById('counter');
    const targetValue = 400000;
    const duration = 2000;
    const startTime = performance.now();

    function animateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * targetValue);

        counterElement.textContent = currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }
    }

    requestAnimationFrame(animateCounter);


}

course();