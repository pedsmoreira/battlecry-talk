import { Generator } from 'battlecry';

export default class KittenGenerator extends Generator {
  config = {
    add: {
      args: 'name',
      description: 'Add a cool kitten picture',
      options: {
        picture: { description: 'Picture number' }
      }
    }
  };

  get image() {
    return Math.round(Math.random() * 4) + 1;
  }

  add() {
    const template = this.template().replaceText('@image', this.image);

    this.file('index.html')
      .after('class="kittens"', template.text, this.args.name)
      .save();
  }
}
