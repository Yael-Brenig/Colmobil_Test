export function updateName(username) {
    return { type: 'UPDATE_NAME', payload: username };
}
export function submit(objUser) {
    return { type: 'SUBMIT', payload: objUser };
}
export function deleteUser(objUser) {
    return { type: 'DELETE_USER', payload: objUser };
}
export function updateUser(objUser) {
    return { type: 'UPDATE_USER', payload: objUser };
}
export function addUser(objUser) {
    return { type: 'ADD_USER', payload: objUser };
}
export function setWorkers(List) {
    return { type: 'SET_WORKERS', payload: List };
}