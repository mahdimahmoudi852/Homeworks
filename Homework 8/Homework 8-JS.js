function getCourse(){
    let weekDays;
    let course1 = "";
    let course2 = "";
    let course3 = "";
switch (new Date().getDay()){
    case 0:
        weekDays = "sunday";
        course1 = "آزمایشگاه سیستم عامل";
        course2 = "پایگاه داده ها";
        course3 = "مدار منطقی";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th> <th> کلاس دوم </th> <th> کلاس سوم </th> </tr>"
        +"<tr> <th>"+ course1 +"</th> <th>"+ course2 +"</th> <th>"+ course3 +"</th> </tr>"
        +"<tr> <th>13:30</th> <th>15:30</th> <th>17:30</th> </tr>";
        break;
    case 1:
        weekDays = "monday";
        course1 = "برنامه نویسی موبایل";
        course2 = "ریاضی عمومی";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th> <th> کلاس دوم </th></tr>"
        +"<tr> <th>"+ course1 +"</th> <th>"+ course2 +"</th></tr>"
        +"<tr> <th>11:30</th> <th>16:00</th></tr>";
        break;
    case 2:
        weekDays = "tuesday";
        course1 = "مبانی ساختمان گسسته";
        course2 = "طراحی وب";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th> <th> کلاس دوم </th></tr>"
        +"<tr> <th>"+ course1 +"</th> <th>"+ course2 +"</th></tr>"
        +"<tr> <th>11:30</th> <th>15:30</th></tr>";
        break;
    case 3:
        weekDays = "wednesday";
        course1 = "اصول و فنون مذاکره";
        course2 = "زبان فنی";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th> <th> کلاس دوم </th></tr>"
        +"<tr> <th>"+ course1 +"</th><th>"+ course2 +"</th></tr>"
        +"<tr> <th>11:30</th> <th>13:30</th></tr>";
        break;
    case 4:
        weekDays = "thursay";
        course1 = "کارگاه شبکه های کامپوتری";
        course2 = "کار آفرینی";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th> <th> کلاس دوم </th></tr>"
        +"<tr> <th>"+ course1 +"</th> <th>"+ course2 +"</th></tr>"
        +"<tr> <th>7:30</th> <th>11:30</th></tr>";
        break;
    case 5:
        weekDays = "friday";
        course1 = "بدون کلاس";document.getElementById("table").innerHTML = 
        "<tr> <th> بدون کلاس </th></tr>";
        break;
    case 6:
        weekDays = "saturday";
        course1 = "ساختمان داده ها";
        document.getElementById("table").innerHTML = 
        "<tr> <th> کلاس اول </th></tr>"
        +"<tr> <th>"+ course1 +"</th></tr>"
        +"<tr> <th>15:30</th></tr>";
        break;
}
document.getElementById("test").innerHTML ="Today is: " + weekDays;
}