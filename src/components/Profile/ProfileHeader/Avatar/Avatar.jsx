import React, { useRef, useEffect } from 'react'
import style from './Avatar.module.css'
import { resize } from '../../../../utils'

const Avatar = () => {
    const img = useRef()
    useEffect(() => resize(img))

    return (
        <div className={style.photo}>
            <img
                ref={img}
                src='https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266'
            />
        </div>
    )
}

export default Avatar
