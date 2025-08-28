let sonido = 0
basic.forever(function () {
    sonido = input.soundLevel()
    basic.showNumber(sonido)
})
