// Objects And variables
let button = document.getElementById("btn");
let totalTip = document.getElementsByClassName("totaltip");
// Hiding Tip and Each on load
totalTip[0].style.display = "none";

// Tip Calculator Function
function tipCalculation(){
    let bill = document.getElementById("bill").value;
    let services = document.getElementById("options").value;
    let persons = document.getElementById("person").value;
    let tip = document.getElementById("tip");
    let each = document.getElementById("each");

    if(bill === ""){
        alert("Please enter Bill Amount!");
    }else if(services === "0"){
        alert("Please enter service rating");
    }else{
        if( persons === 0 || persons <= 1){
            persons = 1;
            each.style.display = "none";
        }else{
            each.style.display = "block";
        }
    
        let amount = (bill * services)/persons;
        amount = amount.toFixed(2);
        tip.innerHTML = amount;
        totalTip[0].style.display = "block";
    }
}

button.addEventListener("click",function(){
    tipCalculation();
})

