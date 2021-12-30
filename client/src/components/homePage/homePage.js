import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateName, submit } from '../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom';
import Welcome from '../welcome/welcome';
import './homePage.css';

function mapStateToProps(state) {
    return (
        { user: state.user }
    )
}
const mapDispatchToProps = (dispach) => ({
    updateName: (username) => dispach(updateName(username)),
    submit: (username, password) => dispach(submit({ username, password }))
})


export default connect(mapStateToProps, mapDispatchToProps)(
    function UserDetails(props) {
        const [username, setusername] = useState();
        const [password, setpassword] = useState();
        const navigate = useNavigate();
        const setMessage = () => {
            alert("one or more details are not correct");
        }
        const submitLogin = async () => {
            let status;
            status = await props.submit(username, password)
            if (status == 400) {
                props.updateName(username)
                setMessage()
            }
            else {
                await props.updateName(username)
                navigate('/welcome');
            }
        }

        return props.user?.username ? (<Welcome />) : (<>
            <div className="home">
                <Card className="card justiy-content-center">
                    <div className="divColor">
                        <p className="span">Colmobil</p>
                    </div>
                    <CardContent>
                        <TextField id="standard-basic" label="username" className="input" onChange={(e) => setusername(e.target.value)} />
                        <br />
                        <TextField id="standard-basic" label="password" className="input" onChange={(e) => setpassword(e.target.value)} />
                        <br />
                        <Button variant="contained" color="primary" className="input" onClick={submitLogin}>Login</Button>
                    </CardContent>
                </Card>
            </div>
        </>)
    })