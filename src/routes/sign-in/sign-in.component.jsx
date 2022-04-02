import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;