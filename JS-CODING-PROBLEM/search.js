const lyrics = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';

const searchString = 'Book';
// const lyricsLowerCase = lyrics.toLowerCase();
// const doesExit = lyricsLowerCase.includes(searchString);
const result = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(result);
console.log(lyrics.indexOf('book'));

if (lyrics.indexOf('book') != -1) {
    console.log('Exit');
}
else {
    console.log('Does not Exits');
}