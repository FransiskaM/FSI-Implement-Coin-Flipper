// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    let change  = document.getElementById ("flip-coin");

    let coin  = document.getElementById ("heads");

    //DO NOT CHANGE THE FOLLOWING CODE
    change.addEventListener("click", function() {
        let flipValue = Math.ceil(Math.random() * 2);
        if(flipValue == 1) {
            coin.src="/assets/images/penny-heads.jpg";
            } else {
                coin.src="/assets/images/penny-tails.jpg";
            } 
       
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