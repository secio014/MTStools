import { motion } from 'framer-motion';

export function Products() {
  const products = [
    {
      name: "Fresas de Topo",
      desc: "Alta performance para acabamento e desbaste.",
      image: "https://images.unsplash.com/photo-1565457388655-66258f7e2d7e?auto=format&fit=crop&q=80&w=800",
      tag: "Metal Duro"
    },
    {
      name: "Brocas Helicoidais",
      desc: "Precisão absoluta em furos profundos.",
      image: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80&w=800",
      tag: "Alta Performance"
    },
    {
      name: "Insertos",
      desc: "Durabilidade estendida para usinagem pesada.",
      image: "https://images.unsplash.com/photo-1622370830304-6338b258679b?auto=format&fit=crop&q=80&w=800",
      tag: "Resistência"
    }
  ];

  return (
    <section id="products" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">
              Nossos <span className="text-mts-yellow">Produtos</span>
            </h2>
            <p className="text-zinc-400">
              Soluções completas para sua linha de produção.
            </p>
          </div>
          <button className="hidden md:block px-6 py-2 border border-zinc-700 rounded-full hover:bg-mts-yellow hover:border-mts-yellow hover:text-mts-black font-medium transition-all text-zinc-400">
            Ver Catálogo Completo
          </button>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-hide">
          {products.map((product, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group relative overflow-hidden rounded-2xl h-[400px] min-w-[85vw] md:min-w-0 snap-center cursor-pointer border border-zinc-800 hover:border-mts-yellow/50 transition-colors"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mts-black via-mts-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-mts-yellow text-mts-black text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  {product.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-zinc-300 transform opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="px-6 py-2 border border-zinc-700 rounded-full hover:bg-mts-yellow hover:border-mts-yellow hover:text-mts-black font-medium transition-all text-zinc-400">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
}
