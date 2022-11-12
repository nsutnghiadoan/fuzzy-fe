export const getRuleChart = (nameChart, ruleValue, xValue, yValue, xValue1) => {
    const listDataChart = [];
    switch (nameChart) {
        case 'eto' :
            GetETOArray(listDataChart, ruleValue);
            break;
        case 'moisture' :
            GetMoistureArray(listDataChart, ruleValue);
            break;
        case 'sowing' :
            GetSowingArray(listDataChart, ruleValue);
            break;
        case 'speed' :
            GetSpeedArray(listDataChart, ruleValue);
            break;
        default :
            break;
    }
    listDataChart.push(
        {
            name: 'xValue',
            data: [
                {valueRead: xValue, value: 0},
                {valueRead: xValue, value: yValue},
            ],
        }
    )
    if (nameChart !== 'eto') {
        listDataChart.push(
            {
                name: 'yValue',
                data: [
                    {valueRead: 0, value: yValue},
                    {valueRead: xValue, value: yValue},
                ],
            }
        )
        if (nameChart === 'speed') {
            listDataChart.push(
                {
                    name: 'yValue1',
                    data: [
                        {valueRead: xValue1, value: 0},
                        {valueRead: xValue1, value: yValue},
                    ],
                },
            )
        }
    } else {
        let negativeX = 0;
        if (ruleValue == 1) {
            negativeX = -10;
        } else if (ruleValue == 2) {
            negativeX = -7;
        } else if (ruleValue == 3) {
            negativeX = -1.5;
        }
        listDataChart.push(
            {
                name: 'yValue',
                data: [
                    {valueRead: negativeX, value: yValue},
                    {valueRead: xValue, value: yValue},
                ],
            }
        )
    }
    return listDataChart;
}


