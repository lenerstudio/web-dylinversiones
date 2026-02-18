import { Home, Building2, Warehouse } from 'lucide-react';
import { motion } from 'framer-motion';

const TargetAudience = () => {
    const targets = [
        {
            icon: <Home size={40} className="text-brand-secondary" />,
            title: "Residenciales",
            desc: "Soluciones seguras para hogares, condominios y edificios. Electricidad, remodelaciones y servicios básicos."
        },
        {
            icon: <Building2 size={40} className="text-brand-primary" />,
            title: "Comerciales",
            desc: "Mantenimiento e implementación de sistemas para oficinas, tiendas retail y centros empresariales."
        },
        {
            icon: <Warehouse size={40} className="text-brand-accent" />,
            title: "Industriales",
            desc: "Proyectos de alta envergadura. Instalaciones eléctricas potentes, sistemas contra incendio y estructuras."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">

            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">¿Para quiénes son nuestros servicios?</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
                    Brindamos soluciones integrales adaptadas a las necesidades específicas de cada sector, garantizando resultados óptimos y seguros.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {targets.map((target, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="bg-gray-50 p-4 rounded-full mb-6">
                                {target.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{target.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{target.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
