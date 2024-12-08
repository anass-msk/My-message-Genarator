function generateRandomNum(num){
    return Math.floor(Math.random() *num)
}

const todayLack = {
    today : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ],
    yourLuck : ['Dumb luck', 'Luck from Motion' , 'Luck from Awareness' ,'Luck from Unique Character', 'so lucky'],
    youCan : ['Be grateful for the things you have', 'Make someone smile','Eat at least one healthy meal', 'Spend at least a few minutes outdoors', 'Say positive things to yourself in the mirror']

}


let personalLuck = []

// Iterate over the object
 // for(let prop in todayLack) {
   // let optionIdx = generateRandomNum(todayLack[prop].length)
  
// iterate over the object
for (let i in todayLack){
    let optionIdx = generateRandomNum(todayLack[i].length)
    switch(i){
        case 'today' :
            personalLuck.push(`today is " ${todayLack[i][optionIdx]}" . `)
            break
        case 'yourLuck' :
            personalLuck.push(`you luck today is " ${todayLack[i][optionIdx]}" . `)
            break
        case 'youCan' :
            personalLuck.push(`you can " ${todayLack[i][optionIdx]}" . `)
            break
        default:
            personalLuck.push('No info for today')
    }
}
function messageForToday (today){
    const formatted = personalLuck.join('\n')
    console.log(formatted)
}

messageForToday(personalLuck)