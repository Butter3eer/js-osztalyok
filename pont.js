// JS-ben is van lehetőség osztály definiálására, bár objektumokat enélkül is létre tudtunk eddig is hozni.
class Pont {
    // Privát adattagot #-el jelöljük.
    #x;
    #y;
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

    // get/set property létrehozása
    get x() {
        return this.#x;
    }

    set x(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#x = value;
        }
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#y = value;
        }
    }

    tavolsagAzOrigotol(p) {
        var a = p.x;
        var b = p.y;
        var c = Math.sqrt((a * a) + (b * b));
        return c;
    }

    static statikus_tavolsag(p1, p2) {
        if (p1.y < p2.y) {
            var b = p2.y - p1.y;
        }
        else{
            b = p1.y - p2.y;
        }
        if (p1.x < p2.x) {
            var a = p2.x - p1.x;
        }
        else{
            a = p1.x - p2.x;
        }
        var c = Math.sqrt((a * a) + (b * b));
        return c;
    }


    // getter/setter fügvény használata
    getX() {
        return this.#x;
    }

    setX(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#x = value;
        }
    }

    getY() {
        return this.#y;
    }

    setY(value) {
        if (value < 0) {
            alert("A program csak a jobbfelső síknegyedben lévő pontokat tudja kezelni")
        } else {
            this.#y = value;
        }
    }

    toString() {
        return `Pont{x = ${this.#x}, y = ${this.#y}}`;
    }
}

const pontok = [];

function hozzaAd() {
    const input_x = document.getElementById('input_x');
    const input_y = document.getElementById('input_y');
    const x = parseInt(input_x.value);
    const y = parseInt(input_y.value);
    pontok.push(new Pont(x, y));

    // konzolra táblázatos formában írja ki a lista tartalmát
    console.table(pontok);
}

for (var i = 0; i < pontok.length; i++){
    document.getElementById("origo").innerHTML = "A pont távolsága az origótól: " + tavolsagAzOrigotol(pontok[i]);
}
