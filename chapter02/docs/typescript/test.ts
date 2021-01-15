function getLargesNumber(arr: Array<number>): number {
    let result :number=0;
    for(let index :number = 0; index <  arr.length; index++) {
        if(result < arr[index]) {
            result = arr[index];
        }
    }

    return result;
}

let score: Array<number>  = [1,2,3,4,5,6];
let highestScore: number = getLargesNumber(score);


