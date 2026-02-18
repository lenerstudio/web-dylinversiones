import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // 1. Envío al correo electrónico usando FormSubmit
        try {
            const response = await fetch("https://formsubmit.co/ajax/lenermatos128@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    email: formData.email,
                    telefono: formData.telefono,
                    servicio: formData.servicio,
                    mensaje: formData.mensaje,
                    _subject: `Nueva Cotización de ${formData.nombre}`
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                console.error("Error response from FormSubmit", response);
                setStatus('error');
            }
        } catch (error) {
            console.error("Error al enviar correo:", error);
            setStatus('error');
        }
    };

    const handleWhatsApp = () => {
        // Formateo profesional del mensaje para WhatsApp
        const message = encodeURIComponent(
            `*SOLICITUD DE COTIZACIÓN - WEB* 🌐\n\n` +
            `👋 Hola, equipo de *DylInversiones*! Estoy interesado en sus servicios.\n\n` +
            `👤 *CLIENTE:* ${formData.nombre}\n` +
            `📧 *EMAIL:* ${formData.email}\n` +
            `📱 *TELÉFONO:* ${formData.telefono}\n` +
            `🛠️ *SERVICIO DE INTERÉS:* ${formData.servicio}\n\n` +
            `📝 *DETALLE DEL PROYECTO:*\n${formData.mensaje}\n\n` +
            `Quedo atento a su pronta respuesta. ¡Gracias!`
        );

        const phoneNumber = "34624432245"; // Número actualizado según UI
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleReset = () => {
        setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
        setStatus('idle');
    };

    return (
        <section id="contacto" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <div className="lg:w-1/2">
                        <span className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-2 block">Contáctenos</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6 leading-tight">
                            ¿Listo para iniciar su proyecto?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Déjenos sus datos y uno de nuestros ingenieros se comunicará con usted para brindarle una asesoría personalizada sin compromiso.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800 mb-1">Llámenos</h4>
                                    <a href="tel:+51947438109" className="text-gray-600 hover:text-brand-primary transition-colors font-medium">+51 947 438 109</a>
                                    <p className="text-gray-500 text-sm">Lunes a Sábado: 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800 mb-1">Escríbanos</h4>
                                    <div className="flex flex-col gap-1">
                                        <a href="mailto:g.operaciones@dylinversiones.com" className="text-gray-600 hover:text-brand-primary transition-colors">g.operaciones@dylinversiones.com</a>
                                        <a href="mailto:ventas@dylinversiones.com" className="text-gray-600 hover:text-brand-primary transition-colors">ventas@dylinversiones.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800 mb-1">Visítenos</h4>
                                    <p className="text-gray-600">Av. Principal 123, Lima, Perú</p>
                                    <p className="text-gray-500 text-sm">Atención previa cita</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 h-full flex flex-col justify-center"
                        >
                            {status === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} className="text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Mensaje Enviado!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Su solicitud ha sido enviada a nuestro correo correctamente. Nos pondremos en contacto a la brevedad.
                                    </p>

                                    <div className="space-y-4">
                                        <p className="font-medium text-brand-primary">¿Desea enviar también esta solicitud por WhatsApp para una respuesta más rápida?</p>
                                        <button
                                            onClick={handleWhatsApp}
                                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transform active:scale-95 transition-all flex justify-center items-center gap-2"
                                        >
                                            <MessageCircle size={20} /> Enviar a WhatsApp
                                        </button>
                                        <button
                                            onClick={handleReset}
                                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-lg transition-colors"
                                        >
                                            Volver al formulario
                                        </button>
                                    </div>
                                </div>
                            ) : status === 'error' ? (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <AlertCircle size={40} className="text-red-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Hubo un error</h3>
                                    <p className="text-gray-600 mb-8">
                                        No pudimos enviar su mensaje. Por favor, intente nuevamente o contáctenos directamente por WhatsApp.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="w-full bg-brand-accent hover:bg-brand-secondary text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all"
                                    >
                                        Intentar nuevamente
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-brand-primary mb-6 text-center">Solicitar Cotización</h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                                placeholder="Su nombre o empresa"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                                placeholder="ejemplo@correo.com"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
                                                <input
                                                    type="tel"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                                    placeholder="+51 947 438 109..."
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">Servicio de Interés</label>
                                                <select
                                                    id="servicio"
                                                    name="servicio"
                                                    value={formData.servicio}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all bg-white"
                                                    required
                                                >
                                                    <option value="">Seleccione...</option>
                                                    <option value="electricidad">Instalaciones Eléctricas</option>
                                                    <option value="aire-acondicionado">Aire Acondicionado</option>
                                                    <option value="pozo-tierra">Pozo a Tierra</option>
                                                    <option value="obras-civiles">Obras Civiles</option>
                                                    <option value="otros">Otros</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Detalle del Proyecto</label>
                                            <textarea
                                                id="mensaje"
                                                name="mensaje"
                                                value={formData.mensaje}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all resize-none"
                                                placeholder="Cuéntenos más sobre lo que necesita..."
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className={`w-full bg-brand-accent hover:bg-brand-secondary text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform active:scale-95 transition-all flex justify-center items-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {status === 'sending' ? 'Enviando...' : <><Send size={20} /> Enviar Solicitud</>}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
