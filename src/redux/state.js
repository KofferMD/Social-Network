let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {
    profilePage: {
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
                title: "Обо мне",
                descr: "Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56."
            },
            {
                id: 2,
                title: "Обо мне",
                descr: "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy."
            },
            {id: 3, title: "Обо мне", descr: "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge."}
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
        newPostText: 'Что у вас нового?'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, message: 'Nikolay Vinokurov'},
            {id: 2, message: 'Evald Grib'},
            {id: 3, message: 'Vasiliy Osipov'},
            {id: 4, message: 'Robert Ivanov'},
            {id: 5, message: 'Nikita Prokopiev'},
        ],
        messages: [
            {id: 1, message: "Привет, как дела?"},
            {id: 2, message: "Привет, сегодня тусим!"},
            {id: 3, message: "Го в бар"},
            {id: 4, message: "Привет, как дела?"},
            {id: 5, message: "Пошли в музей"}
        ],
        newMessageText: "Напишите сообщение"
    }
}

window.state = state;

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;