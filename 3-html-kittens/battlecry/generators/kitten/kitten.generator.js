import { Generator } from 'battlecry';

export default class KittenGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      options: {
        reversed: { description: 'Add the name reversed' }
      }
    }
  };

  generate() {
    this.templates().forEach(file => file.saveAs(`it-worked/kittens/`, this.args.name));
  }
}
