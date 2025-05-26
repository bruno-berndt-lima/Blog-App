import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SignIn signUpUrl="/register"/>
        </div>
    )
}

export default LoginPage