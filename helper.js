export const DefaultGridMapping = (items) => ({items, itemsNumber: items.length})
export const SuccessResult = (result) => ({result, isSuccess: true})
export const fetchUrl = async (url) => {
    return await fetch(url).then(res => res.json());
}
export const ErrorHandler = async (cb, res) => {
    try {
        const result = await cb();
        res.send(SuccessResult(result));
        console.log(result)
    } catch (e) {
        console.log(e)
        res.status(403).send({message: 'Что-то пошло не так, попробуйте позже', e})
    }
}
