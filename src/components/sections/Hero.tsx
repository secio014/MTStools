import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-600/10 border border-yellow-600/20 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Alta Performance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Precisão em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
              Metal Duro
            </span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
             Especialistas em ferramentas de corte de alto desempenho. Qualidade garantida para maximizar sua produtividade industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg shadow-lg shadow-yellow-600/25 transition-all flex items-center justify-center gap-2 group">
              Nossos Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-lg border border-zinc-700 transition-all flex items-center justify-center gap-2">
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
           {/* Abstract representational shape for tools/precision */}
           <div className="relative w-full h-[600px] bg-zinc-800/30 rounded-2xl border border-zinc-700/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700 shadow-2xl skew-y-3 transform hover:skew-y-0 transition-all duration-700 cursor-default">
                  <div className="flex items-center gap-4 mb-4 border-b border-zinc-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-500 ml-auto">System Status: Optimal</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-zinc-700 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-zinc-700 rounded animate-pulse delay-75" />
                    <div className="h-2 w-full bg-zinc-700 rounded animate-pulse delay-150" />
                  </div>
                  <div className="mt-8 flex justify-center">
                     {/* Placeholder for a cool tool rendering or just abstract tech */}
                     <div className="text-center">
                        <p className="text-yellow-500 font-mono text-sm">MTS-SYSTEM-V2.0</p>
                        <p className="text-zinc-500 text-xs">Solid Carbide Intelligence</p>
                     </div>
                  </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
