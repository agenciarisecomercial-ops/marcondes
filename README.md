# Marcondes Açaí — Painel de Campanhas

App exclusivo Marcondes para acompanhamento de campanhas Meta Ads em tempo real.

## Deploy no Vercel

### 1. Sobe no GitHub
- Cria repositório `marcondes-painel` na org `agenciarisecomercial-ops`
- Sobe todos os arquivos desta pasta

### 2. Importa no Vercel
- vercel.com → Add New Project
- Importa o repositório `marcondes-painel`

### 3. Adiciona a variável de ambiente
- No Vercel → Settings → Environment Variables
- Nome: `META_TOKEN`
- Valor: (cole o token do Meta Ads aqui — nunca no código)

### 4. Deploy
- Clica em Deploy
- URL gerada: marcondes-painel.vercel.app (ou personalizar)

## Acessos

| Usuário | E-mail | Senha |
|---------|--------|-------|
| Gabriel (Rise) | gabriel@riseagencia.com | rise2026 |
| Lara (Rise) | lara@riseagencia.com | rise2026 |
| Eduardo (Marcondes) | eduardo@marcondes.com | marcondes2026 |
| Equipe Marcondes | marcondes@acai.com | marcondes2026 |

## Conta de anúncios
- ID: act_982200873226861

## Estrutura
```
/api/meta.js        → Serverless Function (proxy seguro para a API do Meta)
/public/index.html  → App principal
/vercel.json        → Configuração de rotas
```
