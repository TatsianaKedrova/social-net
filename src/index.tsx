import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogType = {
    id: number,
    name: string
}
export type DialogsType = Array<DialogType>;

export type MessageType = {
    id: number,
    message: string
}

export type MessagesType = Array<MessageType>

export type SinglePostType = {
    id: number,
    message: string,
    likesCount: number
};

export type PostsType = Array<SinglePostType>;

let dialogs: DialogsType = [
    {id: 1, name: 'Tatiana'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Vladimir'},
    {id: 5, name: 'Nadin'},
    {id: 6, name: 'Sasha'},
    {id: 7, name: 'Diana'}
];

let messages: MessagesType = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What is your goal for next 3 years?'},
    {id: 4, message: 'I plan to work as a FrontEnd developer remotely for US or Canada company.'},
    {id: 5, message: 'Good. How is your sweetheart'}
];

let posts: PostsType = [
        {id: 1, message: "How is your successful life?", likesCount: 12},
        {id: 2, message: "Everything needs care and attention, remember it!", likesCount: 15}
    ]

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
