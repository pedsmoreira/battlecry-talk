import { Generator } from "battlecry";

export default class AnswerGenerator extends Generator {
  config = {
    get: {
      description: 'Get an answer from the magic 8-ball'
    },
    generate: {
      args: "...text",
      description: "Add a new answer to the magic 8-ball"
    }
  };

  get() {
    const response = this.exec("python 8ball.py").toString();
    console.log();
    console.log(`Output from 8ball.py: ${response}`);
  }

  generate() {
    this.file('8ball.py')
      .after('answers = ', `  "${this.args.text.join(' ')}",`)
      .save()
  }
}
