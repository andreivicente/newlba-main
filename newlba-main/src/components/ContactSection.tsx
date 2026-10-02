import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageSquare, Video, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Dúvidas sobre Matrícula',
    message: '',
    requestLibrasVideoCall: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Informe seu nome.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Informe um e-mail válido.';
    if (!formData.message.trim()) errs.message = 'Por favor, escreva sua mensagem.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="contato" 
      className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C9A7]/15 text-[#00897B] dark:text-[#00C9A7] text-xs font-bold uppercase tracking-wider">
            <span>Estamos Aqui por Você</span>
          </div>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Fale com a Equipe LínguaViva
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dúvidas pedagógicas, parcerias corporativas, atendimento em Libras ou suporte à plataforma.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels and Inclusive Video Desk */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Special Highlight: Central em Libras por Videochamada */}
            <div className="bg-gradient-to-br from-[#5B2C9E] to-[#4A2382] text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-[#00C9A7] flex items-center justify-center font-bold">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C9A7]">
                  Atendimento Acessível
                </span>
                <h3 className="text-xl font-bold font-display mt-1">
                  Central em Libras por Videochamada
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  Para alunos, candidatos a professores e familiares surdos: conte com intérpretes fluentes prontos para atendê-lo ao vivo em língua de sinais.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20em%20Libras%20por%20videochamada%20na%20L%C3%ADnguaViva."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-[#00C9A7] hover:bg-[#00B395] text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all"
                >
                  <Video className="w-4 h-4" />
                  <span>Iniciar Atendimento em Libras</span>
                </a>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20L%C3%ADnguaViva%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FC] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#00C9A7] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#00C9A7] transition-colors">
                    WhatsApp Comercial & Matrículas
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    (11) 98765-4321 · Atendimento de Seg a Sáb, das 8h às 20h
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@linguaviva.com.br"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FC] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-[#5B2C9E] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5B2C9E]/10 dark:bg-[#5B2C9E]/30 text-[#5B2C9E] dark:text-[#00C9A7] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#5B2C9E] transition-colors">
                    E-mail Oficial
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    contato@linguaviva.com.br · Resposta em até 24h
                  </p>
                </div>
              </a>

              {/* Polos e Endereço */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F9FC] dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Sede & Polos Híbridos
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Av. Paulista, 1200 - São Paulo, SP (Polos parceiros em RJ, MG, PR e RS)
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-[#F8F9FC] dark:bg-slate-800/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Mensagem Enviada!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Agradecemos seu contato, <strong>{formData.name}</strong>. Nossa equipe entrará em contato pelo e-mail <strong>{formData.email}</strong> o mais rápido possível.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Dúvidas sobre Matrícula',
                        message: '',
                        requestLibrasVideoCall: false
                      });
                    }}
                    className="py-2.5 px-6 rounded-xl border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                  Envie uma Mensagem
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Seu Nome *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Paula"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ana@exemplo.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      WhatsApp / Telefone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Assunto
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                    >
                      <option value="Dúvidas sobre Matrícula">Dúvidas sobre Matrícula de Aluno</option>
                      <option value="Seja Professor">Dúvidas sobre Cadastro de Professor</option>
                      <option value="Acessibilidade e Libras">Suporte de Acessibilidade / Libras</option>
                      <option value="Parcerias e Empresas">Planos Corporativos & Escolas</option>
                      <option value="Outro">Outro assunto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Sua Mensagem *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva sua dúvida ou solicitação com detalhes..."
                    className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#00C9A7]"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Libras Video Request checkbox */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestLibrasVideoCall}
                      onChange={(e) => setFormData({ ...formData, requestLibrasVideoCall: e.target.checked })}
                      className="w-4 h-4 text-[#5B2C9E] rounded focus:ring-[#00C9A7]"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Gostaria que o retorno desta mensagem fosse em Libras por videochamada
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-[#5B2C9E] hover:bg-[#4A2382] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Enviando mensagem...' : 'Enviar Mensagem'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
