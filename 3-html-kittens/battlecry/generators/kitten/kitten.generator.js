import { Generator, namedCasex } from 'battlecry';

export default class KittenGenerator extends Generator {
  config = {
    add: {
      args: 'name',
      options: {
        picture: { description: 'Picture number' }
      }
    }
  };

  get image() {
    return Math.round(Math.random() * 4) + 1;
  }

  add() {
    const newContent = namedCasex(
      this.template().replaceText('@image', this.image).text,
      this.args.name
    );

    this.file('index.html')
      .after('class="kittens"', newContent)
      .save();
  }
}
