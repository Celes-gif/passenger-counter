//document.getElementById("count-el").innerText = 5

//let count = 0 

//console.log(count)

//initialized the count as 0
//listen for clicks on the increment button
//increment the count variable when the button us clicked
//cjange the count-el in the HTML to refect the new count
//function increment()
//{
  //  console.log("The button was clicked")
    //alert("the button was clicked");
//}

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//Create a function that logs out the sum of all the lap times
//function logLapTime(){
  //  let totalTime = lap1 + lap2 + lap3
    //console.log(totalTime)
//}

//logLapTime()
let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById("count-el") //pass in arguments
let count = 0

console.log(saveEl)

function increment(){
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}


