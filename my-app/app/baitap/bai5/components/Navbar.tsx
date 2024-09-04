import Link from 'next/link';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/profile">Thông tin cá nhân</Link></li>
        </ul>
    </nav>
);

export default Navbar;