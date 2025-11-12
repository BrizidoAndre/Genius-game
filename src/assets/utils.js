export function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


let audioContext = null;

export function initAndPlayBeep() {
    // Initialize the AudioContext on the first user interaction
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set parameters for a "danger" sound
    gainNode.gain.value = 0.5; // Volume (0 to 1)
    oscillator.frequency.value = 440; // Frequency in Hz (A4 note, can adjust for a harsher sound)
    oscillator.type = 'square'; // Waveform type (sine, square, sawtooth, triangle)

    oscillator.start(audioContext.currentTime);
    // Stop the sound after a short duration (e.g., 500ms)
    oscillator.stop(audioContext.currentTime + 0.2);
}
