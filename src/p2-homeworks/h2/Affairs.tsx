import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from "./HW2"
import s from './Affairs.module.css'

export type AffairsPropsType = { // need to fix any
    data: AffairType[],
    setFilter: (name: FilterType) => void,
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.container}>

            <div className={s.affairsWrapper}>{mappedAffairs}</div>


                <button className={s.filterButton} onClick={setAll}>All</button>
                <button className={s.filterButton} onClick={setHigh}>High</button>
                <button className={s.filterButton} onClick={setMiddle}>Middle</button>
                <button className={s.filterButton} onClick={setLow}>Low</button>

        </div>
    )
}

export default Affairs
