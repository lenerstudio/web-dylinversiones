
import { motion } from 'framer-motion';
import { Check, Clock, ShieldCheck, Users } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Users className="text-white w-6 h-6" />,
            title: "Equipo Certificado",
            desc: "Profesionales técnicos altamente capacitados y cumplir con normativas vigentes.",
        },
        {
            icon: <Clock className="text-white w-6 h-6" />,
            title: "Puntualidad Garantizada",
            desc: "Respetamos los cronogramas establecidos para minimizar interrupciones en su operación.",
        },
        {
            icon: <ShieldCheck className="text-white w-6 h-6" />,
            title: "Seguridad Primero",
            desc: "Protocolos estrictos de seguridad en cada instalación y mantenimiento.",
        },
        {
            icon: <Check className="text-white w-6 h-6" />,
            title: "Calidad Duradera",
            desc: "Utilizamos materiales de primera y técnicas modernas para resultados de larga vida útil.",
        }
    ];

    return (
        <section id="beneficios" className="py-24 bg-brand-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-dark/10 skew-x-12 transform translate-x-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Más que un Servicio, <br />
                                <span className="text-brand-secondary">Una Alianza Estratégica</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                En DylInversiones entendemos que cada minuto cuenta. Por eso nos enfocamos en brindar soluciones rápidas, seguras y eficientes que le permiten concentrarse en lo que realmente importa: su negocio.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-gray-400">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                        >
                            {/* Fallback image if generation failed, using a placeholder related to teamwork/construction */}
                            <img
                                src="/obras-civiles.webp"
                                alt="Equipo trabajando en obra"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <p className="text-white font-medium text-lg italic">"Compromiso y excelencia en cada proyecto."</p>
                            </div>
                        </motion.div>

                        {/* Floating generic stats card */}
                        <div className="absolute -bottom-6 -left-6 bg-brand-secondary text-white p-6 rounded-xl shadow-xl hidden md:block">
                            <p className="text-4xl font-bold mb-1">+500</p>
                            <p className="text-sm font-medium uppercase tracking-wider opacity-90">Proyectos<br />Ejecutados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
