interface UserText {
    formatText(): any
}
class Decorator implements UserText {
    input: UserText;

    constructor(input: UserText) {
        this.input = input;
    }

    formatText(): any {
        return this.input.formatText();
    }

}

class UserInput implements UserText {

    text!: string

    constructor(text: string) {
        this.text = text
    }

    formatText(): any {
        return this.text;
    }
}

class BoldTextDecorator extends Decorator {
    public formatText(): string {
        return super.formatText().bold();
    }
}
class ItalicsTextDecorator extends Decorator {
    public formatText(): string {
        return super.formatText().italics();
    }
}
class StrikeTextDecorator extends Decorator {
    public formatText(): string {
        return super.formatText().strike();
    }
}


// No Decoration
const text = new UserInput('Design Patter: Decorator Task')
console.log("Normal Text: ", text.formatText())
// Bold Decorated
const decorator1 = new BoldTextDecorator(text)
console.log("Bold Text: ", decorator1.formatText())
//Italic Decorated
const decorator2 = new ItalicsTextDecorator(text)
console.log("Italics Text: ", decorator2.formatText())
//Strike Decorated
const decorator3 = new StrikeTextDecorator(text)
console.log("Strike-through Text: ", decorator3.formatText())