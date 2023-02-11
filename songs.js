var playlistArray=[]
var shuffle=false
var unlocked=false
const songs = [
  {
    key: 0,
    image_src: "images/side to side.jpg",
    name: "Side to side",
    artist: "Ariana grande",
    src: "songs/05. Side To Side (Feat. Nicki Minaj).mp3",
  },
  {
    key: 1,
    image_src: "images/animals.jpg",
    name: "Animals",
    artist: "Maroon 5",
    src: "songs/Maroon_5_-_Animals_(Lyrics)(256k).mp3"
  },
  {
    key: 2,
    image_src: "images/see you again.jpg",
    name: "See you again",
    artist: "Wiz khalifa",
    src: "songs/Wiz_Khalifa_-_See_You_Again_ft._Charlie_Puth_(Lyrics)(256k).mp3"
  },
  {
    key: 3,
    image_src: "images/counting stars.jpg",
    name: "Counting Stars",
    artist: "One republic",
    src: "songs/OneRepublic_-_Counting_Stars_(Lyrics)(256k).mp3"
  },
  {
    key: 4,
    image_src: "images/shape of you.jpg",
    name: "Shape of you",
    artist: "Ed sheeran",
    src: "songs/Ed_Sheeran_-_Shape_Of_You_(Lyrics)(256k).mp3"
  },
  {
    key: 5,
    image_src: "images/starboy.jpg",
    name: "Starboy",
    artist: "The weekend",
    src: "songs/The_Weeknd_-_Starboy_(Lyrics)_ft._Daft_Punk(256k).mp3"
  },
  {
    key: 6,
    image_src: "images/six days.jpg",
    name: "Six Days(F&F)",
    artist: "Dj Shadow",
    src: "songs/Six_Days_(Remix)(128k).m4a"
  },
  {
    key: 7,
    image_src: "images/play date.jpg",
    name: "Play Date",
    artist: "Melanie martinez",
    src: "songs/Melanie_Martinez_-_Play_Date_(Lyrics)(256k).mp3"
  },
  {
    key: 8,
    image_src: "images/closer.jpg",
    name: "Closer",
    artist: "The chainsmokers",
    src: "songs/The_Chainsmokers_-_Closer_(Lyric)_ft._Halsey(256k).mp3"
  },
  {
    key: 9,
    image_src: "images/levitating.jpg",
    name: "Levitating",
    artist: "Dua lipa",
    src: "songs/Dua_Lipa_-_Levitating_(Lyrics)(256k).mp3"
  },
  {
    key: 10,
    image_src: "images/scars to your beautifull.jpg",
    name: "Scars to your beautiful",
    artist: "Alessia cara",
    src: "songs/Alessia_Cara_-_Scars_To_Your_Beautiful_(Lyrics)(256k).mp3"
  },
  {
    key:11,
    image_src: "images/bloody mary.jpg",
    name: "Bloody mary",
    artist: "Lady gaga",
    src: "songs/Lady_Gaga_-_Bloody_Mary(256k).mp3"
  },
  {
    key:12,
    image_src:"images/centuries.jpg",
    name: "Centuries",
    artist: "Fall out boy",
    src: "songs/Fall_Out_Boy_-_Centuries_(Lyrics)(256k).mp3"
  },
  {
    key:13,
    image_src: "images/cheap thrills.jpg",
    name: "Cheap thrills",
    artist: "Sia",
    src: "songs/Sia_-_Cheap_Thrills_(Lyrics)_ft._Sean_Paul(256k).mp3"
  },
  {
    key:14 ,
    image_src: "images/cradles.jpg",
    name: "cradles",
    artist: "Sub urban",
    src: "songs/Sub_Urban_-_Cradles_(Lyrics)(256k).mp3"
  },
  {
    key:15,
    image_src: "images/criminal.jpg",
    name: "Criminal",
    artist: "Britney spears",
    src: "songs/Britney_Spears_-_Criminal_(Lyrics)_Mama_I'm_in_love_with_a_CRIMINAL(256k).mp3"
  },
  {
    key:16,
    image_src: "images/dandelions.jpg",
    name: "Dandelions",
    artist: "Ruth B.",
    src: "songs/Ruth_B._-_Dandelions_(Lyrics)(256k).mp3"
  },
  {
    key: 17,
    image_src: "images/despacito.jpg",
    name: "Despacito",
    artist: "Luis fonsi",
    src: "songs/Despacito(128k).m4a"
  },
  {
    key:18,
    image_src: "images/doin' time.jpg",
    name: "Doin' time",
    artist: "Lana del rey",
    src: "songs/Lana_Del_Rey_-_Doin_Time_(Lyrics)(256k).mp3"
  },
  {
    key:19,
    image_src: "images/du du.jpg",
    name: "Du du",
    artist: "Black pink",
    src: "songs/du du.mp3"
  },
  {
    key:20,
    image_src: "images/Enemy.jpg",
    name: "Enemy",
    artist: "Imagine Dragons",
    src: "songs/Imagine_Dragons_&_JID_-_Enemy_(Lyrics)_oh_the_misery_everybody_wants_to_be_my_enemy(256k).mp3"
  },
  {
    key:21,
    image_src: "images/friends.jpg",
    name: "Friends",
    artist: "Anne-marie",
    src: "songs/Marshmello_&_Anne-Marie_-_FRIENDS_(Lyrics)(256k).mp3"
  },
  {
    key:22,
    image_src: "images/how you like that.jpg",
    name: "How you like that",
    artist: "Black pink",
    src: "songs/BLACKPINK_-__How_You_Like_That__M_V(256k).mp3"
  },
  {
    key:23,
    image_src: "images/mocking bird.jpg",
    name: "Mocking Bird",
    artist: "Eminem",
    src: "songs/Eminem_-_Mockingbird_(Lyrics)(256k).mp3"
  },
  {
    key:24,
    image_src: "images/night changes.jpg",
    name: "Night changes",
    artist: "one direction",
    src: "songs/One_Direction_-_Night_Changes(256k).mp3"
  },
  {
    key:25,
    image_src: "images/no.jpg",
    name: "No",
    artist: "Meghan trainor",
    src: "songs/Meghan_Trainor_-_No_(Lyrics)(256k).mp3"
  },
  {
    key:26,
    image_src: "images/one kiss.jpg",
    name: "One kiss",
    artist: "Dua lipa",
    src: "songs/Calvin_Harris,_Dua_Lipa_-_One_Kiss_(Lyrics)(256k).mp3"
  },
  {
    key:27,
    image_src: "images/pink venom.jpg",
    name: "Pink venom",
    artist: "Black pink",
    src: "songs/pink venom.mp3"
  },
  {
    key:28,
    image_src: "images/shootout.jpg",
    name: "Shootout",
    artist: "Izzamuzzic & Julien Marchal",
    src: "songs/Izzamuzzic_-_Shootout(256k).mp3"
  },
  {
    key:29,
    image_src: "images/shut down.jpg",
    name: "Shut down",
    artist: "Black pink",
    src: "songs/shut down.mp3"
  },
  {
    key:30,
    image_src: "images/1, 2, 3.jpg",
    name: "1,2,3 sofiya reyes hola",
    artist: "Sofia reyes",
    src: "songs/123 sofiya reyes.mp3"
  },
  {
    key:31,
    image_src: "images/superman.jpg",
    name: "Superman",
    artist: "Eminem",
    src: "songs/Superman(256k).mp3"
  },
  {
    key:32,
    image_src: "images/Toxic.jpg",
    name: "Toxic",
    artist: "Britney spears",
    src: "songs/Britney_Spears_-_Toxic_(Lyrics)(256k).mp3"
  },
  {
    key:33,
    image_src: "images/typa girl.jpg",
    name: "Typa girl",
    artist: "Black pink",
    src: "songs/BLACKPINK_-_‘Typa_Girl’_(Official_Audio)(256k).mp3"
  },
  {
    key:34,
    image_src: "images/unholy.jpg",
    name: "Unholy",
    artist: "Sam smith & kim petras",
    src: "songs/Sam_Smith_-_Unholy_ft._Kim_Petras(256k).mp3"
  },
  {
    key:35,
    image_src: "images/we dont talk anymore.jpg",
    name: "We don't talk any more",
    artist: "Charlie puth",
    src: "songs/Charlie_Puth_-_We_Don't_Talk_Anymore_(Lyrics)_feat._Selena_Gomez(256k).mp3"
  },
  {
    key:36,
    image_src: "images/without me.jpg",
    name: "Without me",
    artist: "Eminem",
    src: "songs/Eminem_-_Without_Me_(Lyrics)(128k).m4a"
  },
  {
    key:37,
    image_src: "images/Blank space.jpg",
    name: "Blank Space",
    artist: "Taylor swift",
    src: "songs/Taylor_Swift_-_Blank_Space_(Lyrics)(256k).mp3"
  },
  {
    key:38,
    image_src: "images/under the influence.jpg",
    name: "Under the influence",
    artist: "Chris brown",
    src: "songs/under_the_influence_x_i_was_never_there(256k).mp3"
  },
  {
    key:39,
    image_src: "images/princesses don't cry.jpg",
    name: "Princesses Don't cry",
    artist: "Aviva",
    src: "songs/Aviva_-_Princesses_Don’t_Cry_(Lyrics)(256k).mp3"
  },
  {
    key:40,
    image_src: "images/under the influence.jpg",
    name: "under the influence sped up",
    artist: "Chris brown",
  src:"songs/under the influence sped up.mp3"
  },
  {
    key:41,
    image_src: "images/build a bitch.jpg",
    name: "Build a bitch",
    artist: "Bella poarch",
  src:"songs/Bella_Poarch_-_Build_a_B_tch__Lyrics_(128k).m4a"
  },
  {
    key:42,
    image_src: "images/inferno.jpg",
    name: "Inferno",
    artist: "Sub urban & bella poarch",
  src:"songs/Sub_Urban_&_Bella_Poarch_-_INFERNO_(Lyrics)(128k).m4a"
  },
  {
    key:43,
    image_src: "images/we own it.jpg",
    name: "We own it(F&F)",
    artist: "2 chainz",
  src:"songs/we own it.m4a"
  },
  {
    key:44,
    image_src: "images/stay with me.jpg",
    name: "真夜中のドア/Stay With Me",
    artist: "松原みき",
  src:"songs/stay with me.m4a"
  },
  {
    key:45,
    image_src: "images/shut my moms calling.jpg",
    name: "Shutup my moms calling",
    artist: "Hotel ugly",
  src:"songs/Shut_up_My_Moms_Calling_(Sped_up)(128k).m4a"
  },
  {
    key:46,
    image_src: "images/gone rose.jpg",
    name: "Gone",
    artist: "ROSE",
  src:"songs/Gone(128k).m4a"
  },
  {
    key:47,
    image_src: "images/there's nothing holid'n me back.jpg",
    name: "There's nothing holdi'n me back",
    artist: "Shawn mendes",
  src:"songs/There's_Nothing_Holdin'_Me_Back(128k).m4a"
  },
  {
    key:48,
    image_src: "images/call me maybe.jpg",
    name: "Call me maybe",
    artist: "Carly rae jepsen",
  src:"songs/Call_Me_Maybe(128k).m4a"
  },
  {
    key:49,
    image_src: "images/party in the usa.jpg",
    name: "Party in the U.S.A",
    artist: "Miley Cyrus",
  src:"songs/Party_In_The_U.S.A.(128k).m4a"
  },
  {
    key:50,
    image_src: "images/youth.jpg",
    name: "Youth",
    artist: "Troye Sivan",
  src:"songs/YOUTH(128k).m4a"
  },
  {
    key:51,
    image_src: "images/metamorphosis.jpg",
    name: "Metamorphosis",
    artist: "Interworld",
  src:"songs/METAMORPHOSIS(128k).m4a"
  },
  {
    key:52,
    image_src: "images/bad blood.jpg",
    name: "Bad blood",
    artist: "Taylor Swift",
  src:"songs/Bad_Blood(128k).m4a"
  },
  {
    key:53,
    image_src: "images/heart attack.jpg",
    name: "Heart attack",
    artist: "Demi Lovato",
  src:"songs/Heart_Attack(128k).m4a"
  }
]
//loading songs
var imgs=[]
var imgUrls=[]
songs.forEach(img=>{
  imgUrls.push(img.image_src)
  imgs.push(new Image())
})
for(i=0;i<imgUrls.length;i++){
  imgs[i].src=imgUrls[i]
}


