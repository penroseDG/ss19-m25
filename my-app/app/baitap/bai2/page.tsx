import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, User } from 'firebase/auth';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user: User = result.user;
            console.log(user);
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <div className="sign-up">
            <h2>Sign in to demo_authentication</h2>
            <p>Welcome back! Please sign in to continue</p>
            <button onClick={handleGoogleSignIn}>Continue with Google</button>
            <div>or</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <button type="submit">Continue</button>
            </form>
            <p>Don’t have an account? <a href="/sign-up">Sign up</a></p>
        </div>
    );
};

export default SignUp;