module.exports = function reverse (n) {
    return n >= 0
    ? `${n}`.split('').reverse().join('')
    : (`${-n}`.split('').reverse().join(''))
    
}
