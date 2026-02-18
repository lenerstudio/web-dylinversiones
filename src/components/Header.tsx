import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Beneficios', href: '#beneficios' },
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="DylInversiones Logo"
                        className={`h-20 w-auto object-contain transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-brand-secondary ${isScrolled ? 'text-gray-700' : 'text-gray-100'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white px-5 py-2.5 rounded-md font-semibold transition-transform transform hover:scale-105 shadow-lg"
                    >
                        <FileText size={18} />
                        Solicitar Cotización
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ?
                        <X size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} /> :
                        <Menu size={28} className={isScrolled ? 'text-brand-dark' : 'text-white'} />
                    }
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in-down">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 hover:text-brand-primary border-b border-gray-100 pb-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className="mt-4 flex justify-center items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-md font-bold text-lg shadow-md active:scale-95 transition-transform"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FileText size={20} />
                            Solicitar Cotización Ahora
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
