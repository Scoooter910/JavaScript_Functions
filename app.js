console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
   
    if (count < 0) {
       
        return; 
    }

    for (let i = 1; i <= count; i++) {
       
        if (i % 2 !== 0) {
         
            console.log(i);
        }
    }
}
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (!userName || !age) {
        console.log("Please provide both userName and age.");
        return; 
    }


    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;


    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
checkAge("Name", 18); 
checkAge("Name", 15);  
checkAge(); 

//Exercise 3 Section

function checkPoint(x, y) {
    
    if (x === undefined || y === undefined) {
        console.log("Please provide both x and y coordinates.");
        return; 
    }

    if (x === 0 && y !== 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    }
  
    else if (y === 0 && x !== 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    }
    
    else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    } else {
        console.log(`(${x}, ${y}) is at the origin`);
    }
}
checkPoint(0, 0);   
checkPoint(0, 5);   
checkPoint(5, 0);   
checkPoint(1, 2);   
checkPoint(-6, 18); 
checkPoint(-3, -4); 
checkPoint(2, -1);  

//Exercise 4

function checkTriangle(side1, side2, side3) {
   
    if (side1 <= 0 || side2 <= 0 || side3 <= 0 ||
        (side1 + side2 <= side3) ||
        (side1 + side3 <= side2) ||
        (side2 + side3 <= side1)) {
        return "Invalid triangle";
    }

    if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}
checkTriangle(1, 2, 2); 
checkTriangle(1, 1, 2); 
checkTriangle(3, 3, 3); 
checkTriangle(3, 4, 5); 

//Exercise 5

function analyzeDataUsage(planLimit, day, usage) {
    
    let daysUsed = day;
    let daysRemaining = 30 - day;

    
    let averageDailyUse = usage / daysUsed;

    
    let remainingData = planLimit - usage;
    let maxDailyUsage = remainingData / daysRemaining;

 
    let message = "";
    if (averageDailyUse > maxDailyUsage) {
        let excessUsage = usage - (planLimit / 2);
        message = `You are EXCEEDING your average daily use (${averageDailyUse.toFixed(2)} GB/day),\n`
                + `continuing this high usage, you'll exceed your data plan by\n`
                + `${excessUsage.toFixed(1)} GB.\n`
                + `To stay below your data plan, use no more than ${maxDailyUsage.toFixed(2)} GB/day.`;
    } else {
        message = `You are within your average daily use (${averageDailyUse.toFixed(2)} GB/day).\n`
                + `You have ${remainingData.toFixed(1)} GB remaining.\n`
                + `To maximize usage, you can use up to ${maxDailyUsage.toFixed(2)} GB/day.`;
    }

   
    console.log(`${daysUsed} days used, ${daysRemaining} days remaining\n`
              + `Average daily use: ${averageDailyUse.toFixed(2)} GB/day\n`
              + `${message}`);
}
analyzeDataUsage(100, 15, 56); 