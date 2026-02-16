console.log("Mini game resultsystem");
let score = 12;
let level = "medium";
let isBonusRound = false;
let multiplier;
let grade;

switch(level){
    case 'easy':
       multiplier = 1;
        break;
        case 'medium':
            multiplier = 2;
        break;
        case 'hard':
        multiplier =3;
        break;
      default:
       multiplier= 1;
        break;

}

let finalScore = isBonusRound ?score* multiplier * 2 : score* multiplier;

    if(finalScore>=90){
grade ='A'
}else if(finalScore>=75&&finalScore<=89){
 grade = "B"
}else if(finalScore>=60&&finalScore<=74){
   grade = 'C'
}else(grade = 'Fail')


console.log('Grade: '+ grade)
console.log('Final Score: '+finalScore)
