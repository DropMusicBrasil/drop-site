// Tweaks — Site oficial Drop Music Brasil

const DROP_TWEAKS = /*EDITMODE-BEGIN*/{
  "accent": "#2e5bff",
  "density": "regular",
  "showQuem": true,
  "showNumeros": true,
  "showImprensa": true,
  "showMarcas": true
}/*EDITMODE-END*/;

function applyDropTweaks(t) {
  const r = document.documentElement;
  r.dataset.density = t.density;
  r.dataset.hideQuem = (!t.showQuem).toString();
  r.dataset.hideNumeros = (!t.showNumeros).toString();
  r.dataset.hideImprensa = (!t.showImprensa).toString();
  r.dataset.hideMarcas = (!t.showMarcas).toString();
  r.style.setProperty('--blue', t.accent);
  // derive glow ~ lighter
  r.style.setProperty('--blue-glow', t.accent);
}

function DropTweaksApp() {
  const [t, setTweak] = useTweaks(DROP_TWEAKS);
  React.useEffect(() => { applyDropTweaks(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks · Drop">
      <TweakSection label="Identidade" />
      <TweakColor label="Azul elétrico" value={t.accent}
                  options={['#2e5bff', '#5b86ff', '#22d3ee', '#7c5cf0']}
                  onChange={(v) => setTweak('accent', v)} />
      <TweakSection label="Layout" />
      <TweakRadio label="Densidade" value={t.density}
                  options={[
                    { label: 'Compacto', value: 'compact' },
                    { label: 'Regular', value: 'regular' },
                    { label: 'Espaçoso', value: 'comfy' },
                  ]}
                  onChange={(v) => setTweak('density', v)} />
      <TweakSection label="Seções" />
      <TweakToggle label="Quem somos" value={t.showQuem} onChange={(v) => setTweak('showQuem', v)} />
      <TweakToggle label="Números" value={t.showNumeros} onChange={(v) => setTweak('showNumeros', v)} />
      <TweakToggle label="Imprensa" value={t.showImprensa} onChange={(v) => setTweak('showImprensa', v)} />
      <TweakToggle label="Para marcas" value={t.showMarcas} onChange={(v) => setTweak('showMarcas', v)} />
    </TweaksPanel>
  );
}

applyDropTweaks(DROP_TWEAKS);
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<DropTweaksApp />);
