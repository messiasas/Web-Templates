# Oficina mecânica · Template 1 (Clássico)

Hero dividido (texto e imagem), números, cards de serviços, depoimentos em grade.

## Arquivos

```
index.html  → estrutura e textos
style.css   → visual (cores e fontes nas variáveis no topo)
script.js   → interações (configurações no objeto CONFIG no topo)
img/        → imagens de exemplo
```

## Como personalizar

1. No VS Code, use Ctrl + Shift + H para trocar os marcadores `{{...}}` listados abaixo.
2. Em `script.js`, troque o número do WhatsApp no objeto `CONFIG` e, se quiser, o intervalo de revisão (km e meses).
3. Revise os textos de exemplo (serviços, depoimentos, perguntas frequentes).
4. Substitua as imagens em `img/`. Se usar .jpg ou .png, ajuste a extensão no `index.html`.
5. Ajuste cores e fontes nas variáveis de `:root` no topo do `style.css`.
6. O formulário de contato monta a mensagem e abre o WhatsApp, sem precisar de servidor.

## Marcadores

- `{{CIDADE}}`
- `{{CNPJ}}`
- `{{DESCRICAO_IMAGEM_PRINCIPAL}}`
- `{{DESCRICAO_IMAGEM_SOBRE}}`
- `{{EMAIL}}`
- `{{ENDERECO}}`
- `{{LINK_FACEBOOK}}`
- `{{LINK_INSTAGRAM}}`
- `{{NOME_EMPRESA}}`
- `{{WHATSAPP_EXIBICAO}}`

## Imagens

- `img/hero.svg`
- `img/sobre.svg`
