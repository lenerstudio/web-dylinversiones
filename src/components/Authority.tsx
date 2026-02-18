import React from 'react';
import { Award, Briefcase, ThumbsUp } from 'lucide-react';

const Authority = () => {
    return (
        <section id="nosotros" className="py-24 bg-white text-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">Nuestra Experiencia</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6 leading-tight">
                            Líderes en Soluciones Técnicas Integrales
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Con más de 10 años en el mercado peruano, hemos ejecutado exitosamente proyectos para las industrias más exigentes. Contamos con homologaciones de seguridad y calidad que respaldan nuestro compromiso.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div className="flex items-start gap-4">
                                <Award className="text-brand-secondary w-10 h-10 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Certificados</h4>
                                    <p className="text-sm text-gray-500">Personal técnico homologado y capacitado constantemente.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ThumbsUp className="text-brand-secondary w-10 h-10 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Garantía Real</h4>
                                    <p className="text-sm text-gray-500">Respaldo post-venta en cada servicio realizado.</p>
                                </div>
                            </div>
                        </div>

                        <p className="font-bold text-gray-800 mb-4">Trabajamos con las mejores marcas:</p>
                        <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Brand Placeholders */}
                            <span className="text-2xl font-black text-gray-400">SCHNEIDER</span>
                            <span className="text-2xl font-black text-gray-400">LEGRAND</span>
                            <span className="text-2xl font-black text-gray-400">BTICINO</span>
                            <span className="text-2xl font-black text-gray-400">SAMSUNG</span>
                            <span className="text-2xl font-black text-gray-400">BOSCH</span>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-brand-primary transform rotate-3 rounded-3xl -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                            alt="Ingeniero supervisando obra"
                            className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                        />
                        <div className="absolute bottom-10 right-10 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="font-bold text-gray-800">Disponible 24/7</span>
                            </div>
                            <p className="text-sm text-gray-500">Atención de emergencias eléctricas e industriales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;
