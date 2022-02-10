// Complete Day 1 goals here
class songs{
  constructor(title, artist, image, link){
    this.title = title;
    this.artist = artist;
    this.image = image;
    this.link = link;
  }
  
  
}
let songArray = ["Miss Cleo", "Mission To the Loot", "Love Sosa", "Vamp Anthem", "DRACO", "Sky", "Homecoming", "Jesus Walks", "Touch the Sky", "Good Morning", "HORRIBLE!", "Maze", "Who Shot Cupid?"]
function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
