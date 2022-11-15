import React from 'react';
import axios from 'axios';

const Signup = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const number = event.target[3].value;

        console.log(name);


        axios.post("http://localhost:5000/signup",{name:name,email:email,password:password,number:number})
        .then(res => {
            console.log(res)
            alert(res.data.message)
        }).catch(e => {
            console.log(e);
        })
        // console.log(event);


        // fetch("http://localhost:5000/",
        // {
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        //     method: "POST",
        //     body: JSON.stringify({a: 1, b: 2})
        // })
        // .then(function(res){ console.log(res) })
        // .catch(function(res){ console.log(res) })
    }
    return (
        <div>
            {/* {console.log("user", user)} */}
            <form className='signup' onSubmit={handleRegister}>
                <h1>Register here</h1>
                <input className='input' type="text" placeholder='enter name' /><br />
                <input className='input' type="email" placeholder='enter email' /><br />
                <input className='input' type="password" placeholder='password' /><br />
                <input className='input' type="number" placeholder='number' /><br />
                <button className='btn' type='submit'>signup</button>
            </form>
        </div>
    );
}

export default Signup;
