// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)
function showTime() {
  var time = "";
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentSecounds = now.getSeconds();
  var time = currentHour + ":" + currentMinute + ":" + currentSecounds;
  console.log(time);
}
setInterval(showTime, 1000);



//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function TimeFullHour() {
  const newDate = new Date();
  const currentFullHour = newDate.getHours();
  const currentFullMinute = newDate.getMinutes();
  const currentFullSecounds = newDate.getSeconds();
  if (currentFullHour >= 12) {
    //hours >= 12 ? "PM" : "AM");
    const time = 12;
    var Pmtime = currentFullHour - time;
    var FullTime = Pmtime + ":" + currentFullMinute + ":" + currentFullSecounds;
    console.log(FullTime + "PM");
  } else {
    const amTime =
      currentFullHour + ":" + currentFullMinute + ":" + currentFullSecounds;
    console.log(amTime + "AM");
  }
}
setInterval(TimeFullHour, 1000);