var currentSong=-1
var length=songs.length//11
var i=0
let audio=new Audio
window.addEventListener('click',next())
function next(){
    if(shuffle==true){
      currentSong=Math.floor(Math.random()*songs.length)
    }
    var marqueeName = document.getElementById("marquee_name")
    var artistName = document.getElementById("artist")
    var image=document.getElementById("image")
    currentSong+=1
    if(currentSong<length)
    {  
      image.src=`${songs[currentSong].image_src}`
      marqueeName.innerHTML = songs[currentSong].name
      artistName.innerHTML = songs[currentSong].artist
      audio.src=songs[currentSong].src
      image.classList.add('slide-right-in')
          setTimeout(()=>{
            image.classList.remove('slide-right-in')
          },500)
          if(i==0){
            i++
            return
          }
          else{
            if(unlocked==true){
              audio.play()
            }
          }
          return
    }
    else{
        currentSong=0
        image.src=`${songs[currentSong].image_src}`
        marqueeName.innerHTML = songs[currentSong].name
        artistName.innerHTML = songs[currentSong].artist
        audio.src=songs[currentSong].src
        image.classList.add('slide-right-in')
        setTimeout(()=>{
          image.classList.remove('slide-right-in')
        },500)
        if(unlocked==true){
          audio.play()
        }
        return
    }   
}

