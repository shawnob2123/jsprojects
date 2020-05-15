let musicArtists = [];

function addArtists() {

    
    let newMusicArtists = document.getElementById('artists').value
    musicArtists.push(newMusicArtists);
    

    document.getElementById('artists').value = "";

    localStorage.setItem('mArtists', JSON.stringify(musicArtists));

    let oldMusicArtists = JSON.parse(localStorage.getItem('mArtists'));
    console.log(oldMusicArtists);
    
    
    let artists = '<ul style= "list-style-type:none;">';

    for (let i = 0; i < musicArtists.length; i++) {
        artists = artists + `<li>${musicArtists[i]}</li>`;
        
    }
    artists = artists + `</ul>`;

    document.getElementById('artistNames').innerHTML = artists;
}





