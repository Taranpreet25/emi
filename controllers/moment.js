const moment = require("moment");

module.exports = function(booking_date,checkin_date, amount){
    var emi_available = false;
var booking_date = moment(booking_date); 
var checkin_date = moment(checkin_date);
var amount=amount;
var monthlyEMI;
var leftamount;
var FirstEMI;

// console.log(checkin_date.diff(booking_date, 'days'));
var maxdays =checkin_date.diff(booking_date, 'days');

if(maxdays>=30){
    emi_available = true;

    var getDaysBetweenDates = function(startDate, endDate) {
        var now = startDate.clone(), dates = [];
    
        while (now.isSameOrBefore(endDate)) {
            dates.push(now.format('MM/DD/YYYY'));
            now.add(7, 'days');
        }
        return dates;
    };
    
    var startDate = moment(booking_date);
    var endDate = moment(checkin_date).subtract(14,"day");
    
    var dateList = getDaysBetweenDates(startDate, endDate);
    
    
    // dateTime = moment( dateList, 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MM-DD HH:mm:ss");
    // var dateList = moment(getDaysBetweenDates(startDate, endDate)).format('YYYY/MM/DD');
    // console.log(dateList.length);
    // console.log(dateList);
    // moment(dateList).format('YYYY/MM/DD');
    // moment.locale('fr');
    // moment().format("L");
    // console.log(dateTime)
    
    
    
    
    var n=dateList.length;
    
    // console.log(n);
    FirstEMI = (amount * 25)/100;
    // console.log(FirstEMI);

    leftamount = amount-FirstEMI;

    monthlyEMI = (leftamount / (n-1));

    // console.log(monthlyEMI);

}
else{

    emi_available = false;

}
if(emi_available){
    let newdateList = dateList.map( (txt,i) => {
        newemi = monthlyEMI
        if(i==0) {
            newemi = FirstEMI
        }   
            return {emi_date:txt,amount:newemi}
    }
    )
return {emi_available:emi_available,data:newdateList}
}else{

return {emi_available:emi_available}
}
}
