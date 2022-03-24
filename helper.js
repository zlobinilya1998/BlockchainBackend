export const DefaultGridMapping = (items) => ({items,itemsNumber: items.length})
export const SuccessResult = (result) => ({ result,isSuccess: true})
export const ErrorHandler = async (cb,res) => {
    try {
        const result = await cb();
        res.send(SuccessResult(result));
        console.log(result)
    } catch (e) {
        res.status(400).send({message: 'Что-то пошло не так, попробуйте позже',e})
    }
}
