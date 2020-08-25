let rerenderEntireTree = () =>
    console.log('rerenderEntireTree should be implemented')

const state = {
    profilePage: {
        posts: [
            {
                id: 1,
                body: 'Ты не сравнишься со мной, ибо я несравненен',
                img:
                    'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
                name: 'Карл И.',
                time: '4:20'
            },
            {
                id: 2,
                body: 'Я - маяк мудрости в океане невежества',
                img:
                    'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
                name: 'Карл И.',
                time: '4:19'
            }
        ],
        friends: [
            {
                name: 'Антимаг',
                img:
                    'https://prodota.ru/uploads/news/imperavi/1594455672309.png',
                id: 2
            },
            {
                name: 'Квопа',
                img:
                    'data:image/jpeg;base64,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',
                id: 3
            },
            {
                name: 'Огр-маг',
                img:
                    'https://gamepedia.cursecdn.com/dota2_gamepedia/e/e0/Ogre_Magi_icon.png',
                id: 4
            },
            {
                name: 'Рубик',
                img:
                    'data:image/jpeg;base64,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',
                id: 5
            }
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {
                name: 'Антимаг',
                img:
                    'https://prodota.ru/uploads/news/imperavi/1594455672309.png',
                body: 'Я сменил(а) пол :D',
                id: 2
            },
            {
                name: 'Квопа',
                img:
                    'data:image/jpeg;base64,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',
                body: 'Поиграем на миду? ;)',
                id: 3
            },
            {
                name: 'Огр-маг',
                img:
                    'https://gamepedia.cursecdn.com/dota2_gamepedia/e/e0/Ogre_Magi_icon.png',
                body: 'Я то уж поумнее тебя буду',
                id: 4
            },
            {
                name: 'Рубик',
                img:
                    'data:image/jpeg;base64,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',
                body: 'Я не краду, я беру взаймы',
                id: 5
            }
        ],
        messages: [
            {
                id: 2,
                name: 'Антимаг',
                img:
                    'https://prodota.ru/uploads/news/imperavi/1594455672309.png',
                time: '4:19',
                body: 'Я сменил(а) пол :D'
            },
            {
                id: 1,
                name: 'Карл И.',
                img:
                    'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
                body: 'Ну и дура(к)',
                time: '4:20'
            }
        ]
    }
}

export const addPost = () => {
    const newPost = {
        id: Math.ceil(Math.random() * 10000),
        body: state.profilePage.newPostText,
        img:
            'https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266',
        name: 'Карл И.',
        time: '4:19'
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const changeNewPostText = text => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const subscribe = callback => {
    rerenderEntireTree = callback
}

export default state
