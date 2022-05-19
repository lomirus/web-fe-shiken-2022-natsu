BASE_URL: ``

## GET `/recommendations`

### Response

```ts
type RecommendationsResponse = {
    /** 官方歌单 */
    offical: Array<{
        cover: string,
        title: string,
        views: number,
    }>,
    /** 达人歌单 */
    tatsujin: Array<{
        cover: string,
        title: string,
        views: number,
    }>,
    /** 专区 */
    column: Array<{
        title: string,
        description: string,
        icon: string,
        background: string,
    }>,
};
```

## GET `/search?keyword`

### Request

```ts
type SearchRequest = {
    keyword: string
}
```

### Response


```ts
// Success
type SearchResponse = Array<{
    title: string,
    artist: Array<string>,
}>

// Failure
type SearchResponse = string
```

## GET `/ranking`

### Response

```ts
type RankingResponse = Array<{
    title: string,
    top3: Array<{
        title: string,
        artist: Array<string>,
    }>
    cover: string,
    views: number,
    update_frequence: '日' | '周'
}>
```