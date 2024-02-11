import allMusics from './musics';
import Audio from './musics';


let audioElement = new Audio('./musics');
const progressBar = document.querySelector('#progressBar');
const play_pause = document.querySelectorAll('.playPause');
let input = document.getElementsByTagName('input')[0];
let playback = document.querySelector('.played');
let duration = document.querySelector('.duration');
const bar = document.querySelector('.bar-progress');
let fullDuration;
let currentTime;
let progress = null;
let list = false;
let root = '/musics';
let coverRoot = './covers';
const allMusics = document.querySelector('.items');
let newaudio = new Audio();

let editAudio = [
  {
    title: 'Sille',
    url: `${root}/Rıza KONYALI Sille.mp3`,
    singer: 'Rıza Konyalı',
    cover: 'https://cdn.gokonya.com/other/sille-baraji-golu-secilen-3.jpg'
  }, {
    title: 'Kazanova',
    url: `${root}/Tosun At - Kazanova.mp3`,
    singer: 'Tosun At',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m68-MFbrXdBf-voWMDelW6bDHWlxuEYnGw&usqp=CAU'
  }, {
    title: 'Şu Silleden',
    url: `${root}/Rıza Konyalı - Şu Silleden (Official Audio).mp3`,
    singer: '-',
    cover: 'https://konyabulteni.com/wp-content/uploads/2020/03/MERAM-850x560.jpg'
  }, {
    title: 'Durnam Gelir Yata Kalka',
    url: `${root}/Orhan Hakalmaz - Durnam Gelir Yata Kalka _ Konya Türküleri.mp3`,
    singer: 'Orhan Hakalmaz',
    cover: 'https://konyakultur.gov.tr/images/uploads/images/Meram-ba__lari.jpg'
  }, {
    title: 'Hani Benim Elli Direm Kesdenem',
    url: `${root}/Olcay Köker - Hani Benim Elli Direm Kesdenem _ Konya Türküleri.mp3`,
    singer: 'Olcay Köker',
    cover: 'https://cdn.gokonya.com/other/meram-tavusbaba-hamamlari.jpg'
  }, {
    title: 'Konyalım',
    url: `${root}/Nadide Sultan - Konyalım Official Video.mp3`,
    singer: 'Nadide Sultan',
    cover: 'https://d.pusulahaber.com.tr/news/460623.jpg'
  }, {
    title: 'Kozandağı',
    url: `${root}/Kozandağı - Ramazan Koyuncu - [Offical Audio].mp3`,
    singer: 'Ramazan Koyuncu',
    cover: 'https://i.neredekal.com/i/neredekal/6073818aad45ec7fc62b91b3'
  }, {
    title: 'Konya Peşrevi',
    url: `${root}/Konya Peşrevi - Bülbül - Limo - Mehmet Çavuş - (Offical Audio).mp3`,
    singer: 'Mehmet Çavuş',
    cover: 'https://www.karamanhabercisi.com/d/news/80498.jpg'
  }, {
    title: 'Kar Yağar Saçaklara',
    url: `${root}/Kar Yağar Saçaklara.mp3`,
    singer: '-',
    cover: 'https://www.yenikonya.com.tr/uploads/2023/07/21/f203bfd5_big.jpg'
  }, {
    title: 'Bizim Evde Şeker, Lokum, Badem Var',
    url: `${root}/Bizim Evde Şeker, Lokum, Badem Var.mp3`,
    singer: '-',
    cover: 'https://www.meram.bel.tr/upload/medya/DJI_0700.jpg'
  }
];

editAudio.forEach((element, index) => {
  allMusics.innerHTML += 
    <li className="item">
      <img src="${element.cover}" alt="cover" />
      <h1 className="title">${element.title}</h1>
      <p className="singer">${element.singer}</p>
      <p className="time">
        <span className="duration">${initialTime(audioElement)}</span>
        <i className="fa-solid fa-play playPause event" id="${index}" title="play" style="margin-left: 12px;"></i>
      </p>
    </li>
  ;
});

const events = document.querySelectorAll('.event');
events.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    console.log(editAudio[elem.id]);
    audioElement.src = editAudio[elem.id].url;
    input.value = 0;
    document.getElementById('thumnail').src = editAudio[elem.id].cover;
    playPause();
  });
});

newaudio.src = elem.url;

function playPause() {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    console.log('clicked on play');
    play_pause.forEach(function (elem) {
      elem.addEventListener('click', playPause);
    });
  } else {
    audioElement.pause();
    console.log('clicked on pause');
    play_pause.forEach(function (elem) {
      elem.classList.replace('fa-pause', 'fa-play');
      elem.title = 'play';
    });
  }
}

function initialTime(target) {
  console.log(target.duration);
  let durMin = Math.floor(target.duration / 60);
  durMin = durMin > 9 ? durMin : `0${durMin}`;

  let durSec = Math.floor(target.duration % 60);
  durSec = durSec > 9 ? durSec : `0${durSec}`;

  fullDuration = `${durMin}:${durSec}`;
  if (list) {
    return fullDuration;
  } else {
    target.textContent = `00:00/${fullDuration}`;
  }
}

(function () {
  audioElement.addEventListener('loadeddata', function (e) {
    initialTime(playback);
    listDuration(duration);
  });

  play_pause.forEach(function (elem) {
    elem.addEventListener('click', playPause);
  });

  audioElement.addEventListener('timeupdate', function () {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
    bar.style.width = `${progress}%`;
    playBackUpdate();
  });

  progressBar.addEventListener('change', function (x) {
    audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
    audioElement.play();
    console.log(x);
  });

  audioElement.onended = function () {
    console.log('Song Ended');
  };

  function playBackUpdate() {
    let minute = Math.floor(audioElement.currentTime / 60);
    minute = minute > 9 ? minute : `0${minute}`;

    let second = Math.floor(audioElement.currentTime % 60);
    second = second > 9 ? second : `0${second}`;

    let durMin = Math.floor(audioElement.duration / 60);
    durMin = durMin > 9 ? durMin : `0${durMin}`;

    let durSec = Math.floor(audioElement.duration % 60);
    durSec = durSec > 9 ? durSec : `0${durSec}`;

    currentTime = `${minute}:${second}`;
    fullDuration = `${durMin}:${durSec}`;
    playback.textContent = `${currentTime}/${fullDuration}`;
  }

  function listDuration(elem) {
    list = true;
    initialTime(elem);
    list = false;
  }

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
      playPause();
    }
  });

  function durationLeft(elem) {
    let timeLeft = elem.duration - elem.currentTime;
    let leftMin = Math.floor(timeLeft / 60).toFixed();
    leftMin = leftMin > 9 ? leftMin : `0${leftMin}`;

    let leftSec = Math.floor(timeLeft % 60).toFixed();
    leftSec = leftSec > 9 ? leftSec : `0${leftSec}`;

    return `${leftMin}:${leftSec}`;
  }
})();
