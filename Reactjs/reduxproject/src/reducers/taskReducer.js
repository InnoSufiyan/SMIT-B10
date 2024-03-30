const initialState = {
    tasks: []
};


// return {
//     type: 'DELETE_TASK',
//     payload: {
//         id: data
//     }
// }

const taskReducer = (state = initialState, action) => {  //   
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default taskReducer;