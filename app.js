//Exercise #1
function cal(a) {
    let b = a+3;
    let c = a*0.01;
    return b+c
}
console.log(cal(100));

//Exercise #2
//Part1
function greeting (name1,name2,name3) {
    return (`welcome ${name1} ${name2} ${name3}`)
}
console.log(greeting ('A','B','C')); 

//Part2


function age(a) {
    let currentYear = 2020;
    return  console.log(currentYear - a);    
}
age(1990);

//Part 3
function prinsOut (name1,name2,name3,age1,age2,age3) {
    return (`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
}
console.log(prinsOut ('A','B','C',30,31,32)); 

//Challenge Yourself
function min(score) {
    if (score >= 5) {
        return true;
    } else {
        return false;
    }
}


function mid(score) {
    if (score >= 8) {
        return 'Excellent';
    } else {
        return 'Try more';
    }
    
}

function max(score) {
    if (score === 11) {
        return 'Perfect';
    } else {
        return 'Good but not the best';
    }
    
}