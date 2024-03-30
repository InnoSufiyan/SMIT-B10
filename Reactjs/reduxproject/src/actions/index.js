export const addTask = (data) => {  //task
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime(),
            data    //data: task
        }
    }
}
export const deleteTask = (data) => {    //sadsadsaewr234252
    return {
        type: 'DELETE_TASK',
        payload: {
            id: data
        }
    }
}