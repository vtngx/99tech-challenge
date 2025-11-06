// 3 Methods to sum to n

const sumToN = (n: number, method: 1 | 2 | 3): number => {
    if (n <= 1) {
        return n;
    }
    switch (method) {
        case 1:
            // array methods
            return Array
                .from({ length: n }, (_, i) => i + 1)
                .reduce((acc, curr) => acc + curr, 0);
        case 2:
            // recursive
            return n + sumToN(n - 1, 2);
        case 3:
            // formula
            return (n * (n + 1)) / 2;
        default:
            return -1;
    }
}

// Example usage:
console.log(sumToN(5, 1)); // Output: 15
console.log(sumToN(5, 2)); // Output: 15
console.log(sumToN(5, 3)); // Output: 15