const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller)

ffmpeg('videos/video.mp4',{timeout:432000}).addOptions([
   '-hls_time 10',
]).output('videos/output.m3u8').on('end',()=>{
    console.log('end')
}).run()