
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full scale-x-[-1]">
                    <img
                        src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2669&auto=format&fit=crop"
                        alt="Ingenieros eléctricos trabajando"
                        className="w-full h-full object-cover animate-subtle-zoom"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-dark/70"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative text-white pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-brand-secondary">SERVICIOS GENERALES EN TODO EL PERÚ</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Soluciones Integrales para <span className="text-brand-secondary">Proyectos que Perduran</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relax">
                            Especialistas en instalaciones eléctricas, climatización y obras civiles.
                            Garantizamos seguridad, eficiencia y calidad para su hogar o empresa con un equipo de expertos certificados.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contacto"
                                className="group flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-secondary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
                            >
                                Solicitar Cotización Gratis
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#servicios"
                                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
                            >
                                Ver Nuestros Servicios
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-brand-secondary" size={20} />
                                <span>Atención a Nivel Nacional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-brand-secondary" size={20} />
                                <span>Personal Certificado</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
