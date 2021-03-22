const convertTime12to24 = (time12h) => {
    // console.log(time12h);
    let indexOfAP = time12h.length - 2;
    let dd = time12h[indexOfAP]

    let [hours, minutes, second] = time12h.split(':');

    second = second.slice(0, 2)

    if (dd === 'A') {
        hours = hours;
        minutes = minutes
        second = second
    }

    if (dd === 'P' && hours < 12) {
        hours = +hours + 12;
    }

    //Adding 45 minuts and 45 second
    minutes = +minutes + 45;
    second = +second + 45;

    if (dd === 'A' && hours >= 12) {
        hours = '00'
    }

    if (minutes > 60) {
        minute_def = minutes - 60;
        hours = +hours + 1;
        minutes = 00 + minute_def
    }

    if (second > 60) {
        second_deff = second - 60;
        minutes = +minutes + 1;
        second = 00 + second_deff;
    }


    if (hours > 23) {
        hours = '00'
    }


    return `${hours}:${minutes}:${second}`;
}

// console.log(convertTime12to24('12:30:00PM'));    //13:15:45
// console.log(convertTime12to24('05:06:30PM'));    //17:52:15
// console.log(convertTime12to24('12:00:00PM'));    //12:45:45
// console.log(convertTime12to24('12:00:00AM'));    //00:45:45
console.log(convertTime12to24('12:01:00PM'));   //12:46:45
console.log(convertTime12to24('12:01:00AM'));   //00:46:45
