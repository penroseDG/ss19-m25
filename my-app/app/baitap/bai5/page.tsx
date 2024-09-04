'use client';

import { useAuth, SignInButton, SignOutButton } from '@clerk/nextjs';

const HomePage = () => {
    const { isSignedIn } = useAuth();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Trang chủ</h1>
            {isSignedIn ? (
                <SignOutButton>
                    <button>Đăng xuất</button>
                </SignOutButton>
            ) : (
                <SignInButton>
                    <button>Đăng nhập</button>
                </SignInButton>
            )}
        </div>
    );
};

export default HomePage;