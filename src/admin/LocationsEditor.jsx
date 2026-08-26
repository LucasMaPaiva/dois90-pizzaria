import { AddButton, Collapsible, TextField } from './fields';
import MediaField from './MediaField';

export default function LocationsEditor({ value, onChange, limits }) {
  const locations = value ?? {};
  const T = limits?.text ?? {};
  const C = limits?.count ?? {};
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
        Endereço, foto da fachada, links de pedido e horários de cada unidade.
      </p>

      <div className="adm-grid-2">
        <TextField
          label="Tarja da seção"
          value={locations.label}
          onChange={setHeader('label')}
          max={T.locationsLabel}
        />
        <TextField
          label="Título"
          value={locations.title}
          onChange={setHeader('title')}
          max={T.locationsTitle}
        />
        <TextField
          label="Título em destaque"
          value={locations.titleHighlight}
          onChange={setHeader('titleHighlight')}
          max={T.locationsTitleHighlight}
        />
      </div>

      <h3 className="adm-h3">Unidades</h3>

      {units.map((unit, unitIdx) => (
        <Collapsible key={unit.id} title={unit.name} subtitle={unit.address}>
          <TextField
            label="Nome da unidade"
            value={unit.name}
            onChange={(v) => updateUnit(unitIdx, { name: v })}
            max={T.unitName}
          />
          <TextField
            label="Endereço"
            value={unit.address}
            onChange={(v) => updateUnit(unitIdx, { address: v })}
            max={T.unitAddress}
          />
          <MediaField
            label="Foto da fachada"
            value={unit.image}
            onChange={({ media }) => updateUnit(unitIdx, { image: media })}
            hint="Recomendado 1600 × 890 (proporção 16:9), como as fotos atuais. Prefira imagem, não vídeo."
          />

          <TextField
            label="Link do botão FAZER PEDIDO"
            value={unit.order}
            onChange={(v) => updateUnit(unitIdx, { order: v })}
            max={T.url}
            hint="Endereço completo, começando com https://"
          />
          <TextField
            label="Link do COMO CHEGAR (Google Maps)"
            value={unit.maps}
            onChange={(v) => updateUnit(unitIdx, { maps: v })}
            max={T.url}
          />
          <TextField
            label="Link do WhatsApp"
            value={unit.whatsapp}
            onChange={(v) => updateUnit(unitIdx, { whatsapp: v })}
            max={T.url}
            hint="Ex: https://wa.me/559591520290"
          />

          <h4 className="adm-h4">Horários por setor</h4>

          {(unit.sectors ?? []).map((sector, sectorIdx) => (
            <div className="adm-sector" key={sector.id}>
              <TextField
                label="Nome do setor"
                value={sector.name}
                onChange={(v) => updateSector(unitIdx, sectorIdx, { name: v })}
                max={T.unitName}
              />

              <div className="adm-hours">
                {(sector.hours ?? []).map((hour, hourIdx) => (
                  <div className="adm-hour-row" key={hourIdx}>
                    <input
                      type="text"
                      placeholder="Descrição (ex: Loja física)"
                      maxLength={T.hourLabel}
                      value={hour.label ?? ''}
                      onChange={(e) =>
                        updateHour(unitIdx, sectorIdx, hourIdx, { label: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Horário (ex: 17:30 - 23h)"
                      maxLength={T.hourTime}
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

              <AddButton
                label={`+ Adicionar horário em ${sector.name}`}
                onClick={() => addHour(unitIdx, sectorIdx)}
                current={sector.hours?.length ?? 0}
                max={C.hoursPerSector}
              />
            </div>
          ))}
        </Collapsible>
      ))}
    </div>
  );
}
