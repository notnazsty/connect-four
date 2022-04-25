export default function flatten2DArray<T>(arr: T[][]): T[] { // (A)
    const out : T[] = [];

    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i];

        for (let j = 0; j < subArr.length; j++) {
            const element = subArr[j];
            
            out.push(element)
        }
        
    }
    return out;
}