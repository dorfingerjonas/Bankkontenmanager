class Bankkonto {
    constructor(...params) {
        if (params.length > 2) {
            console.log('Too many params!');
        } else if (params.length === 1) {
            this.params[0] = name;
        } else {
            this.params[0] = name;
            this.params[1] = anfangsBestand;
        }
    }
}

module.exports = Bankkonto;