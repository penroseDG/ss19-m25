import Link from 'next/link';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/sign-in">Sign In</Link></li>
        </ul>
    </nav>
);

export default Navbar;