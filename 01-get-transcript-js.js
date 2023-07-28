const {YoutubeTranscript} = require("youtube-transcript")

async function getTranscript() {
    YoutubeTranscript.fetchTranscript('https://www.youtube.com/watch?v=T7RxnclkKTE').then(transcript => {console.log(transcript)}
    );
}

getTranscript()