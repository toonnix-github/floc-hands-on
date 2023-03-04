
const coinExchange = (coinInStock: number[], moneyAmount: number ) => {
    const answer = recursiveCoinCount(coinInStock, moneyAmount);    
    return !isFinite(answer) ? -1 : answer;
}

const recursiveCoinCount = (coinInStock: number[], moneyAmount: number, countStat: {[key: number]: number} = {}) => {
    
    let lestCoin: number = Infinity;
    if(countStat[moneyAmount] !== undefined) {
        return countStat[moneyAmount]
    };
    if(moneyAmount === 0) {
        return 0
    };
    if(moneyAmount < 0) {
        return Infinity
    };

    for(let coin of coinInStock) {
        const moneyAmountLeft = moneyAmount - coin;
        lestCoin = Math.min(lestCoin, recursiveCoinCount(coinInStock, moneyAmountLeft, countStat) + 1);
    }

    countStat[moneyAmount] = lestCoin;    
    return countStat[moneyAmount];
}

console.log(coinExchange( [1, 2, 5, 7, 9, 11], 10));
console.log(coinExchange( [1, 5, 7, 9, 11], 25));
console.log(coinExchange( [1, 5, 7, 9, 11], 14));
console.log(coinExchange( [7, 9], 20));
