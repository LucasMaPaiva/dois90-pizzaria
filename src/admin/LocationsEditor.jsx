import { Collapsible, TextField } from './fields';

export default function LocationsEditor({ value, onChange }) {
  const locations = value ?? {};
  const units = locations.units ?? [];

  const setHeader = (key) => (v) => onChange({ ...locations, [key]: v });

  function updateUnit(unitIdx, patch) {
    onChange({
      ...locations,
      units: units.map((u, i) => (i === unitIdx ? { ...u, ...patch } : u)),
    });
  }

  function updateSector(unitIdx, sectorIdx, patch) {
    const unit = units[unitIdx];
    updateUnit(unitIdx, {
      sectors: unit.sectors.map((s, i) => (i === sectorIdx ? { ...s, ...patch } : s)),
    });
  }

  function updateHour(unitIdx, sectorIdx, hourIdx, patch) {
    const sector = units[unitIdx].sectors[sectorIdx];
    updateSector(unitIdx, sectorIdx, {
      hours: sector.hours.map((h, i) => (i === hourIdx ? { ...h, ...patch } : h)),
    });
  }

  function addHour(unitIdx, sectorIdx) {
    const sector = units[unitIdx].sectors[sectorIdx];
    updateSector(unitIdx, sectorIdx, {
      hours: [...(sector.hours ?? []), { label: '', time: '' }],
    });
  }

  function removeHour(unitIdx, sectorIdx, hourIdx) {
    const sector = units[unitIdx].sectors[sectorIdx];
    updateSector(unitIdx, sectorIdx, {
      hours: sector.hours.filter((_, i) => i !== hourIdx),
    });
  }

  return (
    <div className="adm-section">
      <p className="adm-section-note">
        Endereço, links de pedido e horários de cada unidade. As fotos das unidades continuam
        sendo arquivos do site — para trocar uma foto, fale com o desenvolvedor.
      </p>

      <div className="adm-grid-2">
        <TextField label="Tarja da seção" value={locations.label} onChange={setHeader('label')} />
        <TextField label="Título" value={locations.title} onChange={setHeader('title')} />
        <TextField
          label="Título em destaque"
          value={locations.titleHighlight}
          onChange={setHeader('titleHighlight')}
        />
      </div>

      <h3 className="adm-h3">Unidades</h3>

      {units.map((unit, unitIdx) => (
        <Collapsible key={unit.id} title={unit.name} subtitle={unit.address}>
          <TextField
            label="Nome da unidade"
            value={unit.name}
            onChange={(v) => updateUnit(unitIdx, { name: v })}
          />
          <TextField
            label="Endereço"
            value={unit.address}
            onChange={(v) => updateUnit(unitIdx, { address: v })}
          />
          <TextField
            label="Link do botão FAZER PEDIDO"
            value={unit.order}
            onChange={(v) => updateUnit(unitIdx, { order: v })}
            hint="Endereço completo, começando com https://"
          />
          <TextField
            label="Link do COMO CHEGAR (Google Maps)"
            value={unit.maps}
            onChange={(v) => updateUnit(unitIdx, { maps: v })}
          />
          <TextField
            label="Link do WhatsApp"
            value={unit.whatsapp}
            onChange={(v) => updateUnit(unitIdx, { whatsapp: v })}
            hint="Ex: https://wa.me/559591520290"
          />

          <h4 className="adm-h4">Horários por setor</h4>

          {(unit.sectors ?? []).map((sector, sectorIdx) => (
            <div className="adm-sector" key={sector.id}>
              <TextField
                label="Nome do setor"
                value={sector.name}
                onChange={(v) => updateSector(unitIdx, sectorIdx, { name: v })}
              />

              <div className="adm-hours">
                {(sector.hours ?? []).map((hour, hourIdx) => (
                  <div className="adm-hour-row" key={hourIdx}>
                    <input
                      type="text"
                      placeholder="Descrição (ex: Loja física)"
                      value={hour.label ?? ''}
                      onChange={(e) =>
                        updateHour(unitIdx, sectorIdx, hourIdx, { label: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Horário (ex: 17:30 - 23h)"
                      value={hour.time ?? ''}
                      onChange={(e) =>
                        updateHour(unitIdx, sectorIdx, hourIdx, { time: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="adm-danger adm-icon-btn"
                      title="Remover horário"
                      onClick={() => removeHour(unitIdx, sectorIdx, hourIdx)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="adm-btn adm-btn-ghost"
                onClick={() => addHour(unitIdx, sectorIdx)}
              >
                + Adicionar horário em {sector.name}
              </button>
            </div>
          ))}
        </Collapsible>
      ))}
    </div>
  );
}
