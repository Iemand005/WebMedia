
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
	async function getMicrophoneStream() {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			
			console.log("Microphone stream active:", stream);
			return stream;
		} catch (error) {
			console.error("Microphone access denied or failed:", error);
		}
	}
}