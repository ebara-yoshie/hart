radio.onReceivedNumber(function (receivedNumber) {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
    basic.clearScreen()
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
