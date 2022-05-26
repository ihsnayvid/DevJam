const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'bd6a5c035dmsh03229b43c404b35p1bc1abjsnc6f328f24133'
	}
};

search = document.getElementById("search");
main = document.getElementById("main");
form = document.getElementById("form");

async function getData(song){
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`;

    const res = await fetch(url,options);
    const data = await res.json();
    // console.log(data);
    showData(data);
}

function showData(song){
    console.log(song);
    console.log(song.data[0]);
    main.innerHTML='';
   for(let i=0;i<10;i++) 
   {
    const title = song.data[i].title_short;
    const artist = song.data[i].artist.name;
    const img = song.data[i].album.cover_medium;
    const albumtitle = song.data[i].album.title;
    let x = albumtitle.length > 23 ? albumtitle.slice(0,23)+"..." : albumtitle;

    const el= document.createElement("div");
    const str = `
        <div class="card" style="width: 18rem; margin: 20px; position:relative;">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <p class="card-text">
                <b>Title:</b> ${title} <br>
                <b>Artist:</b> ${artist} <br>
                <b>Album:</b> ${x} <br>
                </p>
            </div>
            <div id="play">
              <a href="https://open.spotify.com/search/${title}" class="btn btn-outline-primary" role="button" target ="_blank">Click to Play !</a>
            </div>            
        </div>
    `
    el.innerHTML=str;
    main.appendChild(el);
}
}
// const title = song.data[0].title_short;
// const artist = song.data[0].artist.name;
// const img = song.data[0].album.cover_medium;
// const albumTitle = song.data[0].album.title;

// str = `
//     <div class="card" style="width: 18rem; margin-right: 20px; position:relative;">
//         <img src="${img}" class="card-img-top" alt="${title}">
//         <div class="card-body">
//             <p class="card-text">
//             <b>Title:</b> ${title} <br>
//             <b>Artist:</b> ${artist} <br>
//             <b>Album:</b> ${albumTitle} <br>
//             </p>
//         </div>
//         <div id="play">
//           <a href="https://open.spotify.com/search/${title}" class="btn btn-outline-primary" role="button" target ="_blank">Click to Play !</a>
//         </div>            
//     </div>
// `
// main.innerHTML = str;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(search.value);
})

getData("top 50")