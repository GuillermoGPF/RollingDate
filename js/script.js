/* -------------------------------------------------------------------------------------- */
/* -                                  RollingDate JS                                    - */
/* -------------------------------------------------------------------------------------- */

onload = function startTime(){
    let today = new Date();

    let hours = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59'
    ];

    let minutes = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59'
    ];

    let seconds = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59'
    ];

    let hr = hours[today.getHours()];
    let min = minutes[today.getMinutes()];
    let sec = seconds[today.getSeconds()];

    let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    let days = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
    ];
    let years = [
        '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', 
        '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', 
        '2040', '2041', '2042', '2043', '2044', '2045', '2046', '2047', '2048'
    ];
    let curDay = days[today.getDate()];
    let curMonth = months[today.getMonth()];
    let curYear = years[today.getFullYear()];

    // Roulette Calendar Day
    let roulette1 = document.querySelector('.roulette1');
    if (curDay === '1') {
        roulette1.style.transform = 'rotate(0deg)';
    } else if (curDay === '2') {
        roulette1.style.transform = 'rotate(-11.61deg)';
    } else if (curDay === '3') {
        roulette1.style.transform = 'rotate(-23.22deg)';
    } else if (curDay === '4') {
        roulette1.style.transform = 'rotate(-34.83deg)';
    } else if (curDay === '5') {
        roulette1.style.transform = 'rotate(-46.44deg)';
    } else if (curDay === '6') {
        roulette1.style.transform = 'rotate(-58.05deg)';
    } else if (curDay === '7') {
        roulette1.style.transform = 'rotate(-69.66deg)';
    } else if (curDay === '8') {
        roulette1.style.transform = 'rotate(-81.27deg)';
    } else if (curDay === '9') {
        roulette1.style.transform = 'rotate(-92.88deg)';
    } else if (curDay === '10') {
        roulette1.style.transform = 'rotate(-104.49deg)';
    } else if (curDay === '11') {
        roulette1.style.transform = 'rotate(-116.1deg)';
    } else if (curDay === '12') {
        roulette1.style.transform = 'rotate(-127.71deg)';
    } else if (curDay === '13') {
        roulette1.style.transform = 'rotate(-139.32deg)';
    } else if (curDay === '14') {
        roulette1.style.transform = 'rotate(-150.93deg)';
    } else if (curDay === '15') {
        roulette1.style.transform = 'rotate(-162.54deg)';
    } else if (curDay === '16') {
        roulette1.style.transform = 'rotate(-174.15deg)';
    } else if (curDay === '17') {
        roulette1.style.transform = 'rotate(-185.76deg)';
    } else if (curDay === '18') {
        roulette1.style.transform = 'rotate(-197.37deg)';
    } else if (curDay === '19') {
        roulette1.style.transform = 'rotate(-208.98deg)';
    } else if (curDay === '20') {
        roulette1.style.transform = 'rotate(-220.59deg)';
    } else if (curDay === '21') {
        roulette1.style.transform = 'rotate(-232.2deg)';
    } else if (curDay === '22') {
        roulette1.style.transform = 'rotate(-243.81deg)';
    } else if (curDay === '23') {
        roulette1.style.transform = 'rotate(-255.42deg)';
    } else if (curDay === '24') {
        roulette1.style.transform = 'rotate(-267.03deg)';
    } else if (curDay === '25') {
        roulette1.style.transform = 'rotate(-278.64deg)';
    } else if (curDay === '26') {
        roulette1.style.transform = 'rotate(-290.25deg)';
    } else if (curDay === '27') {
        roulette1.style.transform = 'rotate(-301.86deg)';
    } else if (curDay === '28') {
        roulette1.style.transform = 'rotate(-313.47deg)';
    } else if (curDay === '29') {
        roulette1.style.transform = 'rotate(-325.08deg)';
    } else if (curDay === '30') {
        roulette1.style.transform = 'rotate(-336.69deg)';
    } else if (curDay === '31') {
        roulette1.style.transform = 'rotate(-348.3deg)';
    }

    // Roulette Calendar Month
    let roulette2 = document.querySelector('.roulette2');
    if (curMonth === '1') {
        roulette2.style.transform = 'rotate(0deg)';
    } else if (curMonth === '2') {
        roulette2.style.transform = 'rotate(-30deg)';
    } else if (curMonth === '3') {
        roulette2.style.transform = 'rotate(-60deg)';
    } else if (curMonth === '4') {
        roulette2.style.transform = 'rotate(-90deg)';
    } else if (curMonth === '5') {
        roulette2.style.transform = 'rotate(-120deg)';
    } else if (curMonth === '6') {
        roulette2.style.transform = 'rotate(-150deg)';
    } else if (curMonth === '7') {
        roulette2.style.transform = 'rotate(-180deg)';
    } else if (curMonth === '8') {
        roulette2.style.transform = 'rotate(-210deg)';
    } else if (curMonth === '9') {
        roulette2.style.transform = 'rotate(-240deg)';
    } else if (curMonth === '10') {
        roulette2.style.transform = 'rotate(-270deg)';
    } else if (curMonth === '11') {
        roulette2.style.transform = 'rotate(-300deg)';
    } else if (curMonth === '12') {
        roulette2.style.transform = 'rotate(-330deg)';
    }

    // Roulette Calendar Year
    let roulette3 = document.querySelector('.roulette3');
    if (curYear === '2022') {
        roulette3.style.transform = 'rotate(0deg)';
    } else if (curYear === '2023') {
        roulette3.style.transform = 'rotate(-60deg)';
    } else if (curYear === '2024') {
        roulette3.style.transform = 'rotate(-120deg)';
    } else if (curYear === '2025') {
        roulette3.style.transform = 'rotate(-180deg)';
    } else if (curYear === '2026') {
        roulette3.style.transform = 'rotate(-240deg)';
    } else if (curYear === '2027') {
        roulette3.style.transform = 'rotate(-300deg)';
    }

    // Roulette Calendar Second
    let roulette4 = document.querySelector('.roulette4');
    if (sec) {
        const seconds = roulette4.style.transform += 'rotate(-6deg)'
        setTimeout( () => startTime(), 500);
    }

    // Roulette Calendar Minute
    let roulette5 = document.querySelector('.roulette5');
    if (min === '0') {
        roulette5.style.transform = 'rotate(0deg)';
    } else if (min === '1') {
        roulette5.style.transform = 'rotate(-6deg)';
    } else if (min === '2') {
        roulette5.style.transform = 'rotate(-12deg)';
    } else if (min === '3') {
        roulette5.style.transform = 'rotate(-18deg)';
    } else if (min === '4') {
        roulette5.style.transform = 'rotate(-24deg)';
    } else if (min === '5') {
        roulette5.style.transform = 'rotate(-30deg)';
    } else if (min === '6') {
        roulette5.style.transform = 'rotate(-36deg)';
    } else if (min === '7') {
        roulette5.style.transform = 'rotate(-42deg)';
    } else if (min === '8') {
        roulette5.style.transform = 'rotate(-48deg)';
    } else if (min === '9') {
        roulette5.style.transform = 'rotate(-54deg)';
    } else if (min === '10') {
        roulette5.style.transform = 'rotate(-60deg)';
    } else if (min === '11') {
        roulette5.style.transform = 'rotate(-66deg)';
    } else if (min === '12') {
        roulette5.style.transform = 'rotate(-72deg)';
    } else if (min === '13') {
        roulette5.style.transform = 'rotate(-78deg)';
    } else if (min === '14') {
        roulette5.style.transform = 'rotate(-84deg)';
    } else if (min === '15') {
        roulette5.style.transform = 'rotate(-90deg)';
    } else if (min === '16') {
        roulette5.style.transform = 'rotate(-96deg)';
    } else if (min === '17') {
        roulette5.style.transform = 'rotate(-102deg)';
    } else if (min === '18') {
        roulette5.style.transform = 'rotate(-108deg)';
    } else if (min === '19') {
        roulette5.style.transform = 'rotate(-114deg)';
    } else if (min === '20') {
        roulette5.style.transform = 'rotate(-120deg)';
    } else if (min === '21') {
        roulette5.style.transform = 'rotate(-126deg)';
    } else if (min === '22') {
        roulette5.style.transform = 'rotate(-132deg)';
    } else if (min === '23') {
        roulette5.style.transform = 'rotate(-138deg)';
    } else if (min === '24') {
        roulette5.style.transform = 'rotate(-1444deg)';
    } else if (min === '25') {
        roulette5.style.transform = 'rotate(-150deg)';
    } else if (min === '26') {
        roulette5.style.transform = 'rotate(-156deg)';
    } else if (min === '27') {
        roulette5.style.transform = 'rotate(-162deg)';
    } else if (min === '28') {
        roulette5.style.transform = 'rotate(-168deg)';
    } else if (min === '29') {
        roulette5.style.transform = 'rotate(-174deg)';
    } else if (min === '30') {
        roulette5.style.transform = 'rotate(-180deg)';
    } else if (min === '31') {
        roulette5.style.transform = 'rotate(-186deg)';
    } else if (min === '32') {
        roulette5.style.transform = 'rotate(-192deg)';
    } else if (min === '33') {
        roulette5.style.transform = 'rotate(-198deg)';
    } else if (min === '34') {
        roulette5.style.transform = 'rotate(-204deg)';
    } else if (min === '35') {
        roulette5.style.transform = 'rotate(-210deg)';
    } else if (min === '36') {
        roulette5.style.transform = 'rotate(-216deg)';
    } else if (min === '37') {
        roulette5.style.transform = 'rotate(-222deg)';
    } else if (min === '38') {
        roulette5.style.transform = 'rotate(-228deg)';
    } else if (min === '39') {
        roulette5.style.transform = 'rotate(-234deg)';
    } else if (min === '40') {
        roulette5.style.transform = 'rotate(-240deg)';
    } else if (min === '41') {
        roulette5.style.transform = 'rotate(-246deg)';
    } else if (min === '42') {
        roulette5.style.transform = 'rotate(-252deg)';
    } else if (min === '43') {
        roulette5.style.transform = 'rotate(-258deg)';
    } else if (min === '44') {
        roulette5.style.transform = 'rotate(-264deg)';
    } else if (min === '45') {
        roulette5.style.transform = 'rotate(-270deg)';
    } else if (min === '46') {
        roulette5.style.transform = 'rotate(-276deg)';
    } else if (min === '47') {
        roulette5.style.transform = 'rotate(-282deg)';
    } else if (min === '48') {
        roulette5.style.transform = 'rotate(-288deg)';
    } else if (min === '49') {
        roulette5.style.transform = 'rotate(-294deg)';
    } else if (min === '50') {
        roulette5.style.transform = 'rotate(-300deg)';
    } else if (min === '51') {
        roulette5.style.transform = 'rotate(-306deg)';
    } else if (min === '52') {
        roulette5.style.transform = 'rotate(-312deg)';
    } else if (min === '53') {
        roulette5.style.transform = 'rotate(-318deg)';
    } else if (min === '54') {
        roulette5.style.transform = 'rotate(-324deg)';
    } else if (min === '55') {
        roulette5.style.transform = 'rotate(-330deg)';
    } else if (min === '56') {
        roulette5.style.transform = 'rotate(-336deg)';
    } else if (min === '57') {
        roulette5.style.transform = 'rotate(-342deg)';
    } else if (min === '58') {
        roulette5.style.transform = 'rotate(-348deg)';
    } else if (min === '59') {
        roulette5.style.transform = 'rotate(-354deg)';
    }

    // Roulette Calendar Hour
    let roulette6 = document.querySelector('.roulette6');
    if (hr === '0') {
        roulette6.style.transform = 'rotate(0deg)';
    } else if (hr === '1') {
        roulette6.style.transform = 'rotate(-15deg)';
    } else if (hr === '2') {
        roulette6.style.transform = 'rotate(-30deg)';
    } else if (hr === '3') {
        roulette6.style.transform = 'rotate(-45deg)';
    } else if (hr === '4') {
        roulette6.style.transform = 'rotate(-60deg)';
    } else if (hr === '5') {
        roulette6.style.transform = 'rotate(-75deg)';
    } else if (hr === '6') {
        roulette6.style.transform = 'rotate(-90deg)';
    } else if (hr === '7') {
        roulette6.style.transform = 'rotate(-105deg)';
    } else if (hr === '8') {
        roulette6.style.transform = 'rotate(-120deg)';
    } else if (hr === '9') {
        roulette6.style.transform = 'rotate(-135deg)';
    } else if (hr === '10') {
        roulette6.style.transform = 'rotate(-150deg)';
    } else if (hr === '11') {
        roulette6.style.transform = 'rotate(-165deg)';
    } else if (hr === '12') {
        roulette6.style.transform = 'rotate(-180deg)';
    } else if (hr === '13') {
        roulette6.style.transform = 'rotate(-195deg)';
    } else if (hr === '14') {
        roulette6.style.transform = 'rotate(-210deg)';
    } else if (hr === '15') {
        roulette6.style.transform = 'rotate(-225deg)';
    } else if (hr === '16') {
        roulette6.style.transform = 'rotate(-240deg)';
    } else if (hr === '17') {
        roulette6.style.transform = 'rotate(-255deg)';
    } else if (hr === '18') {
        roulette6.style.transform = 'rotate(-270deg)';
    } else if (hr === '19') {
        roulette6.style.transform = 'rotate(-285deg)';
    } else if (hr === '20') {
        roulette6.style.transform = 'rotate(-300deg)';
    } else if (hr === '21') {
        roulette6.style.transform = 'rotate(-315deg)';
    } else if (hr === '22') {
        roulette6.style.transform = 'rotate(-330deg)';
    } else if (hr === '23') {
        roulette6.style.transform = 'rotate(-345deg)';
    }
	
    // Background Day
    if (curMonth === '11' ||
        curMonth === '12' ||
        curMonth === '1' || 
        curMonth === '2' || 
        curMonth === '3' || 
        curMonth === '4') {
        if (hr >= 7 && hr < 10) {
            $('body').css('background-image', 'url("../img/foto1.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 10 && hr < 13) {
            $('body').css('background-image', 'url("../img/foto2.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 13 && hr < 16) {
            $('body').css('background-image', 'url("../img/foto3.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 16 && hr < 19) {
            $('body').css('background-image', 'url("../img/foto4.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 19 && hr < 7) {
            $('body').css('background-image', 'url("../img/foto5.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else {
            $('body').css('background-image', 'url("../img/foto5.png")');
            $('body').css('transition', 'all 1s ease-out');
        }
    } else if (curMonth === '5' || 
        curMonth === '6' || 
        curMonth === '7' || 
        curMonth === '8' || 
        curMonth === '9' || 
        curMonth === '10') {
         if (hr >= 6 && hr < 10) {
            $('body').css('background-image', 'url("../img/foto1.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 10 && hr < 14) {
            $('body').css('background-image', 'url("../img/foto2.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 14 && hr < 18) {
            $('body').css('background-image', 'url("../img/foto3.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 18 && hr < 22) {
            $('body').css('background-image', 'url("../img/foto4.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else if (hr >= 22 && hr < 6) {
            $('body').css('background-image', 'url("../img/foto5.png")');
            $('body').css('transition', 'all 1s ease-out');
        } else {
            $('body').css('background-image', 'url("../img/foto5.png")');
            $('body').css('transition', 'all 1s ease-out');
        }
    }
}