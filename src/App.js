import Game from './Game.js';

class App {
  async play() {
    await new Game().play();
  }
}

new App().play();

export default App;
