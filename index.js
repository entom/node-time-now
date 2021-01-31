exports.now = (unit = 'nano') => {
    let time = null;
    const processHrTime = process.hrtime();
    switch (unit) {
        case 'milli':
            time = processHrTime[0] * 1000 + processHrTime[1] / 1000000;
        case 'micro':
            time = processHrTime[0] * 1000000 + processHrTime[1] / 1000;
        case 'nano':
            time = processHrTime[0] * 1000000000 + processHrTime[1];
    }

    return time;
}
