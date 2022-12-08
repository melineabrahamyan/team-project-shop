import {useState} from 'react';
import firebase from "firebase";

interface UserThumbnailProps {
    title: string;
    handleClick: any;
    error:string,
}

const Form = (props:UserThumbnailProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    return (
        <div className='signIn-body'>
            <div className='signIn-body-box'>
                <input type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="email"/>
                <label htmlFor="">Email <span className='errorTextAuth'>{props.error}</span></label>
            </div>
            <div className='signIn-body-box'>
                <input type="password"
                       value={pass}
                       onChange={(e) => setPass(e.target.value)}
                       placeholder="password"/>
                <label htmlFor="">Password  <span className='errorTextAuth'>{props.error}</span></label>
            </div>
            <button type="submit"    onClick={() => props.handleClick(email, pass)} className="a-button is-primary">
                <span>{props.title}</span>
            </button>
        </div>

    )
}

export default Form
