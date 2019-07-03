const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outLine = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');


    const sounds = document.querySelectorAll('.sound-picker button');

    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');

    const outLinelength = outLine.getTotalLength();

    let fakeDuration = 600;

    outLine.style.strokeDasharray = outLinelength;
    outLine.style.strokeDashoffset = outLinelength;


    play.addEventListener('click', () =>{
        checkPlaying(song);
    });

    timeSelect.forEach(option => {
        option.addEventListener("click", function() {
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
                fakeDuration % 60
            )}`;
        });
    });

    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        }else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }

    }

    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        let progress = outLinelength - (currentTime / fakeDuration) * outLinelength;
        outLine.style.strokeDashoffset = progress;


        timeDisplay.textContent = `${minutes}:${seconds}`;

        if (currentTime >= fakeDuration) {
            
        }

    }

};

app();