function prev(){
    var marqueeName = document.getElementById("marquee_name")
    var artistName = document.getElementById("artist")
    var image=document.getElementById("image")
    if(unlocked==false){
      return
    }
    if(shuffle==true){
      currentSong=Math.floor(Math.random()*songs.length)
    }
    //press prev button on starting
    if(currentSong ===0)
    {
        currentSong=length-1
        image.src=`${songs[currentSong].image_src}`
        marqueeName.innerHTML = songs[currentSong].name
        artistName.innerHTML = songs[currentSong].artist
        audio.src=songs[currentSong].src
        image.classList.add('slide-left-in')
        setTimeout(()=>{
          image.classList.remove('slide-left-in')
        },500)
        audio.play()
        return
    }

    if(currentSong>0)
    {
        currentSong-=1
        image.src=`${songs[currentSong].image_src}`
        marqueeName.innerHTML = songs[currentSong].name
        artistName.innerHTML = songs[currentSong].artist
        audio.src=songs[currentSong].src
        image.classList.add('slide-left-in')
        setTimeout(()=>{
          image.classList.remove('slide-left-in')
        },500)
        audio.play()
        return
    }
}
//creating audio
audio.addEventListener("timeupdate",(e)=>{
if(audio.duration===e.target.currentTime){
  next();
}
})
function playlist(){
  const song_template=document.querySelector("[data-song-template]")
  songs.forEach(song=>
    {
            var playlist=document.querySelector("[data-song-playlist]")
            var card=song_template.content.cloneNode(true).children[0]
            var song_name=card.querySelector('.song-name')
            var artist_name=card.querySelector('.artist-name')
            song_name.innerHTML=song.name
            artist_name.innerHTML=song.artist
            playlist.append(card)
            playlistArray.push(card)
        })
}

function play_pause()
{
  console.log("entered")
    if(audio.paused){
      audio.play()
    }
    else{
      audio.pause()
    }
}
function mode(){
  var mode=document.querySelector(".mode")
  content=mode.innerHTML
  if(content==="repeat"){
    mode.innerHTML="repeat_one"
    audio.loop=true
    shuffle=false
  }
  if(content==="repeat_one"){
    mode.innerHTML="shuffle"
    audio.loop=false
    shuffle=true
  }
  if(content==="shuffle"){
    mode.innerHTML="repeat"
    audio.loop=false
    shuffle=false
  }
}
var n=0
function unlock(){
  let lock=document.querySelector(".lock")
  lock.style.opacity="0"
  if(n==0){
    audio.play()
    unlocked=true
    audio.loop=false
    n+=1
  }
}
