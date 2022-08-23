// TODO: Declare any global variables we need

let headNumber = 0;
let tailNumber = 0;
let headPercentNumber = 0;
let tailPercentNumber = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    let change  = document.getElementById ("flip-coin");

    let clearBoard  = document.getElementById ("clear");

    let coin  = document.getElementById ("coinImg");

    let heads = document.getElementById ('heads');
    let tails = document.getElementById ("tails");
    let headPercent = document.getElementById ("heads-percent");
    let tailPercent = document.getElementById ("tails-percent");

    //DO NOT CHANGE THE FOLLOWING CODE
    change.addEventListener("click", function() {

        let flipValue = Math.ceil(Math.random() * 2);
        if(flipValue == 1) {
            coin.src="/assets/images/penny-heads.jpg";
            headNumber = headNumber + 1;
            
            } else {
                coin.src="/assets/images/penny-tails.jpg";
                tailNumber = tailNumber + 1;
                
            } 
            headPercentNumber = ((headNumber/(headNumber + tailNumber))*100).toFixed();
            tailPercentNumber = ((tailNumber/(headNumber + tailNumber))*100).toFixed();

        heads.innerHTML = headNumber;    
        tails.innerHTML = tailNumber;
        headPercent.innerHTML = headPercentNumber + '%';
        tailPercent.innerHTML = tailPercentNumber + '%';
    });

    clearBoard.addEventListener("click", function() {

        headNumber = 0;
        tailNumber = 0;
        headPercentNumber = 0;
        tailPercentNumber = 0;

        heads.innerHTML = headNumber;    
        tails.innerHTML = tailNumber;
        headPercent.innerHTML = headPercentNumber + '%';
        tailPercent.innerHTML = tailPercentNumber + '%'; 

    });
    
    
    // Flip Button Click Handler
        // TODO: Determine flip outcome

        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})