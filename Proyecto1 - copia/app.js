let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementById('wave')

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('activel');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    } 
    else{
    music.pause();
    wave.classList.remove('activel');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    }
})


let popsongleft = document.getElementById('pop-song-left');
let popsongriht = document.getElementById('pop-song-right');
let popsong = document.getElementsByClassName('pop-song')[0];

popsongriht.addEventListener('click', () => {
    popsong.scrollLeft +=330;
});

popsongleft.addEventListener('click', () => {
    popsong.scrollLeft -=330;
});

let popartleft = document.getElementById('pop-art-left');
let popartgriht = document.getElementById('pop-art-right');
let Artistbx = document.getElementsByClassName('Artist-bx')[0];

popartgriht.addEventListener('click',() =>{
    Artistbx.scrollLeft +=330;
});
popartleft.addEventListener('click',() =>{
    Artistbx.scrollLeft -=330;
});