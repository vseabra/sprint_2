interface IPerson {
  readonly id: number;
  name: string;
  bio: string;
}

class Scientist implements IPerson {
  public readonly id: number;
  public name: string;
  public bio: string;

  constructor(id: number, name: string, bio: string) {
    this.id = id;
    this.name = name;
    this.bio = bio;
  }

  public get contribution(): string {
    return this.bio;
  }
}

class ComputerScientist extends Scientist {
  constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }
}

class Mathematician extends Scientist {
  constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }
}

class Engineer extends Scientist {
  constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }
}

class Astronomer extends Scientist {
  constructor(id: number, name: string, bio: string) {
    super(id, name, bio);
  }
}

export { IPerson, Scientist, ComputerScientist, Mathematician, Engineer, Astronomer };
