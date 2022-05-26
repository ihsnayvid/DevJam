const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': 'c109968898msh779b1aadd0374acp10f942jsn1368de5620cb'
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
    const title = song.data[0].title_short;
    const artist = song.data[0].artist.name;
    const img = song.data[0].album.cover_medium;
    const albumTitle = song.data[0].album.title;

    str = `
        <div class="card" style="width: 18rem; margin-right: 20px; position:relative;">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <p class="card-text">
                <b>Title:</b> ${title} <br>
                <b>Artist:</b> ${artist} <br>
                <b>Album:</b> ${albumTitle} <br>
                </p>
            </div>
            <div id="play">
              <a href="https://open.spotify.com/search/${title}" class="btn btn-outline-primary" role="button" target ="_blank">Click to Play !</a>
            </div>            
        </div>
    `
    main.innerHTML = str;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData(search.value);
})