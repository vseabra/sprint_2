"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScientistType = exports.Astronomer = exports.Engineer = exports.Mathematician = exports.ComputerScientist = exports.Scientist = void 0;
class Scientist {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    get contribution() {
        return this.bio;
    }
}
exports.Scientist = Scientist;
class ComputerScientist extends Scientist {
    constructor(id, name, bio) {
        super(id, name, bio);
    }
}
exports.ComputerScientist = ComputerScientist;
class Mathematician extends Scientist {
    constructor(id, name, bio) {
        super(id, name, bio);
    }
}
exports.Mathematician = Mathematician;
class Engineer extends Scientist {
    constructor(id, name, bio) {
        super(id, name, bio);
    }
}
exports.Engineer = Engineer;
class Astronomer extends Scientist {
    constructor(id, name, bio) {
        super(id, name, bio);
    }
}
exports.Astronomer = Astronomer;
var ScientistType;
(function (ScientistType) {
    ScientistType[ScientistType["ComputerScientist"] = 0] = "ComputerScientist";
    ScientistType[ScientistType["Mathematician"] = 1] = "Mathematician";
    ScientistType[ScientistType["Engineer"] = 2] = "Engineer";
    ScientistType[ScientistType["Astronomer"] = 3] = "Astronomer";
})(ScientistType || (ScientistType = {}));
exports.ScientistType = ScientistType;
