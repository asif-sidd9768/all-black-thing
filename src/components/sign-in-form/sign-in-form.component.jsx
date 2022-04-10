import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPES_CLASSES} from "../button/button.component";
import { signAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {SignInContainer, Heading, ButtonsContainer} from "./sign-in-form.styles"

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
        <SignInContainer>
            <Heading>I already have an account</Heading>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPES_CLASSES.google} type="button" onClick={SignInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )

}

export default SignInForm;