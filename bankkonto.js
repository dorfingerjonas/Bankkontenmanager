class Bankkonto {

    constructor (name, anfangsBestand) {
        this._name = name;
        this._kontoStand = anfangsBestand || 0;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getKontoStand() {
        return this._kontoStand;
    }

    einzahlen(betrag) {
        this._kontoStand += betrag;
    }

    abheben(betrag) {
        this._kontoStand -= betrag;
    }
}

module.exports = Bankkonto;