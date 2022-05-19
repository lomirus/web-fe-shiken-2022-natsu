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