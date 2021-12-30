import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addUser, updateUser } from '../../redux/actions';

function mapStateToProps(state) {
    return (
        { user: state.user }
    )
}
const mapDispatchToProps = (dispach) => ({
    updateUser: (username, descriptin) => dispach(updateUser({ username, descriptin })),
    addUser: (username, descriptin) => dispach(addUser({ username, descriptin }))
})

export default connect(mapStateToProps, mapDispatchToProps)(function SimpleDialogDemo(props) {

    const { handleClose, open, isEditMode, selectedUser = {} } = props;
    const [username, setUsername] = useState(selectedUser.name);
    const [descriptin, setDescriptin] = useState(selectedUser.description);
    const handleSave = () => {
        if (isEditMode) {
            props.updateUser(username, descriptin);
        } else {
            props.addUser(username, descriptin);
        }
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} open={open} >
            <div style={{ padding: '30px' }}>
                <DialogTitle>{isEditMode ? 'Edit User' : 'Add particiapant'}</DialogTitle>
                <TextField defaultValue={selectedUser.name} value={username} id="standard-basic" label="username" className="input" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <TextField defaultValue={selectedUser.description} value={descriptin} id="standard-basic" label="password" className="input" onChange={(e) => setDescriptin(e.target.value)} />
                <br />
                <Button variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="outlined" onClick={() => handleSave(username, descriptin)}>
                    Save
                </Button>
            </div>
        </Dialog>
    );
})
