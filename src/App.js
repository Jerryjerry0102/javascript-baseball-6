import NumberBaseballGame from "./NumberBaseballGame.js";

class App {
  async play() {
    const numberBaseballGame = new NumberBaseballGame();
    await numberBaseballGame.play();
  }
}

export default App;
