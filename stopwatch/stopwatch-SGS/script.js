let timerInterval;
let timeElapsed = 0; // In seconds
let paused = true;

const display = document.getElementById('display');
const startPauseButton = document.getElementById('startPause');
const clearButton = document.getElementById('clear');

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

// Start or pause the stopwatch
startPauseButton.addEventListener('click', function () {
    if (paused) {
        paused = false;
        startPauseButton.textContent = 'Pause';
        startPauseButton.classList.remove('bg-blue-400');
        startPauseButton.classList.add('bg-green-500', 'hover:bg-green-600');

        timerInterval = setInterval(function () {
            timeElapsed++;
            display.textContent = formatTime(timeElapsed);
        }, 1000); // Increment every second
    } else {
        paused = true;
        clearInterval(timerInterval);
        startPauseButton.textContent = 'Continue';
        startPauseButton.classList.remove('bg-green-500', 'hover:bg-green-600');
        startPauseButton.classList.add('bg-blue-400', 'hover:bg-blue-500');
    }
});

// Clear the stopwatch
clearButton.addEventListener('click', function () {
    paused = true;
    clearInterval(timerInterval);
    timeElapsed = 0;
    display.textContent = '00:00:00';
    startPauseButton.textContent = 'Start';
    startPauseButton.classList.remove('bg-blue-400');
    startPauseButton.classList.add('bg-green-500', 'hover:bg-green-600');
});
