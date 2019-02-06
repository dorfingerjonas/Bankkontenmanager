const fs = require('fs');

const BankKonto = require('./bankkonto');
const SparKonto = require('./sparkonto');
const GiroKonto = require('./girokonto');

const GEBUEHR = 0.002;
const ZINSSATZ = 3.0;

const KONTENDATEI = 'erstellung.csv';
const BUCHUNGSDATEI = 'buchungen.csv';
const ERGEBNISDATEI = 'ergebnis.csv';

let konten = [];

erstelleKonten(KONTENDATEI);
//fuehreBuchungenDurch(BUCHUNGSDATEI);
//schreibeKontoStandInDatei(ERGEBNISDATEI);

function erstelleKonten(filename) {

    fs.readFile(filename, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.error(err.message);
        } else {
            let lines = data.split('\n');

            for (let i = 1; i < lines.length; i++) {

                let parts = lines[i].split(';');

                let konto = parts[0];
                let name = parts[1];
                let anfangsBetrag = parseFloat(parts[2]);

                if (konto === "Girokonto") {
                    konten.push(new GiroKonto(name, GEBUEHR, anfangsBetrag));
                } else if (konto === "Sparkonto") {
                    konten.push(new SparKonto(name, ZINSSATZ, anfangsBetrag));
                }
            }
        }
    });
}






