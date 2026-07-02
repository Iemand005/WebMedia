
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

Media.prototype.getDisplayStream = function() {
	try {
		return navigator.mediaDevices.getDisplayMedia({
			video: true,
			audio: {
				echoCancellation: false,
				noiseSuppression: false
			}
		});
	} catch (error) {
		console.error("Display capture access denied or failed:", error);
	}
}