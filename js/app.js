

let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');



let json_url="movieDetail.json";

fetch(json_url).then(Response => Response.json())
.then((data) =>{
    data.forEach((element,i) => {
        let {name, imdb, date, fposter,bposter,genre, type} = element;
        let card=document.createElement('a');
        card.classList.add('card');
        card.innerHTML=`
        <img src="${fposter}" class="poster" alt="${name}"/>
        <div class="rest_card">
            <img src="${bposter}" alt=""/>
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
            </div>
        </div>
        `
        cards.appendChild(card);
    });
    document.getElementById('title').innerText=data[0].name;
    document.getElementById('gen').innerText=data[0].genre;
    document.getElementById('date').innerText=data[0].date;
    document.getElementById('story').innerText=data[0].story;
    document.getElementById('movie_std').innerText=data[0].movie_studio;
    document.getElementById('rate').innerHTML=`<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`

    data.forEach((ele) => {
        let {name, imdb, date, fposter,bposter,genre, type} = ele;
        let card=document.createElement('a');
        card.classList.add('card')
        card.innerHTML=`<img src="${fposter}" alt="">
        <div class="cont">
            <h3>${name}</h3>
            <h6>${movie_studio}</h6>
            <p>${story}, ${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i> ${imdb}</p>
        </div>`
        search.appendChild(card);    
    });

    //serach filter
    search_input.addEventListener('keyup', ()=>{
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for (let index=0;index< a.length;index++)
        {
            let b=a[index].getElementsByClassName('cont')[0];
            let TextValue= b.textContent ||  b.innerText;
            if(TextValue.toUpperCase().indexOf(filter) > -1)
            {
                a[index].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            }
            else{
                a[index].style.display = "none";    
            }
            if(search_input.value==0)
            {
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
        }
    })
   let series=document.getElementById('series');
   series.addEventListener('click', ()=>{
    cards.innerHTML = ''
    let series_array = data.filter(ele =>{
        return ele.type === "series"
    }) 
   })
});



