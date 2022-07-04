export const getQuestion = async () => {
    const res = await fetch("http://api.zeon.ltd:81/api_2/direction/list/")
    return res.json()
}

export const getAnswers = async () => {
    const res = await fetch("http://api.zeon.ltd:81/api_2/answer/list/")
    return res.json()
}