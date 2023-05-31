import React, {ChangeEvent, useState} from "react";
import "./App.css";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export const App = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ]);

    const [title, setTitle] = useState("");

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    };

    const callback = () => {
        addMessage(title);
        setTitle("")
    };

    return (
        <div className={"App"}>
            <Input title={title} onChangeInputHandler={onChangeInputHandler}/>
            <Button name={"+"} callback={callback}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                );
            })}
        </div>
    );
};