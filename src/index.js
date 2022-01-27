module.exports = function check(str, bracketsConfig) {
    console.log(` ---------- ALGORITM START ---------- `)
    let OPEN_BRACKETS = bracketsConfig.map(el=>el[0])
    let BRACKETS_PAIR = {};
    let countSameBrackets = 0;
    for (let i=0; i<bracketsConfig.length;i++){
        let currKey = bracketsConfig[i][1]
        let currValue = bracketsConfig[i][0]
        BRACKETS_PAIR[currKey]=currValue;
        if (currKey == currValue) {countSameBrackets +=1}
    }
    console.log(`string is ${str}`)
    console.log(`OPEN_BRACKETS = ${OPEN_BRACKETS}`)
    console.log(`BRACKETS_PAIR = `)
    console.log(BRACKETS_PAIR)
    console.log(`countSameBrackets = ${countSameBrackets}`)

    

    function isBracketsOk(str2) {
        let stack = [];
    
        for (let i = 0; i < str2.length; i++) {
          let currentSymbol = str2[i];
          console.log(`currentSymbol = ${currentSymbol}`)
          if (OPEN_BRACKETS.includes(currentSymbol)) {
            console.log(`OPEN_BRACKETS includes currentSymbol = ${currentSymbol}`)
            // case when same brackets
            if (countSameBrackets>0) {
                if (stack.length==0) {
                    stack.push(currentSymbol)
                } else {
                    if ((stack[stack.length-1]==currentSymbol)) { 
                        console.log(`key = value = |`);
                        stack.pop()
                    } else {stack.push(currentSymbol)}
                } 
            } 
            // case when same brackets
            else {stack.push(currentSymbol);}
            
            console.log(`OPEN_BRACKETS iteration close and stack is ${stack} `)
          } else {
            if (stack.length === 0) {
              return false;
            }
    
            let topElement = stack[stack.length - 1];
    
            if (BRACKETS_PAIR[currentSymbol] === topElement) {
              stack.pop();
            } else {
              return false;
            }
          }
        }
        let isBracketsOkRes = (stack.length === 0)
        console.log(stack)
        console.log(isBracketsOkRes)
        return isBracketsOkRes;
    }
    console.log(` ---------- ALGORITM END ---------- `)
    return isBracketsOk (str);
    
}
