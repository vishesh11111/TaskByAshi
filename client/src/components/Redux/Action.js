export const DataStr = {
    getData: "GETDATA",
    getCartLength: "GETCart"
}

export const GetDataAction = (data) => {
    return {
        type: DataStr.getData,
        payload: data
    }
}

export const GetCartLength = (data) => {
    return {
        type: DataStr.getCartLength,
        payload: data
    }
}