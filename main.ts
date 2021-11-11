input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
	
})
