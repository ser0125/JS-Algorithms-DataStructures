    const radixSort = (arrNum) => {
        biggestDigit = Math.max(...arrNum).toString().length;
        for(let i = 0; i < biggestDigit; i++) {
            const buckets = Array.from({length: 10}, () =>[])
            console.log(buckets)
            for(let j = 0; j < arrNum.length; j++){
                let digit = getDigit(arrNum[j], i);
                
                buckets[digit].push(arrNum[j])
          /*       for(let x = 0; x < buckets[0].length ; x++) {
                    if(arrNum[j] % 10 === x) buckets[0][x] = arrNum[j]
                } */
            }
            arrNum = [].concat(...buckets)
        }
        return arrNum
    }

    function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

    console.log(radixSort([1000, 40, 55, 23, 1, 200, 3, 66]))