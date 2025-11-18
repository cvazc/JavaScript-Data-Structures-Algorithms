// Drop Non-Dominants
const logItems5 = (n: number) => {
    // Big O(n2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

    // Big O(n)
    for (let k = 0; k < n; k++) {
        console.log(k)
    }

    // Big O(n2 + n)
    // Big O(n2)
}

logItems5(10)