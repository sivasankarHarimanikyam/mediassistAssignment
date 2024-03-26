import {useState} from "react";

import './index.css'
//import SuccessTab from "../SuccessTab";

const UserDetails = ()=>{
    const [userName,setUserName] =useState("");
    const [userPassword,setUserPassword] =useState("");
    const [userEmail,setUserEmail] =useState("");
    const [userPhoneNum,setUserPhoneNum] =useState("");
    const [errorSignal,setErrorSignal] = useState(false);

    const onChangeUserName = (event) =>setUserName(event.target.value);

    const onChangUserPassword = (event) => setUserPassword(event.target.value);

    const onChangeUserEmail = (event) => setUserEmail(event.target.value);

    const onChangeUserPhoneNum = (event) => setUserPhoneNum(event.target.value);

    const onLoginDetails = (event) =>{
        event.preventDefault();
        if (userEmail !== "" & userPassword !== "" & userEmail !== "" & userPassword !== ""){
            alert("Success registration");
            setErrorSignal(false);
            setUserName("");
            setUserEmail("");
            setUserPassword("");
            setUserPhoneNum("");
        }else{
            setErrorSignal(true);
        }
    }

    return(
        <div className="login-section">
            <div className="login-card">
            <form className="login-form" onSubmit={onLoginDetails}>
                <label htmlFor="username" className="login-labels">
                    USERNAME
                </label>
                <input type="text" id="username" value={userName} className="user-login-box" placeholder="Enter Your Full Username" onChange={onChangeUserName}/>
                <label htmlFor="userpassword" className="login-labels">
                    PASSWORD
                </label>
                <input type="text" id="userpassword" value={userPassword} className="user-login-box" placeholder="SetPassword" onChange={onChangUserPassword}/>
                <label htmlFor="useremail" className="login-labels">
                    email Adress
                </label>
                <input type="text" id="userEmail" value={userEmail} className="user-login-box" placeholder="Enter Your Email" onChange={onChangeUserEmail}/>
                <label htmlFor="userphonenum" className="login-labels">
                    Phone Num
                </label>
                <input type="text" id="userphonenum" value={userPhoneNum} className="user-login-box" placeholder="Enter Password" onChange={onChangeUserPhoneNum}/>
                {errorSignal && <p className="error-msg">*write right credintials</p>}
                <button type="submit" className="login-button">AccessNow/login</button>
                
            </form>
            </div>
        </div>
    )
}

export default UserDetails;