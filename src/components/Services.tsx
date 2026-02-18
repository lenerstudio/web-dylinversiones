import { Zap, Fan, Flame, Network, GripVertical, Settings, ShieldCheck, Home } from 'lucide-react';


const services = [
    {
        icon: <Zap size={32} className="text-yellow-500" />,
        title: "Instalaciones Eléctricas",
        desc: "Diseño e implementación de sistemas eléctricos seguros y eficientes para cualquier edificación."
    },
    {
        icon: <Fan size={32} className="text-blue-400" />,
        title: "Aire Acondicionado",
        desc: "Suministro, instalación y mantenimiento de climatización para confort total."
    },
    {
        icon: <Flame size={32} className="text-red-500" />,
        title: "Sistema Contra Incendio",
        desc: "Detección y prevención avanzada para proteger vidas y activos."
    },
    {
        icon: <Network size={32} className="text-purple-500" />,
        title: "Cableado Estructurado",
        desc: "Redes de datos y voz certificadas para una comunicación fluida."
    },
    {
        icon: <Settings size={32} className="text-gray-600" />,
        title: "Estructuras Metálicas",
        desc: "Fabricación y montaje de estructuras robustas para grandes proyectos."
    },
    {
        icon: <GripVertical size={32} className="text-orange-400" />,
        title: "Drywall",
        desc: "Acabados versátiles y modernos para divisiones y cielorrasos."
    },
    {
        icon: <Home size={32} className="text-green-500" />,
        title: "Obras Civiles",
        desc: "Ejecución de proyectos de construcción y remodelación con garantía."
    },
    {
        icon: <ShieldCheck size={32} className="text-blue-600" />,
        title: "Videovigilancia",
        desc: "Sistemas de cámaras CCTV para monitoreo y seguridad 24/7."
    }
];

const Services = () => {
    return (
        <section id="servicios" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-semibold tracking-wide uppercase text-sm">Nuestras Soluciones</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mt-2 mb-4">Servicios Integrales</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cubrimos todas las necesidades técnicas de su proyecto con un solo proveedor de confianza.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1 text-center flex flex-col items-center"
                        >
                            <div className="mb-6 p-4 rounded-lg bg-gray-50 inline-block group-hover:bg-brand-light transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {service.desc}
                            </p>
                            <a href="#contacto" className="text-brand-accent font-medium text-sm hover:underline inline-flex items-center gap-1">
                                Solicitar info
                                <span className="text-xs">&rarr;</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
