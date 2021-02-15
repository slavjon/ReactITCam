import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello Jony', likes: 19 },
            { id: 2, message: 'How are you?', likes: 12 }
        ],
        newPostText: 'text in textare da'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Masha' },
            { id: 4, name: 'Alexa' },
            { id: 5, name: 'Lena' },
            { id: 6, name: 'Valera' }
        ],
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Shatafaka!!!a' },
            { id: 4, message: 'Hi! Alexa' },
            { id: 5, message: 'Lena How are you?' },
            { id: 6, message: 'Valera Shatafaka!!' }
        ]
    }
}

window.state = state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: 1
    };
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;