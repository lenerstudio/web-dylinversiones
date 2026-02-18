
const projectImages = [
    { src: '/aire-acondicionado.webp', alt: 'Aire Acondicionado' },
    { src: '/cableado-estructurado.webp', alt: 'Cableado Estructurado' },
    { src: '/drywall.webp', alt: 'Drywall' },
    { src: '/estructuras-metalicas.webp', alt: 'Estructuras Metálicas' },
    { src: '/instalaciones-electricas.webp', alt: 'Instalaciones Eléctricas' },
    { src: '/obras-civiles.webp', alt: 'Obras Civiles' },
    { src: '/sistema-contra-incendio.webp', alt: 'Sistema Contra Incendio' },
];

const ProjectCarousel = () => {
    return (
        <section className="w-full py-16 border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-brand-accent font-semibold tracking-wide uppercase text-xs mb-2 block">Portafolio</span>
                    <h3 className="text-3xl font-bold text-brand-primary">Galería de Proyectos</h3>
                    <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                        Evidencia visual de nuestra experiencia y calidad en cada servicio ejecutado.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-marquee pause-on-hover hover:cursor-grab active:cursor-grabbing">
                        {/* First Slide */}
                        <div className="flex gap-8 shrink-0 items-center pr-8">
                            {projectImages.map((img, i) => (
                                <div
                                    key={`slide1-${i}`}
                                    className="relative min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group/card cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-lg drop-shadow-md">{img.alt}</p>
                                        <div className="w-12 h-1 bg-brand-accent mt-2 w-0 group-hover/card:w-12 transition-all duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Duplicate Slide for continuous loop */}
                        <div className="flex gap-8 shrink-0 items-center pr-8">
                            {projectImages.map((img, i) => (
                                <div
                                    key={`slide2-${i}`}
                                    className="relative min-w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group/card cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-lg drop-shadow-md">{img.alt}</p>
                                        <div className="w-12 h-1 bg-brand-accent mt-2 w-0 group-hover/card:w-12 transition-all duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
