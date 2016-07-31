
/*
    * * * * * * * * * * * * * * * * * * * *
    > > > > > > TU AS ESSAYE SANS L'ACCENT ?
    * * * * * * * * * * * * * * * * * * * *
*/

Array.prototype.shuffle = function () {
    var j, x;
    for (var i = this.length; i; --i) {
        j = Math.floor (Math.random () * i);
        x = this[i - 1];
        this[i - 1] = this[j];
        this[j] = x;
    }
    return this;
}; // shuffle;

Array.prototype.fill = function (max) {
    for (var i = 1; i <= max; ++i) {
        this.push (i);
    }
    return this;
}; // initArray ();

$(document.body).ready (function () {
    var cartes = null;

    var creerCarte = function (value) {
        return $('<div class="carte"><span><span><em>' + value + '</em></span></span></div>');
    }; // creerCarte ();

    var sanitizeValue = function (value) {
        if ($.isNumeric (value)) {
            if (value >= 6 && value <= 99) {
                return parseInt (value);
            } else {
                throw new Error ('La valeur doit être un entier positif compris entre 6 et 99.');
            }
        } else {
            throw new Error ('La valeur saisie doit être un entier.');
        }
    }; // sanitizeValue ()

    var between = function (min, max) {
        return Math.floor (Math.random () * max) + min;
    }; // between ();

    var addRandomCarte = function () {
        if (cartes.length === 0) {
            throw new Error ('Il n\'y a plus de carte à piocher !');
        }
        var index = between (0, cartes.length);
        var carte = creerCarte (cartes[index]);

        $('#top').append (carte);
        $('#bottom').prepend (carte.clone ());

        cartes.splice (index, 1);
    }; // addRandomCarte ();

    var addRefreshButton = function () {
        button = $('<div class="inputs"><button>Refresher</button></div>');
        $('#bottom').prepend (button);
        button.on ('click', function (e) {
            e.preventDefault ();
            window.location.reload ();
        })
    }; // addRefreshButton ();

    $('#randomizer').on ('click', function (e) {
        e.preventDefault ();

        if (cartes !== null) {
            try {
                $('#top').find ('.carte').remove ();
                addRandomCarte ();
            } catch (e) {
                $('#top').remove ();
                alert (e.message);
                addRefreshButton ();
            }
        } else {
            var value = null;

            try {
                value = sanitizeValue ($('#value').val ());
            } catch (e) {
                alert (e.message);
                return;
            }

            cartes = [];
            cartes.fill (value).shuffle ();

            try {
                $('#value').remove ();
                addRandomCarte ();
            } catch (e) {
                alert (e.message);
            }
        }
    });
});
