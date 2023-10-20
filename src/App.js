import NumberBaseballGame from "./NumberBaseballGame.js";

class App {
  async play() {
    const numberBaseballGame = new NumberBaseballGame();
    numberBaseballGame.start();
  }
}

const app = new App();
app.play();

export default App;
