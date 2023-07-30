// import Speech from 'speak-tts'
const Speech = require("speak-tts");

async function talk2Audio() {
  const speaker = new Speech();
  await speaker.init({
    voice: "en-US_AllisonVoice",
    volume: 1,
    rate: 1,
    pitch: 1,
    lang: "en-US",
  });

  speaker
    .speak({
      text: "Hello World,你好呀，这里是ABC Network",
    })
    .then(() => {
      console.log("Success !");
    })
    .catch((e) => {
      console.log("Error !", e);});
}

talk2Audio();
