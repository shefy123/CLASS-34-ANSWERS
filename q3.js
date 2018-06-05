let maxTemparature = 40 ;
let todayTemparature = 36 ;


if (todayTemparature > maxTemparature) {
    console.log ("closed");
}
else if (
    todayTemparature > 35 && 
    todayTemparature < maxTemparature
) {
    console.log ("NOT SURE");
}

else {
    Console.log ("OPEN")
}