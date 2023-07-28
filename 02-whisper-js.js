require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

async function createTranscription(audioFile) {
  const resp = await openAi.createTranscription(
    fs.createReadStream(audioFile),
    "whisper-1"
  );
  return resp.data.text;
}

async function getAudioText() {
  try {
    const transcription = await createTranscription("audio/whisper-model.m4a");
    console.log(transcription);
  } catch (e) {
    console.log(e);
  }
}

getAudioText();


//   Demo Test for Audio to Text result
// Hello World,你好,PDF,这里是发现资源,在找家庭,Homepage,Hello Ghost