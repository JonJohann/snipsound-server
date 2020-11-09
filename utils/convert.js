const { exec } = require("child_process");

const convertCafToMp3 = (filename) => {
    const convertCommand = "ffmpeg -i uploads/" + filename + ".caf  -hide_banner -ac 1 uploads/" + filename + ".mp3"
    const removeCommand = "rm uploads/" + filename + ".caf"
    const  convert = exec((convertCommand+ " && " + removeCommand))
    convert.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    convert.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
    });

    convert.on('error', (error) => {
        console.log(`error: ${error.message}`);
    });

    convert.on("close", code => {
        console.log(`child process exited with code ${code}`);
    });

}

module.exports = convertCafToMp3