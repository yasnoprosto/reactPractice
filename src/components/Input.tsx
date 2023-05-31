import React, {ChangeEvent} from "react";

type InputPropsType = {
    title: string;
    onChangeInputHandler:(event: ChangeEvent<HTMLInputElement>)=>void
}
export const Input = (props: InputPropsType) => {



    return (
            <input value={props.title} onChange={props.onChangeInputHandler}/>
    );
}
