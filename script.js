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

//fetching track list from API
async function getData(song){
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`;

    const res = await fetch(url,options);
    const data = await res.json();
    
    showData(data);
}

//function to show song details 
function showData(song){
    console.log(song);
    console.log(song.data[0]);
    main.innerHTML='';
    for(let i=0; i<12; i++){

        //fetching details of each track
        const title = song.data[i].title_short;
        let y = title.length > 20 ? title.slice(0,20) + "..." : title;
        const artist = song.data[i].artist.name;
        const img = song.data[i].album.cover_medium;
        const albumtitle = song.data[i].album.title;
        let x = albumtitle.length > 20 ? albumtitle.slice(0,20) + "..." : albumtitle;

        const el= document.createElement("div");
        const str = `
            <div class="card" style="width: 18rem; margin: 20px; position:relative;">
                <img src="${img}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <p class="card-text">
                    <b>Title:</b> ${y} <br>
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

//implementing search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(search.value);
})

//get default songs
getData("lofi");