export function drawElements<T>(source: Array<T>, number: number) {
    if (source.length < number) {
        return source;
    }
    const indexes = new Set<number>();
    while (indexes.size < number) {
        indexes.add(Math.floor(Math.random() * source.length));
    }
    return [...indexes].map(index => source[index]);
}

export function drawElement<T>(source: Array<T>) {
    const index = Math.floor(Math.random() * source.length);
    return source[index];
}

export function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}