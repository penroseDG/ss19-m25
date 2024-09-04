'use client';

import { useAuth, useSignOut } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const { isSignedIn } = useAuth();
    const { signOut } = useSignOut();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();  
        router.push('/sign-in'); 
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Trang chủ</h1>
            {isSignedIn ? (
                <button onClick={handleLogout}>Đăng xuất</button>
            ) : (
                <button onClick={() => router.push('/sign-in')}>Đăng nhập</button>
            )}
        </div>
    );
};

export default HomePage;