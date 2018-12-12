const moment = require('moment');

module.exports = {

    getProgrammeByTime(start,schedule){

        console.log(`running function start time is ${moment(start).format("hh:mm")}`)

    }
}