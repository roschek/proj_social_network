import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let store = {
    _state: {

            postsData: [{post: "First post", likes: "14", id: '1'}, {
                post: "Second post",
                likes: "42",
                id: '2'
            }, {post: "Third post", likes: "2", id: '3'}],
            newPostText: '',

            newMessage: '',
            personData: [
                {
                    name: 'Вася Вейдер',
                    avatar: 'https://pbs.twimg.com/profile_images/1006069789008236546/L49QQYD-.jpg',
                    id: 1
                }, {
                    name: 'Петя',
                    avatar: 'https://vraki.net/sites/default/files/inline/images/1551511862_48.jpg',
                    id: 2
                }, {
                    name: 'Вова',
                    avatar: 'https://pristor.ru/wp-content/uploads/2019/11/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA007-1024x642.jpg',
                    id: 3
                }, {
                    name: 'Ира',
                    avatar: 'https://cdn.piccollage.com/imageassets/220bec82f49c6277dcea93ca309ecab4/original.png',
                    id: 4
                },
                {
                    name: 'Макс',
                    avatar: 'https://i03.fotocdn.net/s125/228eefa18e2fe9df/user_xl/2852375426.jpg',
                    id: 5
                }, {name: 'Катя', avatar: 'https://f1.upet.com/n_LoXDrTFq2l_2.jpg', id: 6}, {
                    name: 'Alexander',
                    avatar: 'https://i02.fotocdn.net/s122/d5213f45d460ce21/user_xl/2799767417.jpg',
                    id: 7
                },
            ],
            messagesData: [{message: 'Hi', id: 1}, {message: 'Hello', id: 2}, {
                message: 'How are you?',
                id: 3
            }, {message: 'Good Time!', id: 4},
                {message: 'It\'s a good day', id: 5}]


    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state = profileReducer(this._state, action)
        this._state = dialogsReducer(this._state, action)
        this._callSubscriber(this._state)
    }
}


export default store
window.store = store