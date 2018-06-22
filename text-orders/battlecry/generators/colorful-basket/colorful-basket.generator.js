import { Generator } from "battlecry";

export default class ColorfulBasketGenerator extends Generator {
  config = {
    order: {
      args: "name",
      description: "Order a colorful basket with fruits",
      options: {
        color: { description: "Basket color", arg: "required" },
        stripeColor: { description: "Basket stripe color", arg: "required" }
      }
    }
  };

  get color() {
    return this.options.color || "red";
  }

  get stripeColor() {
    return this.options.stripeColor || "white";
  }

  order() {
    this.template()
      .replaceText("@color", this.color)
      .replaceText("@stripe", this.stripeColor)
      .saveAs(`orders/`, this.args.name);
  }
}
