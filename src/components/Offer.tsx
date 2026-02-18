import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const Offer = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-brand-secondary to-brand-accent text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-6">
                        <Clock size={16} /> Oferta Limitada para Nuevos Clientes
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
                        ¿Preocupado por la seguridad de sus instalaciones?
                    </h2>

                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium opacity-90">
                        Obtenga una <span className="font-black bg-white text-brand-accent px-2 py-0.5 rounded transform -rotate-1 inline-block shadow-lg">Diagnóstico Técnico GRATUITO</span> de sus sistemas eléctricos o de aire acondicionado.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            href="#contacto"
                            className="bg-white text-brand-accent font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                        >
                            Solicitar Diagnóstico Ahora <ArrowRight size={20} />
                        </a>
                        <p className="text-sm font-medium opacity-80 max-w-xs leading-tight">
                            * Válido para Lima Metropolitana. Sujeto a disponibilidad de agenda.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Offer;
