export const getLocalStorage = (necessary: string) => {
    let itemFromLocalStorage = localStorage.getItem(necessary);
    if (itemFromLocalStorage) return JSON.parse(itemFromLocalStorage)
    
}

export const setLocalStorage = (payloadForLocalStorage: string, nameForItemLocalStorage: string) => {
    const dataToStringRegister = JSON.stringify(payloadForLocalStorage)
    localStorage.setItem(nameForItemLocalStorage, dataToStringRegister);
}