
let prices=[250,645,300,900,50];
let len=prices.length;

for(i=0;i<len;i++){
    a=prices[i]/10
    prices[i]-=a
}
console.log(prices);
