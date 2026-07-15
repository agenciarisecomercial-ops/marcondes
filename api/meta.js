export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const TOKEN = process.env.META_TOKEN;
  const AD_ACCOUNT = 'act_982200873226861';

  if (!TOKEN) {
    return res.status(500).json({ error: 'META_TOKEN não configurado no Vercel.' });
  }

  const { tipo, period } = req.query;
  const days = period || '7';

  const datePreset = {
    '7': 'last_7d',
    '14': 'last_14d',
    '30': 'last_30d'
  }[days] || 'last_7d';

  const BASE = 'https://graph.facebook.com/v19.0';

  try {
    if (tipo === 'resumo') {
      // Métricas gerais da conta
      const fields = 'reach,clicks,spend,actions,impressions,cpm,ctr';
      const url = `${BASE}/${AD_ACCOUNT}/insights?fields=${fields}&date_preset=${datePreset}&access_token=${TOKEN}`;
      const r = await fetch(url);
      const data = await r.json();
      return res.status(200).json(data);
    }

    if (tipo === 'campanhas') {
      // Lista de campanhas com métricas
      const fields = 'campaign_name,status,reach,clicks,spend,actions,impressions,cpm,ctr';
      const url = `${BASE}/${AD_ACCOUNT}/insights?fields=${fields}&level=campaign&date_preset=${datePreset}&access_token=${TOKEN}`;
      const r = await fetch(url);
      const data = await r.json();
      return res.status(200).json(data);
    }

    if (tipo === 'diario') {
      // Alcance dia a dia
      const fields = 'reach,clicks,spend,impressions';
      const url = `${BASE}/${AD_ACCOUNT}/insights?fields=${fields}&date_preset=${datePreset}&time_increment=1&access_token=${TOKEN}`;
      const r = await fetch(url);
      const data = await r.json();
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: 'Tipo inválido. Use: resumo, campanhas ou diario' });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
