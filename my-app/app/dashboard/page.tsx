"use client";
import React from 'react'
import {useAuth, UserButton} from "@clerk/nextjs" 
import { useRouter } from 'next/navigation';
export default function page() {
    const userInfo = useAuth();
    const router = useRouter();
    // Kiểm tra user đã đăng nhập chưa
    // if (userInfo.isSignedIn) {
    //     return <>Duoc di vao trang Dashboard</>
    // } else {
    //     // Chua dang nhap
    //     router.push("/sign-in");
    // }
    console.log("User info:", userInfo)
  return <>{userInfo.isSignedIn ? <UserButton/> : router.push("/sign-in")}</>;
}
