const loadAlbums = function (artist) {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q="+artist, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8922e7eb38msha406b3662407a30p14661djsn13118198de68",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
        .then(response => response.json())
        .then(apiResponse => {

            let songs = apiResponse.data;

            let albumDiv = document.querySelector("#v-pills-home>div");

            // ROW TITLE
            let rowTitle = document.createTextNode("#TGIFRIDAY");
            let rowTitleDiv = document.createElement("div");
            rowTitleDiv.classList.add(
                "row",
                "row-cols-6",
                "row-cols-md-6",
                "row-cols-lg-6",
                "row-cols-xl-6"
            );
            albumDiv.appendChild(rowTitleDiv);
            let rowTitleCol = document.createElement("div");
            rowTitleCol.classList.add("col");
            rowTitleDiv.appendChild(rowTitleCol);
            let rowTitleH1 = document.createElement("h1");
            rowTitleH1.appendChild(rowTitle);
            rowTitleCol.appendChild(rowTitleH1);

            //ALBUM ROW
            let albumRow = document.createElement("div");
            albumRow.classList.add(
                "row",
                "row-cols-1",
                "row-cols-sm-2",
                "row-cols-md-3",
                "row-cols-lg-4",
                "row-cols-xl-6"
            );
            //albumRow.setAttribute(("style", "overflow-x: scroll; overflow-y: scroll; white-space: nowrap;"))
            albumDiv.appendChild(albumRow);

              //albumsLocal = JSON.parse(localStorage.getItem("albums"));
            for (let i = 0; i < 6; i++) {
                let song = songs[i];
    let albumCol = document.createElement("div");
    albumCol.classList.add("col");
    albumCol.innerHTML += `<div class="card mx-auto" style="width: 15 rem; display:inline block">
                              <a href="album.html?${song.album.title}"
                                ><img src="${song.album.cover_big}" class="card-img-top" alt="..."
                              />
                              <div class="play-btn rounded-pill"></div>
                              </a>
                            </div>
                            <h6 class="card-title"><strong>${song.title}</strong></h6>
                            <h6><strong>${song.artist.name}</strong></h6>
                          </div>`;
    albumRow.appendChild(albumCol);
  }
})
	
.catch(err => {
	console.error(err);
});

}