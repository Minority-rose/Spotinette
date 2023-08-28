const textToSpeech = require('@google-cloud/text-to-speech');
const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
const cors = require('cors');
const port = 3333;
const client = new textToSpeech.TextToSpeechClient();

app.use(cors());
app.use(express.json());

app.post('/createAudio', async (req, res) => {
  try {
    const text = req.body.text;
    const request = {
      input: { text: text },
      voice: { languageCode: 'fr-FR', name: 'fr-FR-Neural2-B', ssmlGender: 'MALE' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    res.send(response.audioContent);
} catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log('Server is now listening at port ' + port);
});
