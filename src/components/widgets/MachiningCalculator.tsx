import { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export function MachiningCalculator() {
  const [vc, setVc] = useState<number>(0); // Cutting Speed (m/min)
  const [diameter, setDiameter] = useState<number>(0); // Tool Diameter (mm)
  const [rpm, setRpm] = useState<number | null>(null);

  const [feedPerTooth, setFeedPerTooth] = useState<number>(0); // fz (mm/tooth)
  const [teeth, setTeeth] = useState<number>(0); // z
  const [feedRate, setFeedRate] = useState<number | null>(null); // vf (mm/min)

  const calculateRPM = () => {
    if (vc > 0 && diameter > 0) {
      const calculatedRpm = (vc * 1000) / (Math.PI * diameter);
      setRpm(Math.round(calculatedRpm));
    }
  };

  const calculateFeedRate = () => {
    // If RPM isn't set, try to calc it first or use current (if user input manually allowed, but here we assume flow)
    // Actually, often users want to calculate vf based on known n. 
    // Let's assume n is already calculated or input.
    // For simplicity: vf = n * fz * z
    if (rpm && feedPerTooth > 0 && teeth > 0) {
      const calculatedFeed = rpm * feedPerTooth * teeth;
      setFeedRate(Math.round(calculatedFeed));
    }
  };

  const reset = () => {
    setVc(0);
    setDiameter(0);
    setRpm(null);
    setFeedPerTooth(0);
    setTeeth(0);
    setFeedRate(null);
  };

  return (
    <section className="py-20 bg-mts-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-4">
                    Calculadora de <span className="text-mts-yellow">Usinagem</span>
                </h2>
                <div className="w-24 h-1 bg-mts-yellow mx-auto"></div>
                <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                    Calcule rapidamente RPM e Avanço para otimizar seus processos de corte.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* RPM Calculator */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 rounded-xl shadow-xl hover:border-mts-yellow/30 transition-all"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-mts-yellow/10 rounded-lg">
                            <Calculator className="w-6 h-6 text-mts-yellow" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Cálculo de RPM</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Velocidade de Corte (Vc - m/min)</label>
                            <input 
                                type="number" 
                                value={vc || ''} 
                                onChange={(e) => setVc(Number(e.target.value))}
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mts-yellow transition-colors"
                                placeholder="Ex: 120"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Diâmetro da Ferramenta (D - mm)</label>
                            <input 
                                type="number" 
                                value={diameter || ''} 
                                onChange={(e) => setDiameter(Number(e.target.value))}
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mts-yellow transition-colors"
                                placeholder="Ex: 10"
                            />
                        </div>
                        
                        <button 
                            onClick={calculateRPM}
                            className="w-full bg-mts-yellow text-mts-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors uppercase tracking-wide mt-2"
                        >
                            Calcular RPM
                        </button>

                        {rpm !== null && (
                            <div className="mt-4 p-4 bg-mts-yellow/10 border border-mts-yellow/20 rounded-lg text-center">
                                <span className="block text-sm text-zinc-400 uppercase tracking-widest">Resultado</span>
                                <span className="block text-3xl font-bold text-white">{rpm} <span className="text-sm text-mts-yellow">RPM</span></span>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Feed Rate Calculator */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 rounded-xl shadow-xl hover:border-mts-yellow/30 transition-all"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-mts-yellow/10 rounded-lg">
                            <Calculator className="w-6 h-6 text-mts-yellow" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Cálculo de Avanço (Vf)</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Avanço por Dente (fz - mm)</label>
                            <input 
                                type="number" 
                                value={feedPerTooth || ''} 
                                onChange={(e) => setFeedPerTooth(Number(e.target.value))}
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mts-yellow transition-colors"
                                placeholder="Ex: 0.05"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Número de Dentes (Z)</label>
                            <input 
                                type="number" 
                                value={teeth || ''} 
                                onChange={(e) => setTeeth(Number(e.target.value))}
                                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mts-yellow transition-colors"
                                placeholder="Ex: 4"
                            />
                        </div>
                        
                        <button 
                            onClick={calculateFeedRate}
                            disabled={!rpm}
                            title={!rpm ? "Calcule o RPM primeiro" : ""}
                            className={`w-full font-bold py-3 rounded-lg transition-colors uppercase tracking-wide mt-2 ${
                                rpm ? 'bg-zinc-700 hover:bg-zinc-600 text-white' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            }`}
                        >
                            Calcular Avanço
                        </button>

                        {feedRate !== null && (
                            <div className="mt-4 p-4 bg-mts-yellow/10 border border-mts-yellow/20 rounded-lg text-center">
                                <span className="block text-sm text-zinc-400 uppercase tracking-widest">Resultado</span>
                                <span className="block text-3xl font-bold text-white">{feedRate} <span className="text-sm text-mts-yellow">mm/min</span></span>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
            
            <div className="text-center mt-8">
                <button 
                    onClick={reset}
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-mts-yellow transition-colors"
                >
                    <RefreshCw size={16} />
                    Limpar dados
                </button>
            </div>
        </div>
    </section>
  );
}
