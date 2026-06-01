import Section from '../components/Section';
import Reveal from '../components/Reveal';

/**
 * The "pain" section — names the problem the reader recognizes.
 */
export default function PainPoint() {
  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            “Como você está se sentindo?” …{' '}
            <span className="text-slate-500">e o silêncio que vem depois.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            O olhar pro chão. O “sei lá”. Seja no consultório ou em casa, acessar o
            que se passa na cabeça de uma criança parece bater numa parede invisível.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-emotion-gradient opacity-20 blur-3xl rounded-full" />
            <p className="relative text-2xl md:text-4xl font-bold leading-snug">
              <span className="text-anger">Criança não se abre no interrogatório.</span>
              <br />
              <span className="text-anxiety">Ela se abre na brincadeira.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
