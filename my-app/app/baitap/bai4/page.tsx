'use client';
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

const DashboardPage = () => {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your protected dashboard!</p>
        </div>
    );
};

export default DashboardPage;