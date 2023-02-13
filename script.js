$(document).ready(() => {
    $(document).on('click', 'div', function () {
        $('main').append(
            `<article class="${$(this).attr('id')}">
                <span class="${$(this).children(":first").attr('class')} slate">${$(this).children(":first").text()}</span>
                <span class="${$(this).children().eq(1).attr('class')} fill-slate"></span>
            </article>`);
    }).on('click', 'article', function () {
        $(this).remove();
    }).on('click', 'button', function () {
        let scs = 0;
        let adv = 0;
        let tri = 0;
        let air = 0;
        let empty = true;
        $('article').each(function(index) {
            let x = Math.random();
            let s = "";
            switch($(this).attr('class')) {
                case "blue":
                    empty = false;
                    x *= 6;
                    if (x < 1) {s += "s"; scs++;
                    } else if (x < 2) { s += "sa"; scs++; adv++; 
                    } else if (x < 3) { s += "aa"; adv += 2;
                    } else if (x < 4) { s += "a"; adv++;
                    };
                    break;
                case "black":
                    empty = false;
                    x *= 6;
                    if (x < 2) { s += "f"; scs--;
                    } else if (x < 4) { s += "h"; adv--;
                    };
                    break;
                case "green":
                    empty = false;
                    x *= 8;
                    if (x < 2) { s += "s"; scs++;
                    } else if (x < 3) { s += "ss"; scs += 2;
                    } else if (x < 5) { s += "a"; adv++;
                    } else if (x < 6) { s += "sa"; scs++; adv++;
                    } else if (x < 7) { s += "aa"; adv += 2;
                    };
                    break;
                case "purple":
                    empty = false;
                    x *= 8;
                    if (x < 1) { s += "f"; scs--;
                    } else if (x < 2) { s += "ff"; scs -= 2;
                    } else if (x < 5) { s += "h"; adv--;
                    } else if (x < 6) { s += "hh"; adv -= 2;
                    } else if (x < 7) { s += "fh"; scs--; adv--;
                    };
                    break;   
                case "yellow":
                    empty = false;
                    x *= 12;
                    if (x < 2) { s += "s"; scs++;
                    } else if (x < 4) { s += "ss"; scs += 2;
                    } else if (x < 5) { s += "a"; adv++;
                    } else if (x < 8) { s += "sa"; scs++; adv++;
                    } else if (x < 10) { s += "aa"; adv += 2;
                    } else if (x < 11) { s += "t"; tri++; scs++;
                    };
                    break;    
                case "red":
                    empty = false;
                    x *= 12;
                    if (x < 2) { s += "f"; scs--;
                    } else if (x < 4) { s += "ff"; scs -= 2;
                    } else if (x < 6) { s += "h"; adv--;
                    } else if (x < 8) { s += "fh"; scs--; adv--;
                    } else if (x < 10) { s += "hh"; adv -= 2;
                    } else if (x < 11) { s += "d"; air++; scs--;
                    };
                    break;
                default: 
                    x = Math.floor(100 * x) + 1;
                    s += x;
                };
            $(this).children().eq(1).text(s);
        });
        let s = "";
        if (!empty) {
            if (scs > 0) {
                s += "<p>Success!</p>";
            } else {
                s += "<p>Failure.</p>";
            };
            if (adv > 0) {
                s += "<p>Advantage: " + adv + "</p>";
            } else if (adv < 0) {
                s += "<p>Disadvantage: " + (-adv) + "</p>";
            };
            if (tri > 0) {
                s += "<p>Triumph: " + tri + "</p>";
            };
            if (air > 0) {
                s += "<p>Despair: " + air + "</p>";
            };
        };
        $('section').empty();
        $('section').append(s);
    });
});