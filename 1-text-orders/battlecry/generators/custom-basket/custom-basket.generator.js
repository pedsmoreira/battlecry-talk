import { Generator } from 'battlecry';

const DEFAULT_FRUITS = ['banana', 'apple', 'orange'];

export default class CustomBasketGenerator extends Generator {
  config = {
    order: {
      args: 'customer ...fruits?',
      description: 'Order a basket with chosen fruits'
    }
  }

  get fruits() {
    return this.args.fruits || DEFAULT_FRUITS;
  }

  order() {
    const file = this.template();
    
    this.fruits.forEach(fruit => {
      const amount = Math.round(Math.random() * 10) + 2;
      file.append(`- ${amount} _na me_s`, fruit);
    });

    file.saveAs(`orders/`, this.args.customer);
  }
}
