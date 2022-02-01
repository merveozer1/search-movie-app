const SORT_VAL = "SORT_VAL"
const GENRE_FILTER = "GENRE_FILTER"
const REMOVE_GENRE_FILTER = "REMOVE_GENRE_FILTER"
const DATE_FROM_FILTER = "DATE_FROM_FILTER"
const DATE_TO_FILTER = "DATE_TO_FILTER"
const GET_SORT_FILTER_RESULTS = "GET_SORT_FILTER_RESULTS"



export const getSortVal = (value) => ({
    type: SORT_VAL,
    payload: value
})

export const getGenreFilter = (value) => ({
    type: GENRE_FILTER,
    payload: value
})

export const removeGenreFilter = (value) => ({
    type: REMOVE_GENRE_FILTER,
    payload: value
})

export const getFromDateFilter = (startDate) => ({
    type: DATE_FROM_FILTER,
    payload: startDate
})

export const getToDateFilter = (endDate) => ({
    type: DATE_TO_FILTER,
    payload: endDate
})

export const getSortFilterResult = (movies) => ({
    type: GET_SORT_FILTER_RESULTS,
    payload: movies
})


export const sortFilterReducer = (sortFilter = {sortingValue: "", filteringGenres: [], startDate:"", endDate:"", results: [] }, action) => {
    switch (action.type) {
        case SORT_VAL:
            return { ...sortFilter, sortingValue: action.payload }
        case GENRE_FILTER:
            return {...sortFilter, filteringGenres: [...sortFilter.filteringGenres, action.payload]}
        case REMOVE_GENRE_FILTER:
            return {...sortFilter, filteringGenres: sortFilter?.filteringGenres?.filter(item => item !== action.payload)}
        case DATE_FROM_FILTER:
            return {...sortFilter, startDate: action.payload}
        case DATE_TO_FILTER:
            return {...sortFilter, endDate: action.payload}
        case GET_SORT_FILTER_RESULTS:
            return {...sortFilter, results: action.payload}
        default:
            return sortFilter
    }
}