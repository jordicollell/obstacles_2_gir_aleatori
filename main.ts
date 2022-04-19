let gir = false
let sonar = 0
cuteBot.motors(60, 60)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) * 0.65
    if (sonar > 2 && sonar < 20) {
        gir = Math.randomBoolean()
        if (gir) {
            cuteBot.motors(0, 60)
            basic.pause(randint(200, 500))
        } else {
            cuteBot.motors(60, 0)
            basic.pause(randint(200, 500))
        }
    }
    cuteBot.motors(60, 60)
})
