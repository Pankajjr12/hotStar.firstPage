let movies=[
    {
        name:"loki",
        des:
           "The mercurial villian Loki resumes his role as the God of Mischief in a series that takes place after Avengers: Endgame.",
        image:"Images/slider 1.png"
    },
    {
        name:"falcon and the winter soldier",
        des:
           "Following the event of Avengers : Endgame, Sam Wilson and Bucky Barnesteam up in a global adventure that tests their ability and their patience.",
        image:"Images/slider 2.png"
    },
    {
        name:"wanda vision",
        des:
           "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes.",
        image:"Images/slider 3.png"
    },
    {
        name:"alladin",
        des:
           "In this live-action of retelling of 19992 classic, Alladin and a power-hungry Grand Vizier vie for a magic lamp that can make their deepest wishes come true.",
        image:"Images/slider 4.png"
    },
    {
        name:"avengers: endgame",
        des:
           "After the devastating event of Infinity war the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
        image:"Images/slider 5.png"
    },
    {
        name:"jungle cruise",
        des:
           "A rollicking thrill ride down the Amazon with wisecracking skipper Frank Wolff and intrepeid researcher Dr. Lily Houghton.",
        image:"Images/slider 7.png"
    }
];



const carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;

const createSlide=()=>
{
    if(slideIndex>=movies.length)
    {
        slideIndex=0;
    }
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide); 
    
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className='slider';
    content.className='slider-content';
    h1.className='movie-title';
    p.className='movie-des';

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length-2)}px)`;
    }
};

for (let i=0;i<3;i++)
{
    createSlide();
}
setInterval(()=>{
    createSlide();
},6000);


const clipVideo = document.querySelectorAll('.video-card')
clipVideo.forEach(item =>{
item.addEventListener('mouseover', function (e) {
   let video=item.children[1];
    video.play();
})
item.addEventListener('mouseout', function (e) {
    let video=item.children[1];
    video.pause();
})
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let pBtn = [...document.querySelectorAll('.pre-btn')];
let nBtn = [...document.querySelectorAll('.nxt-btn')];


cardContainers.forEach((item,i)=>{
    let conDimension=item.getBoundingClientRect();
    let conWidth=conDimension.width;

    pBtn[i].addEventListener('click',()=>{
        item.scrollLeft += conWidth - 200;
    })
    nBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= conWidth + 200;
    })
})







