import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <span className="text-3xl font-bold tracking-tight text-white block mb-2">
                            DylInversiones<span className="text-brand-accent">.</span>
                        </span>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                            Soluciones integrales en ingeniería y construcción para el desarrollo del Perú.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} DylInversiones S.A.C. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
