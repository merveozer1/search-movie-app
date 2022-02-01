const VALIDATE_USER = "VALIDATE_USER"
const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES"
const ADD_FAV_MOVIES = "ADD_FAV_MOVIES"
const LOGOUT_USER = "LOGOUT_USER"

export const validateUser = (username, password) => ({
    type: VALIDATE_USER,
    payload: { username, password }
})

export const logoutUser = () => ({
type: LOGOUT_USER,
})
export const addSeenList = (movieId, movieTitle) => ({
    type: ADD_SEEN_MOVIES,
    payload: {
        id: movieId,
        title: movieTitle
    }
})

export const addFavList = (movieId, movieTitle) => ({
    type: ADD_FAV_MOVIES,
    payload: {
        id: movieId,
        title: movieTitle,
    }
})
const users = (user = {
    "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    "username": "merve",
    "password": "2345",
    "socials": {
        "twitter": "https://twitter.com/",
        "instagram": "https://www.instagram.com/"
    },
    "seenList": {
        "seenFilms": [
        ],
        "totalCount": 0
    },
    "favoritesList": {
        "favoritesFilms": [
        ],
        "totalCount": 0
    },
    "joinDate": "December 2021"
}
, action) => {
    switch (action.type) {
        case VALIDATE_USER:
            return action.payload.username === user.username && action.payload.password === user.password && { ...user, userLogin: true } 
            case LOGOUT_USER:
                return {...user, userLogin : false}
            case ADD_FAV_MOVIES:
                return !user.favoritesList.favoritesFilms.includes(action.payload) ?
                    { ...user, favoritesList: { favoritesFilms: [...user.favoritesList.favoritesFilms, action.payload], totalCount: user.favoritesList.totalCount + 1 } } : user
            case ADD_SEEN_MOVIES:
                return !user.seenList.seenFilms.includes(action.payload) ?
                    { ...user, seenList: { seenFilms: [...user.seenList.seenFilms, action.payload], totalCount: user.seenList.totalCount + 1 } } : user
            default:
                return user
        }
    }
    
    export { users }
    