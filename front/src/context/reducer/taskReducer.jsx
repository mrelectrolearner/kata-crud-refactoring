function taskReducer(state, action) {
    switch (action.type) {
        case 'update-item':
            const taskUpItem = state.task;
            const listUpdateEdit = taskUpItem.list.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                }
                return item;
            });
            taskUpItem.list = listUpdateEdit;
            taskUpItem.item = {};
            return { ...state, task: taskUpItem };
        case 'delete-item':
            const taskUpDelete = state.task;
            const listUpdate = taskUpDelete.list.filter((item) => {
                return item.id !== action.id;
            });
            taskUpDelete.list = listUpdate;
            return { ...state, task: taskUpDelete };
        case 'update-list':
            const taskUpList = state.task;
            taskUpList.list = action.list;
            return { ...state, task: taskUpList };
        case 'edit-item':
            const taskUpEdit = state.task;
            taskUpEdit.item = action.item;
            return { ...state, task: taskUpEdit };
        case 'add-item':
            const taskUp = state.task.list;
            taskUp.push(action.item);
            return { ...state, task: { list: taskUp, item: {} } };
        default:
            return state;
    }
}
export { taskReducer }
