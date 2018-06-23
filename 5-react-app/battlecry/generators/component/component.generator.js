// @flow

import { Generator } from 'battlecry';

export default class ComponentGenerator extends Generator {
  config = {
    generate: {
      args: 'name',
      description: 'Create a react component'
    }
  };

  get folder() {
    return `components/__Na/Me__/`;
  }

  generate() {
    this.templates().forEach(file => file.saveAs(this.folder, this.args.name));
  }
}
