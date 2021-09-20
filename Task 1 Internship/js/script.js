//Hamburger menu
const Menubar = document.getElementById("menuitems");

menuitems.style.maxHeight ="0px";

function menutoggle(){
    if(menuitems.style.maxHeight =="0px")
    {
        menuitems.style.maxHeight ="220px";
    }
    else{
        menuitems.style.maxHeight ="0px";
    }
}


//carousel image slider
const btn = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.imageslide');
const contents = document.querySelectorAll('.content');

var slidenav = function(arr){
    btn.forEach((bt) => {
        bt.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
       content.classList.remove("active");
    });

    btn[arr].classList.add("active");
    slides[arr].classList.add("active");
    // contents[arr].classList.add("active");

}

btn.forEach((bt,i) =>{
    bt.addEventListener("click", () =>{
     slidenav(i);
    });
});


/***video slider***/
const next = document.getElementById('slideright');
const prev = document.getElementById('slideleft');
const track = document.querySelector('.slidertrack');
let videocontainerWidth = document.querySelector('.carousel_container').offsetWidth;

window.addEventListener('resize' , ()=>{
  videocontainerWidth = document.querySelector('.carousel_container').offsetWidth;
});

let ind = 0;

next.addEventListener('click' , ()=>{
   ind++;
   prev.classList.add('videoshow');
   track.style.transform = `translateX(-${ind * videocontainerWidth}px)`;
    
    
   if(track.offsetWidth - (ind * videocontainerWidth) < videocontainerWidth)
    {
       next.classList.add('videohide');
    }
}
);
   


prev.addEventListener('click' , ()=>{
  ind--;
  next.classList.remove('videohide');
  if (ind=== 0) {
    prev.classList.remove('videoshow');
  }
   track.style.transform = `translateX(-${ind * videocontainerWidth}px)`;

}
);

/***Life at zippy***/
let thumbnails = document.getElementsByClassName('thumbnail')

let activeimg = document.getElementsByClassName('active')

for (var i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover',function(){
        if(activeimg.length>0){
            activeimg[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('img1').src= this.src
    })
}

let btnright = document.getElementById('slideRight')
let btnleft = document.getElementById('slideLeft')



btnright.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})

btnleft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})