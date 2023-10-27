module.exports = function reverse(n) {

    const number = n.toString()
    let i = number.length - 1

    let result = ''

    while (i >= 0) {
        if (number[i] === '-') {
            result = result
        } else {
            result = result + number[i]
        }
        i = i - 1
    }

    return Number(result)
}
