///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

let totalAcres= 0
for (let i=0; i < fujiAcres.length; i++){
    totalAcres += (fujiAcres[i] + galaAcres[i] + pinkAcres[i])
}

console.log(totalAcres)
// I used a for loop that would run 7 times through because I set it equal to the length of fujiAcres which is 7, knowing that each array had a length of 7 due to 7 days of the week being accounted for for each type of apple. Instead of only looping through one array I used the += method AND added each array together. That way we are getting the sum of each array individually and then have them added to one another all in one function. 




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)

//since there are 7 days in a week, dividing the total number of acres by 7 results in the average of how many acres of apples per day





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0){
    days+=1
    acresLeft-=averageDailyAcres
}

console.log(days)
// I used a while loop that, until there are no acres left, i day will be added to the days variable and averageDailyAcres will be subtracted from the averageDailyAcres variable. Since on average 9 acres are picked a day, it will take 20 days to pick 180 acres. When I console log acresLeft however it becomes -6 so I would want to add in an "if" statement that if acresLeft <= 0 it will console log zero instead. But in this case I just need to log days so I won't worry about doing that now. 

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice(0,7)
let galaTons = galaAcres.slice(0,7)
let pinkTons = pinkAcres.slice(0,7)

for (let i=0; i<7; i++){
    fujiTons[i]*=6.5;
    galaTons[i]*=6.5;
    pinkTons[i]*=6.5;
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

//I basically made the Tons arrays equivalent to the Acres arrays. Then created a for loop that ran through each array and multiplies each value by 6.5. The arrays log to the console with the correct new values.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let fujiPounds = 0
let galaPounds= 0
let pinkPounds = 0
for (let i=0; i < fujiTons.length; i++){
     fujiPounds += fujiTons[i]*2000;
     galaPounds += galaTons[i]*2000;
     pinkPounds += pinkTons[i]*2000}


console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

//I followed the same formula to convert tons to pounds as I did to find the total acres, but rather than adding the separate values of each indivudual fruit to one singular total I found respective totals for the week of each fruit in pounds. The correct values are logging to the console. 





// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * .89)
let galaProfit = (galaPounds * .64)
let pinkProfit = (pinkPounds * .55)

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// I calculated weekly revenue per apple type by multiplying pounds sold of that apple by the price per pound.






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log(totalProfit)

// I added the profits of each type of apple together to find the total revenue.
