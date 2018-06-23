import { Generator } from "battlecry";

export default class BasketGenerator extends Generator {
  config = {
    order: {
      args: "customer",
      description: "Order a basket with fruits"
    }
  };

  order() {
    this.template().saveAs(`orders/`, this.args.customer);
  }
}
