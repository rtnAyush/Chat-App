// for useReducer parameters
export const initialState = {
    apiUrl: "https://creepy-newt-handbag.cyclic.app",
    user: null,
}

export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'REMOVE_USER':
            return {
                ...state,
                user: null
            }

        default:
            return state;
    }
}

export default reducer;