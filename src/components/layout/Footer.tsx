import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import logo from '../../assets/images/logo.png';

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="MTS Tools" className="h-12 mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed">
              Fornecendo as melhores ferramentas de corte com alta performance em metal duro inteiriço. Eficiência e qualidade para sua indústria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Navegação
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">A Empresa</a></li>
              <li><a href="#products" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">Produtos</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-yellow-500 transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Phone className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <Mail className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>contato@mtsferramentas.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>Rua Exemplo, 123 - São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Redes Sociais
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-600 rounded-full"></span>
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-yellow-600 hover:text-white transition-all transform hover:scale-110">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} MTS Tools. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
