import { Generator, casex } from "battlecry";

export default class ModelGenerator extends Generator {
  config = {
    generate: {
      args: "name ...props",
      description: "Create model DAO and VO"
    }
  };

  get folder() {
    return "dao/";
  }

  get typedProps() {
    return this.args.props.map(prop => {
      let [name, type] = prop.split(":");
      if (!type) type = "string";

      return { name, type: casex(type, "NaMe") };
    }).reverse();
  }

  generate() {
    this.template("*DAO*").saveAs(this.folder, this.args.name);

    const voTemplate = this.template("*VO*");

    this.typedProps.forEach(({ name, type }) => {
      voTemplate.after("public class", [
        "    @Property",
        `    private ${type} _naMe_;`,
        ""
      ], name);

      voTemplate.after('// Getters & Setters', [
        `    public ${type} get_NaMe_() {`,
        '        return this._naMe_;',
        '    }',
        '',
        `    public void set_NaMe_(${type} _naMe_) {`,
        '        this._naMe_ = _naMe_;',
        '    }',
        ''
      ], name)
    });

    voTemplate.saveAs(this.folder, this.args.name);
  }
}
