import { Generator } from "battlecry";

export default class BasketGenerator extends Generator {
  config = {
    order: {
      args: "name",
      description: "Order a basket with fruits"
    }
  };

  order() {
    this.template().saveAs(`orders/`, this.args.name);
  }
}
