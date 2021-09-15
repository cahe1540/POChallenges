function longestNonRepeat(input){
    let ans = [];
    let set = new Set();
    let ptrA;
    for(let i = 0; i< input.length; i++){
        let cur = "";
        ptrA = i;
        while(ptrA <= input.length){
            if(!set.has(input[ptrA])) {
                set.add(input[ptrA]);
                cur += input[ptrA];
                if(ptrA + 1 === input.length) ans.push(cur);
            } else{
                i = ptrA+1;
                ptrA = input.length+1;
                ans.push(cur);
            }
            ptrA++;
            i++;
        }
    }
    let solution = '';
    for(let word of ans){
        if(word.length > solution.length) solution = word;
    }
    return solution;
}
const word = "abcda";
console.log(longestNonRepeat(word));