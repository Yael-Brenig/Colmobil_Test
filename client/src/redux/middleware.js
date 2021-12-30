import * as actions from './actions'
export const middlewareFunctions = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SUBMIT') {
        // var userName = getState().userReducer.user.firstName
        // dispatch(actions.setCompanyName(newCompany));
        return new Promise(function (resolve, reject) {
            fetch(`http://localhost:3001/checkUser/${action.payload.username}/${action.payload.password}`, {
                method: 'GET',
            }).then(response => response.json()).then(data => {
                data.user ? resolve(200) : resolve(400)
            }).catch(err => {
                console.log(err);
            });
        })
    }

    if (action.type === "DELETE_USER") {
        fetch(`http://localhost:3001/deleteUser/${action.payload}`, {
            method: 'DELET',
        }).then(response => response.json()).then(data => {
            console.log(data)
            // dispatch(actions.setCompanyName(newCompany));

        })

    }

    if (action.type === "GET_ALL_USERS") {
        fetch(`http://localhost:3001/getAllUsers`, { method: 'GET' })
            .then(response => response.json())
            .then(result => {
                dispatch(actions.setWorkers(result))
            })
            .catch(error => console.log('error', error));
        // dispatch(actions.setCompanyName(newCompany));
    }

    if (action.type === "UPDATE_USER") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: action.payload,
            redirect: 'follow'
        };
        fetch(`http://localhost:3001/updateUser/`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    if (action.type === "ADD_USER") {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: action.payload,
            redirect: 'follow'
        };
        fetch(`http://localhost:3001/createUser/`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
}