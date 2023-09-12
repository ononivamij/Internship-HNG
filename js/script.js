const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day= new Date();
let dayOfTheWeek = weekday[day.getDay()]
let date = day.toLocaleString ()
document.querySelector('h3').innerHTML = ('Hello!' + ' ' + "It's" + ' ' + dayOfTheWeek)
document.querySelector('h4').innerHTML = 'The time is' + ' ' +  date