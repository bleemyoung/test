/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let one_min_angle = 6
       let one_hour_angle = 30
    minutes_angle = one_min_angle * minutes
        hour_angle = (hour % 12 + minutes / 60) * one_hour_angle
    diff = Math.abs(minutes_angle-hour_angle)
    return Math.min(diff,360-diff)
};


console.log(angleClock(12,30))