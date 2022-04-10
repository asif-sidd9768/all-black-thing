import {useState} from 'react'
import FormInput from '../form-input/form-input.component'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import {SignUpContainer, Heading} from "./sign-up-form-styles"

const defaultformFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultformFields)
    const {displayName, email, password, confirmPassword} = formFields

    const resetFormFields = () => {
        setFormFields(defaultformFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        };

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})

            resetFormFields();
            
        }catch(error){
            console.log("Error creating user document with Email and Password : ", error.message);
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <Heading>Don't have an account?</Heading>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;