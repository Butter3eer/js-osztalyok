class Pont {
    #x;
    #y;
    constructor (x, y) {
        this.#x = x;
        this.#y = y;
    }

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

    tavolsagAzOrigotol() {
        var a = this.#x;
        var b = this.#y;
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
    const pont = new Pont(x, y);
    pontok.push(pont);

    document.getElementById("origo").innerHTML = "A pont távolsága az origótól: " + pont.tavolsagAzOrigotol();
    
}

document.getElementById("hozzaad").addEventListener("click", kiir);

function kiir() {
    window.alert("Hello")
}