function GetETOArray(listDataChart, ruleValue) {
    let ruleObj = {};
    switch (ruleValue) {
        case 1 :
            ruleObj = {
                name: 'LN',
                data: [
                    {valueRead: -10, value: 1},
                    {valueRead: -7.5, value: 1},
                    {valueRead: -6, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 2 :
            ruleObj = {
                name: 'SN',
                data: [
                    {valueRead: -7, value: 0},
                    {valueRead: -4, value: 1},
                    {valueRead: -1, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 3 :
            ruleObj = {
                name: 'EQ',
                data: [
                    {valueRead: -1.5, value: 0},
                    {valueRead: 0, value: 1},
                    {valueRead: 1.5, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 4 :
            ruleObj = {
                name: 'SP',
                data: [
                    {valueRead: 1, value: 0},
                    {valueRead: 4, value: 1},
                    {valueRead: 7, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 5 :
            ruleObj = {
                name: 'Wet',
                data: [
                    {valueRead: 6, value: 0},
                    {valueRead: 7.5, value: 1},
                    {valueRead: 10.5, value: 1},
                ],
            }
            listDataChart.push(ruleObj);
            break;
    }
    
}

function GetSowingArray(listDataChart, ruleValue) {
    let ruleObj = {};
    switch (ruleValue) {
        case 1 :
            ruleObj = {
                name: 'Initial-stage',
                data: [
                    {valueRead: 0, value: 0},
                    {valueRead: 10, value: 1},
                    {valueRead: 20, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 2 :
            ruleObj = {
                name: 'Dev-stage',
                data: [
                    {valueRead: 15, value: 0},
                    {valueRead: 40, value: 1},
                    {valueRead: 65, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 3 :
            ruleObj = {
                name: 'Mid-stage',
                data: [
                    {valueRead: 40, value: 0},
                    {valueRead: 75, value: 1},
                    {valueRead: 110, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 4 :
            ruleObj = {
                name: 'Late-stage',
                data: [
                    {valueRead: 100, value: 0},
                    {valueRead: 120, value: 1},
                    {valueRead: 140, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
    }
}

function GetMoistureArray(listDataChart, ruleValue) {
    let ruleObj = {};
    
    switch (ruleValue) {
        case 1 :
            ruleObj = {
                name: 'Dry',
                data: [
                    {valueRead: 0, value: 1},
                    {valueRead: 20, value: 1},
                    {valueRead: 30, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 2 :
            ruleObj = {
                name: 'Medium',
                data: [
                    {valueRead: 15, value: 0},
                    {valueRead: 40, value: 1},
                    {valueRead: 65, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 3 :
            ruleObj = {
                name: 'Wet',
                data: [
                    {valueRead: 50, value: 0},
                    {valueRead: 60, value: 1},
                    {valueRead: 100, value: 1},
                ],
            }
            listDataChart.push(ruleObj);
            break;
    }
}

function GetSpeedArray(listDataChart, ruleValue) {
    let ruleObj = {};
    
    switch (ruleValue) {
        case 1 :
            ruleObj = {
                name: 'Zero',
                data: [
                    {valueRead: 0.001, value: 0},
                    {valueRead: 0.0025, value: 1},
                    {valueRead: 0.004, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 2 :
            ruleObj = {
                name: 'V-slow',
                data: [
                    {valueRead: 0.003, value: 0},
                    {valueRead: 0.005, value: 1},
                    {valueRead: 0.007, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 3 :
            ruleObj = {
                name: 'Slow',
                data: [
                    {valueRead: 0.006, value: 0},
                    {valueRead: 0.01, value: 1},
                    {valueRead: 0.014, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 4 :
            ruleObj = {
                name: 'Fast',
                data: [
                    {valueRead: 0.0125, value: 0},
                    {valueRead: 0.04, value: 1},
                    {valueRead: 0.0675, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
        case 5 :
            ruleObj = {
                name: 'V-fast',
                data: [
                    {valueRead: 0.052, value: 0},
                    {valueRead: 0.085, value: 1},
                    {valueRead: 0.118, value: 0},
                ],
            }
            listDataChart.push(ruleObj);
            break;
    }
}

export const etoData = [
    {
        name: 'LN',
        data: [
            {valueRead: -10, value: 1},
            {valueRead: -7.5, value: 1},
            {valueRead: -6, value: 0},
        ],
    },
    {
        name: 'SN',
        data: [
            {valueRead: -7, value: 0},
            {valueRead: -4, value: 1},
            {valueRead: -1, value: 0},
        ],
    },
    {
        name: 'EQ',
        data: [
            {valueRead: -1.5, value: 0},
            {valueRead: 0, value: 1},
            {valueRead: 1.5, value: 0},
        ],
    }
    , {
        name: 'SP',
        data: [
            {valueRead: 1, value: 0},
            {valueRead: 4, value: 1},
            {valueRead: 7, value: 0},
        ],
    }
    , {
        name: 'Wet',
        data: [
            {valueRead: 6, value: 0},
            {valueRead: 7.5, value: 1},
            {valueRead: 10.5, value: 1},
        ],
    }
]
export const moistureData = [
    {
        name: 'Dry',
        data: [
            {valueRead: 0, value: 1},
            {valueRead: 20, value: 1},
            {valueRead: 30, value: 0},
        ],
    },
    {
        name: 'Medium',
        data: [
            {valueRead: 15, value: 0},
            {valueRead: 40, value: 1},
            {valueRead: 65, value: 0},
        ],
    },
    {
        name: 'Wet',
        data: [
            {valueRead: 50, value: 0},
            {valueRead: 60, value: 1},
            {valueRead: 100, value: 1},
        ],
    }
]
export const sowingData = [
    {
        name: 'Initial-stage',
        data: [
            {valueRead: 0, value: 0},
            {valueRead: 10, value: 1},
            {valueRead: 20, value: 0},
        ],
    },
    {
        name: 'Dev-stage',
        data: [
            {valueRead: 15, value: 0},
            {valueRead: 40, value: 1},
            {valueRead: 65, value: 0},
        ],
    },
    {
        name: 'Mid-stage',
        data: [
            {valueRead: 40, value: 0},
            {valueRead: 75, value: 1},
            {valueRead: 110, value: 0},
        ],
    },
    {
        name: 'Late-stage',
        data: [
            {valueRead: 100, value: 0},
            {valueRead: 120, value: 1},
            {valueRead: 140, value: 0},
        ],
    }


]
export const speedData = [
    {
        name: 'Zero',
        data: [
            {valueRead: 0.001, value: 0},
            {valueRead: 0.0025, value: 1},
            {valueRead: 0.004, value: 0},
        ],
    },
    {
        name: 'V-slow',
        data: [
            {valueRead: 0.003, value: 0},
            {valueRead: 0.005, value: 1},
            {valueRead: 0.007, value: 0},
        ],
    },
    {
        name: 'Slow',
        data: [
            {valueRead: 0.006, value: 0},
            {valueRead: 0.01, value: 1},
            {valueRead: 0.014, value: 0},
        ],
    },
    {
        name: 'Fast',
        data: [
            {valueRead: 0.0125, value: 0},
            {valueRead: 0.04, value: 1},
            {valueRead: 0.0675, value: 0},
        ],
    },
    {
        name: 'V-fast',
        data: [
            {valueRead: 0.052, value: 0},
            {valueRead: 0.085, value: 1},
            {valueRead: 0.118, value: 0},
        ],
    }

]