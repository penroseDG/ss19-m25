'use client';

import { currentUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [user, setUser] = useState<{ fullName: string | null, email: string | null } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await currentUser();
            if (user) {
                setUser({
                    fullName: user.fullName,
                    email: user.emailAddresses[0].emailAddress,
                });
            }
        };
        fetchUser();
    }, []);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Thông tin cá nhân</h1>
            <p><strong>Tên:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default ProfilePage;