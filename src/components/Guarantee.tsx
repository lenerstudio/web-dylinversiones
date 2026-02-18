
import { ShieldCheck, CheckCircle } from 'lucide-react';

const Guarantee = () => {
    return (
        <section className="py-20 bg-gray-900 text-white relative">
            <div className="absolute inset-0 bg-pattern-dark opacity-10"></div>
            <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                <ShieldCheck size={80} className="text-brand-secondary mx-auto mb-8 animate-pulse" />

                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Su Inversión Está Protegida
                </h2>

                <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 leading-relaxed">
                    Todos nuestros servicios incluyen una <span className="font-bold text-white uppercase border-b-2 border-brand-accent pb-1">Garantía Escrita de 12 Meses</span> sobre mano de obra.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                    <div className="flex items-start gap-4">
                        <CheckCircle className="text-green-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg mb-1">Reparación Gratuita</h4>
                            <p className="text-gray-400 text-sm">Si sucede algún desperfecto, lo corregimos sin costo adicional.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle className="text-green-400 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-lg mb-1">Materiales Certificados</h4>
                            <p className="text-gray-400 text-sm">Usamos solo productos que cumplen normativas internacionales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
