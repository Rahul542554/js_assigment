function rotleft(arr, rotations) {
    const rotatedArray = arr.concat();
    for (let i = 0; i < rotations; i++) {
        const frontItem = rotatedArray.shift();
        rotatedArray.push(frontItem);
    }
    return rotatedArray;
}
const numRotation = 3;
const sampleArray = [1, 2, 3, 4, 5, 6, 7];

console.log(rotleft(sampleArray, numRotation));