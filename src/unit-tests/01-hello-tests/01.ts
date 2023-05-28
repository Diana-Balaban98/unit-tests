export function sum(a: number, b: number) {
    return a + b
}

export function multiply(a: number, b: number) {
    return a * b
}




export function splitIntoWords(sentense: string) {
    const words = sentense.split(" ")

    return words
        .filter(el => el !== "")
        .map(w => w.replace("!", ""));
}

