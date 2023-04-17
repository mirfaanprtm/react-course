export const onChangeText = (setState) => (e) => {
    setState(e.target.value)
}

export const onChangeFile = (setState) => (e) => {
    if(e.target.value){
        setState(e.target.value)
    }
}