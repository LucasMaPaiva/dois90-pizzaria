import { TextArea, TextField } from './fields';

export default function HeroEditor({ value, onChange }) {
  const hero = value ?? {};
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
        hint="Ex: DESDE 1999 · BOA VISTA, RORAIMA"
      />
      <TextField label="Título principal" value={hero.title} onChange={set('title')} />
      <TextArea label="Subtítulo" value={hero.subtitle} onChange={set('subtitle')} rows={3} />
      <TextField
        label="Botão principal"
        value={hero.ctaPrimary}
        onChange={set('ctaPrimary')}
        hint="Abre a janela de escolha de unidade para pedir"
      />
      <TextField
        label="Botão secundário"
        value={hero.ctaSecondary}
        onChange={set('ctaSecondary')}
        hint="Leva para a página Quem Somos"
      />
      <TextField
        label="Texto de rolagem"
        value={hero.scrollText}
        onChange={set('scrollText')}
        hint="Ex: ROLE PARA EXPLORAR"
      />
    </div>
  );
}
