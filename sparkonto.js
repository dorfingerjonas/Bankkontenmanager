const Bankkonto = require('./bankkonto');

class Sparkonto extends Bankkonto {
    constructor(name, zinsSatz, anfangsBestand) {
        super(name, anfangsBestand);
        this.zinsSatz = zinsSatz;
    }

    zinsenAnrechnen() {
        this._kontoStand *= this.zinsSatz / 100 + 1;
    }
}

module.exports = Sparkonto;