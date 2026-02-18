
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Carlos Mendoza",
            role: "Gerente de Operaciones, Logística S.A.",
            text: "DylInversiones realizó la instalación completa de nuestro sistema contra incendios. Su profesionalismo y cumplimiento de plazos fue impecable. Totalmente recomendados.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Ana Flores",
            role: "Administradora, Edificio Miraflores",
            text: "El mantenimiento de nuestro sistema eléctrico y bombas de agua ha mejorado notablemente desde que trabajamos con ellos. Respuesta rápida ante emergencias.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Ing. Roberto Díaz",
            role: "Jefe de Planta, Industria Textil",
            text: "Expertos en cableado estructurado y tableros industriales. Nos ayudaron a optimizar el consumo energético de la planta con soluciones muy eficientes.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <section id="testimonios" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <Quote className="text-brand-accent w-10 h-10 mb-6 opacity-30" />
                            <p className="text-gray-700 italic mb-8 leading-relaxed">"{testimonial.text}"</p>

                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-brand-primary mb-4 object-cover"
                            />

                            <h4 className="font-bold text-lg text-brand-primary">{testimonial.name}</h4>
                            <span className="text-sm text-gray-500 font-medium">{testimonial.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
