const Bankkonto = require('./bankkonto');

class Girokonto extends Bankkonto {
    constructor(name, gebuehr, anfangsBestand) {
        super(name, anfangsBestand);
        this.gebuehr = gebuehr;
    }

    abheben(betrag) {
        this._kontoStand += betrag - this.gebuehr;
    }

    einzahlen(betrag) {
        this._kontoStand -= betrag + this.gebuehr;
    }
}

module.exports = Girokonto;