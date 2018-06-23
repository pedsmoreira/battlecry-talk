import { Generator } from 'battlecry';

const DEFAULT_FRUITS = ['banana', 'apple', 'orange'];

export default class CustomBasketGenerator extends Generator {
  config = {
    order: {
      args: 'name ...fruits?',
      description: 'Order a basket with chosen fruits'
    }
  }

  get fruits() {
    return this.args.fruits || DEFAULT_FRUITS;
  }

  order() {
    const file = this.template();
    
    this.fruits.forEach(fruit => {
      const amount = Math.round(Math.random() * 2);
      const name = `_name_${amount > 1 ? 's' : ''}`;
      file.append(`- ${amount} ${name}`, fruit);
    });

    file.saveAs(`orders/`, this.args.name);
  }
}
