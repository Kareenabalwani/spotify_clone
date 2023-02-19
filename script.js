console.log("welcome to spotify!");

//initialize the variables
let songIndex=0;
let audioElements=new Audio('songs/2.mp3');
let masterPlay= document.getElementById("masterPlay");
let progressBar= document.getElementById("progressBar");
let gif= document.getElementById("gif");
let masterSong=document.getElementById('masterSong');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs=[
    {songName:"Dholida- LoveYatri",filepath:"songs/1.mp3",coverPath:"covers/sc1.jpeg"},
    {songName:"She move it like-Badshah",filepath:"songs/2.mp3",coverPath:"covers/sc2.jpeg"},
    {songName:"Kuch Khass hai",filepath:"songs/3.mp3",coverPath:"covers/sc3.jpeg"},
    {songName:"Rataan Lambiyaan-Shershah",filepath:"songs/4.mp3",coverPath:"covers/sc4.jpeg"},
    {songName:"Har Fun Maula",filepath:"songs/5.mp3",coverPath:"covers/sc5.jpeg"},
    
]


//for play and pause a song
masterPlay.addEventListener('click',()=>
{
    if(audioElements.paused || audioElements.currentTime<=0){
        audioElements.play();
         masterPlay.classList.remove("fa-play-circle");
         masterPlay.classList.add("fa-pause-circle");
         gif.style.opacity=1;
    }
    else{
         audioElements.pause();
         masterPlay.classList.remove("fa-pause-circle");
         masterPlay.classList.add("fa-play-circle");
         gif.style.opacity=0;
    }
});

//updating the progressbar
audioElements.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress=(audioElements.currentTime/audioElements.duration)*100; //currentTime=0;  /*this is the formula to connvert the current time in seconds
    //console.log(progress);
    progressBar.value=progress;


    
})

//when the progress bar changes like randomly we click on anywhere on progress bar
progressBar.addEventListener('change',()=>
    {
        audioElements.currentTime=(progressBar.value*audioElements.duration)/100;
    })



    //to change the songs names and thier respective cover images
    
    songItems.forEach(function(element,i) {
        console.log(element,i);
        element.getElementsByTagName("img")[0].src= songs[i].coverPath;
        element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
    })


   function  makeAllPlayIcon(element){
    Array.from(document.getElementsByClassName("songplayicon")).forEach(function(element)
    {
       element.classList.add('fa-play-circle'); 
    }
    )
   }


    Array.from(document.getElementsByClassName("songplayicon")).forEach(function(element)
    {
        element.addEventListener('click',function(e)
        {
            console.log(e.target);
            songIndex= parseInt(e.target.id);
            makeAllPlayIcon();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElements.src='songs/'+ songIndex +'.mp3'; 
            audioElements.currentTime= 0;
            audioElements.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSong.innerText=songs[songIndex-1].songName;
        })
    }
    )


    const a=document.getElementById('next');
     a.addEventListener('click', function()
    {
        if(songIndex>5){
            songIndex=1;
        }
        else{
    
            songIndex+=1;
        }
        // audioElements.src='songs'+songIndex+'.mp3';
        // audioElements.currentTime=0;
        // audioElements.play();
        // masterPlay.classList.remove('fa-play-circle');
        // masterPlay.classList.add('fa-pause-circle');
        // masterSong.innerText=songs[songIndex+1].songName;
        audioElements.src='songs/'+ songIndex+'.mp3';
        audioElements.currentTime= 0;
        audioElements.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSong.innerText=songs[songIndex-1].songName;
    })
    

    document.getElementById('previous').addEventListener('click',function()
    {
        if(songIndex<1){
            songIndex=5;
        }
        else{
            
            songIndex-=1;
        }
        audioElements.src='songs/'+ songIndex+'.mp3';
        audioElements.currentTime= 0;
        audioElements.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSong.innerText=songs[songIndex-1].songName;
    })
    