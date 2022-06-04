const katakanas = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ヤ", "ユ", "ヨ", "ワ",
    "ッ", "ッ", "ッ", "ッ", "ッ",
    "ー", "ー", "ー", "ー", "ー",
    "キャ", "キュ", "キョ",
    "シャ", "シュ", "ショ",
    "チャ", "チュ", "チョ",
    "ニャ", "ニュ", "ニョ",
    "リャ", "リュ", "リョ",
    "ジャ", "ジュ", "ジョ",
    "ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ",
    "ン"
]

export function drawElements<T>(source: Array<T>, number: number): T[] {
    if (source.length < number) {
        return source;
    }
    const indexes = new Set<number>();
    while (indexes.size < number) {
        indexes.add(Math.floor(Math.random() * source.length));
    }
    return [...indexes].map(index => source[index]);
}

export function drawElement<T>(source: Array<T>): T {
    const index = Math.floor(Math.random() * source.length);
    return source[index];
}

export function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomKatakanaWord(): string {
    let word = "ン";
    while (word.startsWith("ッ") || word.startsWith("ー") || word.startsWith("ン")) {
        word = Array.from({ length: randomInteger(2, 8) },
            () => drawElement(katakanas)).join("");
    }
    return word;
}
