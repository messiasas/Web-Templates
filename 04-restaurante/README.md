# Template: Restaurante / delivery

**Indicado para:** Restaurantes, pizzarias, hamburguerias, cafés e confeitarias.

## Estrutura

```
index.html   → conteúdo e estrutura
style.css    → visual (cores e fontes nas variáveis em :root)
script.js    → interações
img/         → imagens
```

## Recursos

Selo "Aberto agora / Fechado agora" calculado pelo horário, tabela de horários gerada automaticamente, cardápio em abas e botões de pedido pelo WhatsApp. Configure o número e os horários no topo do `script.js` (objeto `HORARIOS`). O mapa usa o `src` do iframe gerado em Google Maps > Compartilhar > Incorporar um mapa.

## Como personalizar

1. Use "Localizar e substituir" do editor (no VS Code, Ctrl + Shift + H) para trocar os marcadores abaixo.
2. Substitua as imagens da pasta `img/`. Pode usar .jpg ou .png: basta ajustar a extensão no `index.html`.
3. Ajuste as cores e fontes nas variáveis no topo do `style.css`.
4. Revise os textos, apague as seções que não fizerem sentido e teste no celular.
5. Publique: envie a pasta para um repositório no GitHub e ative em Settings > Pages.

## Marcadores

`{{ITEM}}`, `{{DESCRICAO_ITEM}}` e `{{PRECO}}` se repetem e devem ser trocados um a um.

- `{{CIDADE}}`
- `{{DESCRICAO_DESTAQUE_1}}`
- `{{DESCRICAO_DESTAQUE_2}}`
- `{{DESCRICAO_DESTAQUE_3}}`
- `{{DESCRICAO_FOTO_AMBIENTE}}`
- `{{DESCRICAO_ITEM}}`
- `{{DESCRICAO_SEO}}`
- `{{DIFERENCIAL_1}}`
- `{{DIFERENCIAL_2}}`
- `{{DIFERENCIAL_3}}`
- `{{ENDERECO_COMPLETO}}`
- `{{FRASE_PRINCIPAL}}`
- `{{ITEM}}`
- `{{LINK_GOOGLE_MAPS}}`
- `{{LINK_IFOOD}}`
- `{{LINK_INSTAGRAM}}`
- `{{NOME_RESTAURANTE}}`
- `{{PRATO_DESTAQUE_1}}`
- `{{PRATO_DESTAQUE_2}}`
- `{{PRATO_DESTAQUE_3}}`
- `{{PRECO}}`
- `{{PRECO_DESTAQUE_1}}`
- `{{PRECO_DESTAQUE_2}}`
- `{{PRECO_DESTAQUE_3}}`
- `{{SRC_IFRAME_GOOGLE_MAPS}}`
- `{{SUBTITULO}}`
- `{{TEXTO_HISTORIA_1}}`
- `{{TEXTO_HISTORIA_2}}`
- `{{TIPO_DE_COZINHA}}`
- `{{TITULO_HISTORIA}}`

## Imagens

- `img/ambiente.svg`
- `img/hero.svg`
- `img/prato1.svg`
- `img/prato2.svg`
- `img/prato3.svg`
