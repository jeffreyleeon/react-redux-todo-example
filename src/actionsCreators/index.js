import actions from '../actions';

export function addTodo(text) {
    return {
        type: actions.addTodo,
        text,
    };
}

export function toggleTodo(id) {
    return {
        type: actions.toggleTodo,
        id,
    };
}

export function setFilterType(filterType) {
    return {
        type: actions.setFilterType,
        filterType,
    };
}