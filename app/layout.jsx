import NavBar from '../components/NavBar';
import { aventaBold, inter } from './fonts';
import './globals.css';

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={`${inter.variable} ${aventaBold.variable}`}>
            <body className="bg-white w-full px-2 pt-1 pb-1">
                <div className="container border rounded-2xl relative">
                    <header className="z-30 h-min">
                        <NavBar />
                    </header>
                    <main className="">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Framer Motion Animation',
    description: 'Dummy website for displaying animation created using framer motion',
}

export default RootLayout;