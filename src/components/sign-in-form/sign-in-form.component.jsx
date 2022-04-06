import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss"

const defaultformFields = {
    email: "",
    password: ""
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultformFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultformFields)
    }

    const SignInWithGoogle = async () => {

        await signInWithGooglePopup()
        
    }

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const {user} = await signAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={SignInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )

}

export default SignInForm;