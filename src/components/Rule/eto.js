function slopeVaporPressure(temperature) { //delta
    return 0.00021501 * Math.pow(temperature, 2) -
        0.00025132 * temperature +
        0.061309
}

function saturationVaporPressure(temperature) { //Es
    return 7.167 * Math.pow(10, -5) * Math.pow(temperature, 3) +
        7.167 * Math.pow(10, -4) * Math.pow(temperature, 2) +
        0.061309 * temperature +
        0.57075
}

function actualVaporPressure(humidity, temperature) { //Ea
    return (saturationVaporPressure(temperature) * humidity) / 100
}

function soilHeatFluxDensity(netRadition) { // G
    return 0.1 * netRadition
}

function psychometricConstant(temperature) { // gamma
    return 1.005 * 101.3 / (0.622 * 2.51 - 0.00236 * temperature)
}

function windSpeedMPHToMS(windSpeedMPH) {
    return windSpeedMPH * 0.447
}

export const etoCalculate = (humidity, temperature, netRadition, windSpeed) =>{
    return (0.408 * slopeVaporPressure(temperature) * (netRadition - soilHeatFluxDensity(netRadition)) + psychometricConstant(temperature) * (900 / (temperature + 237)) * windSpeed * (actualVaporPressure(humidity, temperature) - saturationVaporPressure(temperature))) /
        (slopeVaporPressure(temperature) + psychometricConstant(temperature) * (1 + 0.34 * windSpeed))
}