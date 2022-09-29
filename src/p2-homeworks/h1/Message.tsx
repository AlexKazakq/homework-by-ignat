import React from 'react'
import s from "./../../p2-homeworks/h1/Message.module.css"

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.container}>
            <div className={s.divImg}><img src={props.avatar} className={s.img}/></div>
            <>
                <div className={s.textBox}>
                    <div className={s.name}>{props.name}</div>
                    <div><span className={s.text}>{props.message}</span> <span className={s.time}>{props.time}</span></div>
                </div>
            </>
        </div>
    )
}

export default Message
