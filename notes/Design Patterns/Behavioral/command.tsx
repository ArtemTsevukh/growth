// Command is behavioral design pattern that converts requests or simple operations into objects.

// The conversion allows deferred or remote execution of commands, storing command history, etc.

// the television class
export class Television { 
    state: boolean = false;
  
    on() {
      this.state = true;
    }
  
    off() {
      this.state = false;
    }
  }
  
  // the command interface
  interface Command { 
    execute(): any;
    undo(): any;
  }
  
  // the televisiononcommand is a concrete implementation of the command interface
  class TelevisionOnCommand implements Command {
    television: Television;
  
    constructor(television: Television) {
      this.television = television;
    }
  
    execute() {
      this.television.on();
    }
  
    undo() {
      this.television.off();
    }
  }
  
  // the televisionoffcommand is a concrete implementation of the command interface
  class TelevisionOffCommand implements Command {
    television: Television;
  
    constructor(television: Television) {
      this.television = television;
    }
  
    execute() {
      this.television.off();
    }
  
    undo() {
      this.television.on();
    }
  }
  
  // the remote in this case is the caller
  class Remote {
    onCommand: Command;
    offCommand: Command;
  
    setCommand(onCommand, offCommand) {
      this.onCommand = onCommand;
      this.offCommand = offCommand;
    }
  
    onButtonClick() {
      this.onCommand.execute();
    }
  
    offButtonClick() {
      this.offCommand.execute()
    }
  }
  
  
  let television = new Television();
  let televisionOnCommand = new TelevisionOnCommand(television);
  let televisionOffCommand = new TelevisionOffCommand(television);
  let remote = new Remote();
  
  remote.setCommand(televisionOnCommand, televisionOffCommand);
  
  console.log('state of television before remote is used:', television.state);
  remote.onButtonClick();
  console.log('state of television after remote is used:', television.state);

// OUTPUT:
// state of television before remote is used: false
// state of television after remote is used: true