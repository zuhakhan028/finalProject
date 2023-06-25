export interface weeklyContent {
    page: number,
    results: [data,total_pages,total_results]

}

export interface data {
    results: [[resultsdata]]
}

export interface resultsdata {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: [],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface requestOptions {
    method: 'GET',
    headers: {},
    redirect: 'follow'
}

export interface total_pages {
    total_pages: number
}

export interface total_results {
    total_results: number
}
