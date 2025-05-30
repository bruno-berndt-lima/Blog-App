import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SignUp signInUrl="/login"/>
        </div>
    )
}

export default RegisterPage