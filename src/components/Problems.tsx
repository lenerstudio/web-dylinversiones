
import { AlertTriangle, TrendingDown, ThermometerSun, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';

const Problems = () => {
    const problems = [
        {
            icon: <AlertTriangle className="text-red-500 w-12 h-12 mb-4" />,
            title: "Instalaciones Peligrosas",
            desc: "Cableado antiguo o mal instalado que genera riesgo de cortocircuitos e incendios.",
        },
        {
            icon: <TrendingDown className="text-orange-500 w-12 h-12 mb-4" />,
            title: "Altos Costos de Energía",
            desc: "Sistemas ineficientes que incrementan innecesariamente su facturación mensual.",
        },
        {
            icon: <ThermometerSun className="text-yellow-500 w-12 h-12 mb-4" />,
            title: "Ambientes Incómodos",
            desc: "Falta de climatización adecuada que afecta la productividad y el confort.",
        },
        {
            icon: <WifiOff className="text-gray-500 w-12 h-12 mb-4" />,
            title: "Desconexión Constante",
            desc: "Redes inestables que interrumpen sus operaciones críticas.",
        },
    ];

    return (
        <section className="py-24 bg-[#0B1120] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px]"></div>
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        ¿Enfrenta estos desafíos en su infraestructura?
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Ignorar estos problemas puede llevar a pérdidas económicas y riesgos graves de seguridad.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group text-center flex flex-col items-center hover:-translate-y-2 shadow-lg"
                        >
                            <div className="p-4 rounded-full bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-blue-500/30">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{problem.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;
