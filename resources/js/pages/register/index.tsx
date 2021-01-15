import React, {useState } from 'react'
import style from './index.module.css'
import update from 'immutability-helper';
import { regUser } from '../../services/user'

interface registerFormValues{
    username: string;
    email: string;
    password: string;
    rePassword: string;
}

const Register: React.FC = () => {

    const [formInputs, setFormInputs] = useState<registerFormValues>({
                                                        username: '',
                                                        email: '',
                                                        password: '',
                                                        rePassword: ''
                                                    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const target = e.target
        const name = target.name
        const value = target.value

        let updateState = update(formInputs, {
            [name]: {$set: value}
        })

        setFormInputs(updateState)
    }

    const submitRegister = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        
        regUser(formInputs).then((data) => console.log(data))
    }

    return (
        <>
            <form className={style.regForm} onSubmit={submitRegister}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={handleChange}/>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={handleChange}/>
                <label htmlFor="rePassword">Repeat Password:</label>
                <input 
                    type="password" 
                    name="rePassword" 
                    id="rePassword"
                    onChange={handleChange}/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register