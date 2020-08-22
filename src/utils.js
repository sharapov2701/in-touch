export const resize = ref => {
    const img = ref.current
    if (img) {
        if (img.offsetHeight > img.offsetWidth) {
            img.style.width = '100%'
        } else {
            img.style.height = '100%'
        }
    }
}
