export const todosReducer = (state : string[] = [], action : string) => {
    return [...state, action];
}