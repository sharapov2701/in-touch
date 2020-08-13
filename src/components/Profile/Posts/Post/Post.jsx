import React, { useEffect, useRef } from 'react'
import style from './Post.module.sass'

const Post = ({ body }) => {
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
        <div className={style.post}>
            <div className={style.image}>
                <img
                    ref={ref}
                    src='https://gamepedia.cursecdn.com/dota2_gamepedia/0/00/Invoker_icon.png?version=fb7516f0b780535fa8acfa9e8cb99266'
                />
            </div>
            <div className={style.body}>{body}</div>
        </div>
    )
}

export default Post
