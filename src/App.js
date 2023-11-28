import Game from './service/Game.js';

class App {
  async play() {
    await new Game().start();
  }
}

new App().play();

export default App;
