import { UserButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <div>
          <h1>Welcome, User!</h1>
          <UserButton />
        </div>
      ) : (
        <div>
          <h1>Please Sign In</h1>
          <a href="/sign-in">Sign In</a>
        </div>
      )}
    </div>
  );
}