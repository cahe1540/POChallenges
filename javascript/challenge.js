function longestNonRepeat(input){
    let ans = [];
    let ptrA;
    for(let i = 0; i< input.length; i++){
        let cur = "";
        ptrA = i;
        let set = new Set();
        while(ptrA <= input.length){
            if(!set.has(input[ptrA])) {
                set.add(input[ptrA]);
                cur += input[ptrA];
                if(ptrA + 1 === input.length) ans.push(cur);
            } else{
                i = ptrA;
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

const tests = ["abcabcbb", "aaaaaa", "abcde", "abcda", "", "a", "ab", "abcabchigj", "jdkfjalkfsafslkgaglfqjrjerioqrwteroignreklanvdklfafjalkfjasflkagjalgajaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcdefghijklmnopqrstuvwxyz"];

tests.forEach(word => {
    console.log(longestNonRepeat(word));
});