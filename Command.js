class Command {
  
  constructor(name, info){
    this.name = name;
    this.aliases = aliases || [];
    this.description = description;
    this.usage = usage;
    this.args = new Map();
  }

  execute( context, args ){
    throw new Error(`${this.name} doesn't have an execute method.`);
  }
}

module.exports = Command;