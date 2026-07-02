
// navigator.getUserMedia =
//   navigator.getUserMedia ||
//   navigator.webkitGetUserMedia ||
//   navigator.mozGetUserMedia;

// if (navigator.getUserMedia) {
//   navigator.getUserMedia(
//     { audio: true, video: { width: 1280, height: 720 } },
//     (stream) => {
//       const video = document.querySelector("video");
//       video.srcObject = stream;
//       video.onloadedmetadata = (e) => {
//         video.play();
//       };
//     },
//     (err) => {
//       console.error(`The following error occurred: ${err.name}`);
//     },
//   );
// } else {
//   console.log("getUserMedia not supported");
// }

function Media() {
}

Media.prototype.getMicrophoneStream = function() {
	try {
		return navigator.mediaDevices.getUserMedia({ audio: true });
	} catch (error) {
		console.error("Microphone access denied or failed:", error);
	}
}

Media.prototype.getDisplayAudioStream = function() {
	const displayStream = await navigator.mediaDevices.getDisplayMedia({
      video: true, // Most browsers require video:true to prompt the picker
      audio: {
        echoCancellation: false, // Turn off for clean application music
        noiseSuppression: false  // Prevents the browser from filtering out bass/synths
      }
    });
}