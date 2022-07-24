import Logo from '../../Icons/Logo';
import NavOption from './NavOption';
import navOptions from './navOptions';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [handleShow, setHandleShow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const listener = () => {
                if (window.scrollY > 80) {
                    setHandleShow(true);
                } else {
                    setHandleShow(false);
                }
            };
            window.addEventListener('scroll', listener);

            return () => {
                window.removeEventListener('scroll', listener);
            };
        }
    }, []);

    return (
        <nav
            className={`px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20 flex justify-between items-center ${
                handleShow ? 'shadow-2xl' : ''
            }`}
        >
            <Link
                activeClass="active"
                duration={500}
                href="intro"
                offset={-100}
                smooth={true}
                spy={true}
                title="Avneesh"
                to="intro"
            >
                <Logo className="cursor-pointer" />
            </Link>

            <ol className="hidden space-x-8 md:flex">
                {navOptions.map((item, i) => (
                    <NavOption item={item} key={i} number={i + 1} />
                ))}
            </ol>
        </nav>
    );
};

export { Header };
