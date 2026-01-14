import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 bg-gradient-to-br from-yellow-600 to-yellow-800 p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
            <p className="text-yellow-100 mb-8 leading-relaxed">
              Tem alguma dúvida ou precisa de um orçamento? Nossa equipe está pronta para atender você.
            </p>
            <div className="space-y-4">
               <div>
                  <h4 className="font-bold text-yellow-200 text-sm">Endereço</h4>
                  <p className="text-sm">Rua Exemplo, 123<br/>São Paulo - SP</p>
               </div>
               <div>
                  <h4 className="font-bold text-yellow-200 text-sm">Email</h4>
                  <p className="text-sm">contato@mtsferramentas.com.br</p>
               </div>
               <div>
                  <h4 className="font-bold text-yellow-200 text-sm">Telefone</h4>
                  <p className="text-sm">+55 (11) 9999-9999</p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-bold uppercase">Nome</label>
                  <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-zinc-400 font-bold uppercase">Email</label>
                  <input type="email" className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-yellow-600 transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-zinc-400 font-bold uppercase">Mensagem</label>
                <textarea rows={4} className="w-full bg-zinc-800 border border-zinc-700 rounded p-3 text-white focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button type="button" className="w-full bg-white text-zinc-900 font-bold py-4 rounded hover:bg-yellow-500 hover:text-white transition-all flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
