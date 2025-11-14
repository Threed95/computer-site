function animateProgressBar(element, startValue, endValue, duration) {
    let startTime = null;

    function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Прогресс от 0 до 1
        const currentValue = startValue + (endValue - startValue) * progress;

        element.value = currentValue;

        if (timeElapsed < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

const progress = document.querySelector('progress');
const start = progress.value;
const end = 1000000;
const duration = 1000;

animateProgressBar(progress, start, end, duration);