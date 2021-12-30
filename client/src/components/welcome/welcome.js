import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './welcome.css'


function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps)(
    function Welcome(props) {
        const navigate = useNavigate();
        return (
            <div>
                <h1 className="span">hello {props.user.username}</h1>
                <Button variant="contained" color="primary" className="input" onClick={() => navigate('/workersList')}>WorkersList</Button>
            </div >
        )
    }
)


