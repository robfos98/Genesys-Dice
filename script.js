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
        $('article').each(function(index) {
            let x = Math.random();
            let s = "";
            switch($(this).attr('class')) {
                case "blue":
                    x *= 6;
                    if (x < 1) { s += "s";
                    } else if (x < 2) { s += "sa";
                    } else if (x < 3) { s += "aa";
                    } else if (x < 4) { s += "a";
                    };
                    break;
                case "black":
                    x *= 6;
                    if (x < 2) { s += "f";
                    } else if (x < 4) { s += "h";
                    };
                    break;
                case "green":
                    x *= 8;
                    if (x < 2) { s += "s";
                    } else if (x < 3) { s += "ss";
                    } else if (x < 5) { s += "a";
                    } else if (x < 6) { s += "sa";
                    } else if (x < 7) { s += "aa";
                    };
                    break;
                case "purple":
                    x *= 8;
                    if (x < 1) { s += "f";
                    } else if (x < 2) { s += "ff";
                    } else if (x < 5) { s += "h";
                    } else if (x < 6) { s += "hh";
                    } else if (x < 7) { s += "fh";
                    };
                    break;   
                case "yellow":
                    x *= 12;
                    if (x < 2) { s += "s";
                    } else if (x < 4) { s += "ss";
                    } else if (x < 5) { s += "a";
                    } else if (x < 8) { s += "sa";
                    } else if (x < 10) { s += "aa";
                    } else if (x < 11) { s += "t";
                    };
                    break;    
                case "red":
                    x *= 12;
                    if (x < 2) { s += "f";
                    } else if (x < 4) { s += "ff";
                    } else if (x < 6) { s += "h";
                    } else if (x < 8) { s += "fh";
                    } else if (x < 10) { s += "hh";
                    } else if (x < 11) { s += "d";
                    };
                    break;
                default: 
                    x = Math.floor(100 * x) + 1;
                    s += x;
                };
            $(this).children().eq(1).text(s);
        });
    });
});