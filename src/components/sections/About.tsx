import { Target, Eye, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: "Missão",
      description: "Fornecer ao mercado brasileiro as melhores ferramentas com eficiência, curto prazo e qualidade."
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-500" />,
      title: "Visão",
      description: "Nos tornarmos o maior estoque em metal duro inteiriço do Brasil, sendo referência em agilidade."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Compromisso",
      description: "Atuação legítima e pioneira há mais de 20 anos em Comércio Exterior com o grupo SETE."
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/50 skew-x-12 z-0"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-yellow-600">MTS Tools</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Excelência em ferramentas de corte e metal duro inteiriço.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-8 rounded-2xl hover:border-yellow-600/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-600/20 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-500 transition-colors">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
