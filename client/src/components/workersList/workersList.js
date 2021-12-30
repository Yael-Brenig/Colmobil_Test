import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateName, deleteUser, updateUser, addUser } from '../../redux/actions';
import './workersList.css'
import Button from '@material-ui/core/Button';
import Popup from '../popup/popup';



function mapStateToProps(state) {
    return (
        { user: state.user }
    )
}
const mapDispatchToProps = (dispach) => ({
    updateName: (username) => dispach(updateName({ username })),
    deleteUser: (username) => dispach(deleteUser({ username })),
    updateUser: (username) => dispach(updateUser({ username })),
    addUser: (username) => dispach(addUser({ username }))
})


export default connect(mapStateToProps, mapDispatchToProps)(
    function WorkersList(props) {
        // const [usersList, setUsersList] = useState([{ name: "shmuel", age: "22", password: "3" }, { name: "yakov", age: "24", password: "4" }])
        const [isEdit, setIsEdit] = useState()
        const [selectedUser, setSelectedUser] = useState()


        const Delete = (user) => {
            props.user.workers.filter(el => el.password != user.password)
            props.deleteUser(user.password)
        }

        const [isPopupOpen, setIsPopupOpen] = React.useState(false);

        const handleClickOpen = (e, isEditMode, user) => {
            setIsPopupOpen(true);
            setIsEdit(isEditMode);
            setSelectedUser(user);
        };

        const handleClose = () => {
            setIsPopupOpen(false);
            setIsEdit(false);
        };
        const bgColors = ['#2C363F', '#E75A7C', '#F2F5EA', '#D6DBD2', '#BBC7A4'];

        useEffect(() => {

        }, [])
        return (
            <>
                <h1>Workers List:</h1>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Partcipant
                </Button>
                <div className="card-list">

                    {
                        props.user.workers?.length && props.user.workers.map((currentUser, key) => {
                            return (
                                <div key={key} className="card" style={{ backgroundColor: bgColors[Math.floor(Math.random() * (4 - 0) + 0)] }}>
                                    <h3>{currentUser.name}</h3>
                                    <p>joined in {currentUser.date}</p>
                                    <p>{currentUser.description}</p>
                                    <Button variant="contained" color="primary" className="input" onClick={(e) => handleClickOpen(e, true, currentUser)}>Edit</Button>
                                    <Button variant="contained" color="primary" className="input" onClick={() => Delete(currentUser)}>Delete</Button>

                                </div>
                            )
                        })
                    }
                </div>
                <Popup open={isPopupOpen} handleClose={handleClose} isEditMode={isEdit} selectedUser={selectedUser} />
            </>
        )
    }
)


