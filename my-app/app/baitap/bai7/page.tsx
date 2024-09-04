'use client';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <SignUp
                path="/sign-up"
                routing="path"
                signInUrl="/sign-in"
                appearance={{
                    elements: {
                        formButtonPrimary: 'bg-blue-500 text-white hover:bg-blue-600', 
                        formFieldInput: 'border border-gray-300 rounded-lg', 
                        formFieldLabel: 'text-gray-700', 
                        formFieldErrorText: 'text-red-500', 
                        formTitle: 'text-2xl font-bold text-center mb-6',
                    },
                    variables: {
                        colorPrimary: '#1A73E8', 
                        colorText: '#333', 
                        fontFamily: '"Inter", sans-serif', 
                    },
                }}
            />
        </div>
    );
};

export default SignUpPage;