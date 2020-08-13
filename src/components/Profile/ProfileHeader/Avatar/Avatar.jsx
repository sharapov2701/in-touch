import React, { useRef, useEffect } from 'react'
import style from './Avatar.module.sass'

const Avatar = () => {
    const ref = useRef(null)

    useEffect(() => {
        const img = ref.current
        if (img) {
            if (img.offsetHeight > img.offsetWidth) {
                img.style.width = '100%'
            } else {
                img.style.height = '100%'
            }
        }
    })

    return (
        <div className={style.photo}>
            <img
                ref={ref}
                src='https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266'
            />
        </div>
    )
}

export default Avatar
