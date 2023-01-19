document.getElementById('title').innerText=data[0].name;
document.getElementById('gen').innerText=data[0].genre;
document.getElementById('date').innerText=data[0].date;
document.getElementById('story').innerText=data[0].story;
document.getElementById('rate').innerHTML=`<span>IMDB</span><i class="bi bi-star-fill"></i> ${data[0].imdb}`

let json_url="movieDetail.json";

fetch(json_url).then(Response => Response.json())

data.forEach((ele) => {
    let {name, imdb, date, fposter,bposter,genre, type} = ele;
    let card=document.createElement('a');
    card.classList.add('card')
    card.innerHTML=` <div class="content">
    <h1 id="title"></h1>
    <p id="story"></p>
    <div class="details">
        <h6>${movie_std}</h6>
        <h5>${gen}</h5>
        <h4>${date}</h4>
        <h3>${rate}<img src="/Images/imdb.jpg"><i class="bi bi-star-fill"></i> 9.6</h3>
    </div>`
    search.appendChild(card);    
});
