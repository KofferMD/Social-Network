import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_STATUS = 'SET_STATUS';

let initialState = {
    friends: [
        {id: 1, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Василий"},
        {id: 2, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Роберт"},
        {id: 3, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Святослав"},
        {id: 4, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Владислав"},
        {id: 5, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Александр"},
        {id: 6, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Геральт"}
    ],
    friendsOnline: [
        {id: 1, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Николай"},
        {id: 2, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Геннадий"},
        {id: 3, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Владислав"},
        {id: 4, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Михаил"},
        {id: 5, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Никита"},
        {id: 6, src: "https://mywebicons.ru/i/png/28ff2a7323a2593b643b804d0493c4fd.png", name: "Эвальд"}
    ],
    info: [
        {
            id: 1,
            title: "Обо мне :",
            descr: "",
            social: "Социальные сети :",
        }
    ],
    additional: [
        {id: 1, number: 70, descr: "друзей"},
        {id: 2, number: 60, descr: "подписчисков"},
        {id: 3, number: 9, descr: "фотографий"},
        {id: 4, number: 5, descr: "видеозаписей"}
    ],
    posts: [
        {id: 1, message: "Hey, body", likesCount: 12},
        {id: 2, message: "It's my first post!", likesCount: 42},
        {id: 3, message: "Good for you!", likesCount: 23},
        {id: 4, message: "Good for you!", likesCount: 43}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]
            }

        case SET_STATUS:
            return {...state, status: action.status}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

export let addPost = (newPostText) => ({type: ADD_POST, newPostText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}


export default profileReducer;