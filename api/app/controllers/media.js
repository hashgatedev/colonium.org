
const fs = require('fs');
const axios = require('axios');
const env = require('dotenv');

env.config();

const mediaFolderPath = './cache/media';
const mediaInfoFolderPath = `${mediaFolderPath}/info`;
const apiKey = process.env.GOOGLE_API_KEY;

if (!fs.existsSync(mediaFolderPath)) {
  fs.mkdirSync(mediaFolderPath, { recursive: true });
}

if (!fs.existsSync(mediaInfoFolderPath)) {
  fs.mkdirSync(mediaInfoFolderPath, { recursive: true });
}


const getVideoList = async (req, res, next) => {
  const channelId = 'UCPWdhqeykTob6bgzEhjnKKg';

  let mediaList;
  try {
    mediaList = JSON.parse(fs.readFileSync(`${mediaFolderPath}/${channelId}.json`, 'utf8').toString());
  } catch (err) { }

  if (!mediaList || mediaList.date < new Date().getTime() - 1000 * 60 * 60 ) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&order=date&type=video&key=${apiKey}`;
    mediaList = await axios.get(url).then((res) => {
      if (!res || !res.data) throw res;
      res.data.date = new Date().getTime();
      fs.writeFileSync(`${mediaFolderPath}/${channelId}.json`, JSON.stringify(res.data), 'utf8');
      return res.data;
    }).catch((err) => {
      console.log(err);
      return err && err.message ? err.message : err;
    });
  }
  res.status(200).json({ result: mediaList })
}

function extractVideoId(parameter) {
  const videoIdRegex = /^[A-Za-z0-9_-]{11}$/;
  const match = parameter.match(videoIdRegex);

  if (match) {
    return match[0];
  }

  return null;
}

const getVideoInfo = async (req, res, next) => {
  const videoId = extractVideoId(req.params.id);
  if (!videoId){
    res.status(401).json({ error: 'Video ID is not valid!' })    
    return;
  }

  let mediaInfo;
  try {
    mediaInfo = JSON.parse(fs.readFileSync(`${mediaInfoFolderPath}/${videoId}.json`, 'utf8').toString());
  } catch (err) { }

  if (!mediaInfo) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;
    mediaInfo = await axios.get(url).then((res) => {
      if (!res || !res.data) throw res;
      res.data.date = new Date().getTime();
      fs.writeFileSync(`${mediaInfoFolderPath}/${videoId}.json`, JSON.stringify(res.data), 'utf8');
      return res.data;
    }).catch((err) => {
      console.log(err);
      return err && err.message ? err.message : err;
    });
  }
  res.status(200).json({ result: mediaInfo })
}



module.exports = {
  getVideoList,
  getVideoInfo,
};
