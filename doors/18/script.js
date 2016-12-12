
var timerID = null;
var timerRunning = false;
var moment = reqiure('moment');
function stopclock (){
        if(timerRunning)
                clearTimeout(timerID);
        timerRunning = false;
}

function startclock () {
        // Make sure the clock is stopped
        stopclock();
        showtime();
}

function showtime () {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var date = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getYear();
        if (year < 1000)
         year+=1900
        
        var timeValue = "" + ((hours < 10 ) ? "0" : "") + hours
        // var timeValue = "" + ((hours >12) ? hours -12 :hours)
        timeValue += ((minutes < 10) ? ":0" : ":") + minutes
        timeValue += ((seconds < 10) ? ":0" : ":") + seconds
        // timeValue += (hours >= 12) ? " P.M." : " A.M."
        
        


         if (seconds == 0) {
        window.status = "New minute!";
        document.clock.face.value = "New minute!";
         }
        if (minutes == 0 && seconds == 0) {
        window.status = "New hour!";
        document.clock.face.value = "New hour!";
        
         }
        if (hours == 0 && minutes == 0 && seconds == 0) {
        window.status = "Midnight!";
        document.clock.face.value = "Midnight!";
         }

       else if (seconds > 0) {
        document.clock.face.value = timeValue + "  " + date + "/" +  month + "-" + year;        
        window.status = timeValue + "  The Xact time according to your computer clock!     "  + date + "/" + month + "-" + year;
                       }
 
        nextXmas = new Date("December 25, 2016");
        nextXmas2 = moment('12-25-2016','MM-DD-YYYY');
        nextXmas.setYear(year)
        daysPerDay = 24 * 60 * 60 * 1000 ; // Number of milliseconds per day
        hrPerDay = 60 * 60 * 1000;
        minPerDay = 60 * 1000;
        secPerDay = 1000;

        //Gesamt Anzahl an Tagen bis Sekunden bis Weihnachten
        hoursLeft = (nextXmas.getTime() - now.getTime()) / hrPerDay;
        minLeft = (nextXmas.getTime() - now.getTime()) / minPerDay;
        secLeft = (nextXmas.getTime() - now.getTime()) / secPerDay; 

        //Echtzeit in Tagen bis Sekunden
        realTimeLeft = (nextXmas2 - now.getTime());
        realTimeDaysLeft = moment(realTimeLeft).format('DD');
        realTimeHoursLeft = moment(realTimeLeft).format('HH:mm:ss');
        
        
        hoursLeft = Math.round(hoursLeft);
        minLeft = Math.round(minLeft);
        secLeft = Math.round(secLeft);

        document.Frame2.Xmas.value =  realTimeDaysLeft +" Tage und "+ realTimeHoursLeft +" Stunden bis Weihnachten!";
        document.hours.Xmas.value = "Insgesamt " + hoursLeft + " Stunden bis Weihnachten!";
        document.minutes.Xmas.value = "Insgesamt " + minLeft + " Minuten bis Weihnachten!";
        document.seconds.Xmas.value = "Insgesamt " + secLeft + " Sekunden bis Weihnachten!";

        newYear = moment('12-31-2016','MM-DD-YYYY');
        daysLeft = (newYear - now.getTime());
        realTimeDaysLeft = moment(daysLeft).format('DD');
        realTimeHoursLeft = moment(daysLeft).format('HH:mm:ss');
        document.Frame3.NewYear.value = realTimeDaysLeft + " Tage und " + realTimeHoursLeft + " bis zum neuen Jahr!";
                    
        timerID = setTimeout("showtime()",1000);

        timerRunning = true;
}
