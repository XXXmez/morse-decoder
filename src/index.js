const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    let arr = [...expr]
    let a1 = [];

    for (let i = 0; i < arr.length;) {
        let str = arr.splice(0,10).join('').replace(/^0+/, '').split('');
        //console.log(str);
        const array = []
        for(let j = 0; j < str.length;){
            let cl = str.splice(0,2).join('');
            if (cl == 11) {
                array.push('-')
            } else if (cl == 10) {
                array.push('.')
            }
        }
        a1.push(array.join(''))
        //console.log(a1);
    }

    a1.forEach(e => {
        //console.log(e);
        if (MORSE_TABLE[e]) {
            res += MORSE_TABLE[e]
        } else {
            res += ' ';
        }
    })

    console.log(res);
    return res;
}


module.exports = {
    decode
}