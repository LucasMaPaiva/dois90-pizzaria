import { TextArea, TextField } from './fields';

export default function HeroEditor({ value, onChange, limits }) {
  const hero = value ?? {};
  const T = limits?.text ?? {};
  const set = (key) => (v) => onChange({ ...hero, [key]: v });

  return (
    <div className="adm-section">
      <p className="adm-section-note">
        Textos da primeira tela do site — o que o cliente vê antes de rolar a página.
      </p>

      <TextField
        label="Tarja de cima"
        value={hero.tagline}
        onChange={set('tagline')}
        max={T.heroTagline}
        hint="Ex: DESDE 1999 · BOA VISTA, RORAIMA"
      />
      <TextField label="Título principal" value={hero.title} onChange={set('title')}
        max={T.heroTitle} />
      <TextArea label="Subtítulo" value={hero.subtitle} onChange={set('subtitle')}
        max={T.heroSubtitle} rows={3} />
      <TextField
        label="Botão principal"
        value={hero.ctaPrimary}
        onChange={set('ctaPrimary')}
        max={T.heroCta}
        hint="Abre a janela de escolha de unidade para pedir"
      />
      <TextField
        label="Botão secundário"
        value={hero.ctaSecondary}
        onChange={set('ctaSecondary')}
        max={T.heroCta}
        hint="Leva para a página Quem Somos"
      />
      <TextField
        label="Texto de rolagem"
        value={hero.scrollText}
        onChange={set('scrollText')}
        max={T.heroScrollText}
        hint="Ex: ROLE PARA EXPLORAR"
      />
    </div>
  );
}
