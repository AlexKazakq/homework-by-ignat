import React, {ChangeEvent, KeyboardEvent} from "react"
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyUpHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyUpHandler} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : s.input
    const buttonDisabled = !!error


    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyUp={onKeyUpHandler}/>
            <button disabled={buttonDisabled}  className={s.addButton} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorText}> {error} </div>
        </div>
    )
}

export default Greeting
