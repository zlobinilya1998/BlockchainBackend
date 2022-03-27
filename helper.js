import fetch from "node-fetch";

export const OK = (result,res) => {
    res.status(200).send(SuccessResult(result));
}
export const DefaultGridMapping = (items) => ({items, itemsNumber: items.length})
export const SuccessResult = (result) => ({result, isSuccess: true})
export const fetchUrl = async (url) => {
    return await fetch(url).then(res => res.json());
}
