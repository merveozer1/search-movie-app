import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import data from "../../login.json"
import { validateUser } from "../../reduxStore/users"


function Login() {
    const navigate = useNavigate()
    const { user } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(user)
    const [userData, setUserData] = useState({
        userName: "",
        password: ""
    })
    useEffect(() => {
        if (user.userLogin) {
            (navigate("/profile"))
        }
    }, [user, navigate])
    //login
    const submitForm = (e) => {
        console.log(userData)
        e.preventDefault();
        dispatch(validateUser(userData.userName, userData.password))
        if (data.users.find((user) => user.userName === userData.userName && user.password === userData.password)) {
            localStorage.setItem('isUserLoggedIn', true);
            console.log('logged in');
        } else {
            console.log('giremedin :P');
        }
    }
    // const handleChangeOfInput = (e) => {
    //     const newData = { ...userData }
    //     newData[e.target.id] = e.target.value;
    //     setUserData(newData);
    // }
    //end of login 

    return (
        <>
            <div className="my-5 p-3 justify-content-center">
                <div style={{ textAlign: "center" }}>Login Info</div>
                <form onSubmit={(e) => submitForm(e)}>
                    <input onChange={(e) => setUserData({ ...userData, userName: e.target.value })} type="text" id="userName" placeholder="Username"></input>
                    <br />
                    <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="password" id="password" placeholder="Password"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;