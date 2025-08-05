import { Outlet } from 'react-router';
import SplashCursor from '../effects/SplashCursor';
import Header from '../components/header';
import Footer from '../components/footer';
import backgroundImage from '/bg.jpg';

export default function Layout() {
    return (
        <main className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Header />
            <Outlet />
            <Footer />
            <SplashCursor />
        </main>
    )
}