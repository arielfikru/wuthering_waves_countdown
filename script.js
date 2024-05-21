const releaseDate = new Date(Date.UTC(2024, 4, 23, 7, 0, 0)); // Updated release date with 1 more day added

function updateCountdown() {
    const now = new Date();
    const timeDifference = releaseDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown-display').innerHTML = `
            THIS GAME HAS BEEN LAUNCHED, GO TO 
            <a href="https://play.google.com/store/apps/details?id=com.kurogame.wutheringwaves.global&hl=en_US&pli=1" target="_blank" class="text-blue-500 underline">
                Wuthering Waves on Google Play
            </a>
        `;
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown-display').innerHTML = `
        <div class="flex justify-center items-center space-x-4">
            <div class="text-center">
                <div class="text-4xl md:text-6xl font-bold">${days}</div>
                <div class="text-sm md:text-base">Days</div>
            </div>
            <div class="text-center">
                <div class="text-4xl md:text-6xl font-bold">${hours}</div>
                <div class="text-sm md:text-base">Hours</div>
            </div>
            <div class="text-center">
                <div class="text-4xl md:text-6xl font-bold">${minutes}</div>
                <div class="text-sm md:text-base">Minutes</div>
            </div>
            <div class="text-center">
                <div class="text-4xl md:text-6xl font-bold">${seconds}</div>
                <div class="text-sm md:text-base">Seconds</div>
            </div>
        </div>
    `;
}

function displayLocalReleaseTime() {
    const localReleaseDate = new Date(releaseDate);
    const options = { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = localReleaseDate.toLocaleDateString(undefined, options);

    document.getElementById('local-release-time').textContent = `Expected Wuthering Waves Release on your time ${formattedDate}`;
}

function cycleBackgrounds() {
    const backgrounds = document.querySelectorAll('.background-image');
    let currentIndex = Math.floor(Math.random() * backgrounds.length);

    function showNextBackground() {
        backgrounds[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % backgrounds.length;
        backgrounds[currentIndex].classList.add('visible');
    }

    setInterval(showNextBackground, 10000); // Change every 10 seconds
    showNextBackground(); // Initial call to display the first background
}

function adjustBlur() {
    const blurValue = document.getElementById('blur-slider').value;
    const backgrounds = document.querySelectorAll('.background-image');
    backgrounds.forEach(background => {
        background.style.filter = `blur(${blurValue}px) brightness(0.5)`;
    });
}

function adjustVignette() {
    const vignetteValue = document.getElementById('vignette-slider').value;
    const vignette = document.querySelector('.vignette');
    vignette.style.opacity = vignetteValue / 100;
}

function adjustCardOpacity() {
    const opacityValue = document.getElementById('card-opacity-slider').value;
    const cardContent = document.getElementById('card-content');
    cardContent.style.opacity = opacityValue / 100;
}

function toggleSettings() {
    const settingsSliders = document.getElementById('settings-sliders');
    if (settingsSliders.classList.contains('show')) {
        settingsSliders.classList.remove('show');
    } else {
        settingsSliders.classList.add('show');
    }
}

document.body.insertAdjacentHTML('beforeend', '<div class="vignette"></div>');

setInterval(updateCountdown, 1000);
updateCountdown();
displayLocalReleaseTime();
cycleBackgrounds();

document.getElementById('settings-icon').addEventListener('click', toggleSettings);
