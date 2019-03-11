class Duck {
    private name: string;
    constructor(theName: string) {
      this.name = theName;
    }

    cuack():void {
      console.log(
        `${this.name} says: I am a humanoid. I do not bow nor quack!`
      );
    }
}

let duck = new Duck("Donald");
duck.cuack();
// Donald says: I am a humanoid. I do not bow nor quack!
