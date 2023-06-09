const { desktopCapturer } = window.electron;
// const { Menu } = remote;
// Buttons
const videoElement = document.querySelector("video");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const videoSelectBtn = document.getElementById("videoSelectBtn");
videoSelectBtn.onclick = getVideoSources;

// Get the available video sources
async function getVideoSources() {
	console.log(desktopCapturer);
	const inputSources = await desktopCapturer.getSources({
		types: ["window", "screen"],
	});
	console.log(inputSources);
	// const videoOptionsMenu = Menu.buildFromTemplate(
	// 	inputSources.map((source) => {
	// 		return { label: source.name, click: () => selectSource(source) };
	// 	})
	// );
	// videoOptionsMenu.popup();
	// ipcRenderer.send("show-context-menu");
}
