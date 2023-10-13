// Fibonacci Sequence

let series = [0, 1];

for (let i = 2; i < 10; i++) {
    series[i] = series[i - 1] + series[i - 2]; 
}

console.log(series)