BASE_URL: `http://124.221.249.219:8000/api`

## GET `/recommendations`

推荐

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

歌曲搜索

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

歌曲榜单

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

## GET `/hot`

热门搜索，返回值为数组，数组的每个元素即歌曲名

### Response

```ts
type HotResponse = Array<string>
```