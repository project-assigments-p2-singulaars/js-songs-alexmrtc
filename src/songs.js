//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = [];
    array.map((song) => result.push(song.artist));
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result = array.filter((song) => song.artist === artist);

    return result
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    const maxSongs = 10;
    let currentSong = 1;

    let result = [];

    array.map((song) => {
        result.push(song.title);
        currentSong++;   
    });
    
    result.sort();

    return result.slice(0, maxSongs);
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let result = [];
    
    array.map((element) => {
        result.push(element)
    })

    result.sort((a, b) => {
        if(a.year > b.year){
            return 1
        };

        if(a.year < b.year){
            return -1
        };

        return a.title.localeCompare(b.title)
    });

    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    let result = [];

    result = array.filter((song) => song.genre.includes(genre))

    return result;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    let result = [];
    
    array.map((song) => {
        result.push(song);
    });

    console.log("Result: ", result)
    result.map((song) => {
        console.log("DURATION: ", typeof(song.duration));
        let separatedTimes = song.duration.split("min");
        let minutes = parseInt(separatedTimes[0]);
        let seconds = separatedTimes[1].trim().split("sec")[0];
        
        let durationInSeconds = (minutes * 60) + parseInt(seconds);

        song.duration = durationInSeconds;
        console.log(typeof(song.duration));
    })

    return result;
};

//Exercise 7: Get the longest song
function getLongestSong(array){
    let result = [];

    let secondsArray = minutsToSeconds(array);

    result = secondsArray.sort((a, b) => a.duration - b.duration);
    console.log("Result 7: ", result.splice(0, 1))


    return result;
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
