let gir = false
let sonar = 0
cuteBot.motors(60, 60)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) * 0.65
    if (sonar > 2 && sonar < 20) {
        gir = Math.randomBoolean()
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        if (gir) {
            cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
            cuteBot.motors(0, 60)
            basic.pause(randint(200, 500))
        } else {
            cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
            cuteBot.motors(60, 0)
            basic.pause(randint(200, 500))
        }
    }
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    cuteBot.motors(60, 60)
})
