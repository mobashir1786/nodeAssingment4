import React from 'react';
import axios from 'axios'

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const email=event.target[0].value;
        let password=event.target[1].value;


        axios.post("http://localhost:5000/login",{email:email,password:password})
        .then(res => {
            console.log(res.data.message)
            alert(res.data.message)

        }).catch(e => {
            console.log(e);
        })
        // console.log(event);
    }
    return (
        <div>
            <form className='login' onSubmit={handleLogin}>
                <h1>login here</h1>
                <input className='input' type="email" placeholder='enter email' /><br />
                <input className='input' type="password" placeholder='password' /><br />
                <input className='btn' type="submit" />
            </form>
        </div>
    );
}

export default Login;
