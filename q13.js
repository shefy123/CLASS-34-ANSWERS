let customerSay1 = "hi";
let customerSay2 =  "hello";
let customerSay3 = "hey";
let customerSay4 = "salam";
let customerSay5 = "Is Uit Open Today";
let customerSay6 = "What are the timings of today's class";
let customerSay7 = "Where will be the class conducted";
let customerSay8 = "customerAskAnythingElse";

let customerAsk = customerSay5;

if (customerAsk == customerSay1 || customerAsk == customerSay2 || customerAsk == customerSay3 || customerAsk == customerSay4) {
    console.log ("Thank you for calling TechKaro Customer Service. How may I help you?");
} 
else if (customerAsk == customerSay5) {
    console.log ("Yes");
}
else if (customerAsk == customerSay6) {
    console.log ("1:30-5:30");
} 
else if (customerAsk == customerSay7) {
    console.log ("At CL-1, Usman Institute");
} 
else {
     console.log ("Sorry, I do not understand your question");
}
