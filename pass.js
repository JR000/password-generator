const argv = process.argv

let sources = {
    'l': "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    'd': "0123456789",
    "c": "абвшдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
    "s": "`~!@#$%^&*()_+-='\\\"|/.?,",
}
const sourcesKeys = Object.keys(sources)

let length = 20
let charset = ""
let template = ""

let lengthAccessed = false

for (let arg of argv) {
    let dashIndex = arg.indexOf('-');
    if (dashIndex == 0 || dashIndex == 1) {
        let flagChars = arg.slice(dashIndex + 1, arg.length)?.toLowerCase().split('')
        let badFlag = false

        for (let char of flagChars) {
            if (sourcesKeys.indexOf(char) == -1) {
                badFlag = true
                break
            }
        }
        if (!badFlag) {
            flagChars.forEach(c => template += c)
        }
    } else if (!lengthAccessed) {
        const value = parseInt(arg)
        if (!isNaN(value)) {
            length = value
            lengthAccessed = true
        }
    }
}

if (!template.length) {
    template = 'ld'
}

for (let k of template) {
    charset += sources[k]
}

var retVal = ""
for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
}

console.log(retVal)