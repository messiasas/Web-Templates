# Template: Landing page de conversão

**Indicado para:** Campanhas de tráfego pago, lançamento de serviço ou produto, captação de leads.

## Estrutura

```
index.html   → conteúdo e estrutura
style.css    → visual (cores e fontes nas variáveis em :root)
script.js    → interações
img/         → imagens
```

## Recursos

Formulário que abre o WhatsApp com os dados do lead, máscara de telefone, contador regressivo da oferta e barra de ação fixa no celular. Configure o número e a data final no objeto `CONFIG` no topo do `script.js`. Se usar o Pixel da Meta, cole o código no `<head>`: o evento `Lead` já é disparado no envio.

## Como personalizar

1. Use "Localizar e substituir" do editor (no VS Code, Ctrl + Shift + H) para trocar os marcadores abaixo.
2. Substitua as imagens da pasta `img/`. Pode usar .jpg ou .png: basta ajustar a extensão no `index.html`.
3. Ajuste as cores e fontes nas variáveis no topo do `style.css`.
4. Revise os textos, apague as seções que não fizerem sentido e teste no celular.
5. Publique: envie a pasta para um repositório no GitHub e ative em Settings > Pages.

## Marcadores



- `{{BENEFICIO_1}}`
- `{{BENEFICIO_2}}`
- `{{BENEFICIO_3}}`
- `{{BENEFICIO_4}}`
- `{{BENEFICIO_CURTO_1}}`
- `{{BENEFICIO_CURTO_2}}`
- `{{BENEFICIO_CURTO_3}}`
- `{{CLIENTE_1}}`
- `{{CLIENTE_2}}`
- `{{CLIENTE_3}}`
- `{{CNPJ}}`
- `{{CONDICAO_PAGAMENTO}}`
- `{{DEPOIMENTO_1}}`
- `{{DEPOIMENTO_2}}`
- `{{DEPOIMENTO_3}}`
- `{{DESCRICAO_BENEFICIO_1}}`
- `{{DESCRICAO_BENEFICIO_2}}`
- `{{DESCRICAO_BENEFICIO_3}}`
- `{{DESCRICAO_BENEFICIO_4}}`
- `{{DESCRICAO_IMAGEM_PRODUTO}}`
- `{{DESCRICAO_PASSO_1}}`
- `{{DESCRICAO_PASSO_2}}`
- `{{DESCRICAO_PASSO_3}}`
- `{{DESCRICAO_SEO}}`
- `{{HEADLINE}}`
- `{{LEGENDA_NUMERO_1}}`
- `{{LEGENDA_NUMERO_2}}`
- `{{LEGENDA_NUMERO_3}}`
- `{{NOME_EMPRESA}}`
- `{{NOME_OFERTA}}`
- `{{NUMERO_1}}`
- `{{NUMERO_2}}`
- `{{NUMERO_3}}`
- `{{PASSO_1}}`
- `{{PASSO_2}}`
- `{{PASSO_3}}`
- `{{PERGUNTA_1}}`
- `{{PERGUNTA_2}}`
- `{{PERGUNTA_3}}`
- `{{PERGUNTA_4}}`
- `{{PRECO_ANTIGO}}`
- `{{PRECO_ATUAL}}`
- `{{RESPOSTA_1}}`
- `{{RESPOSTA_2}}`
- `{{RESPOSTA_3}}`
- `{{RESPOSTA_4}}`
- `{{SELO_DESTAQUE}}`
- `{{SUBHEADLINE}}`
- `{{TEXTO_BOTAO}}`
- `{{TEXTO_GARANTIA}}`
- `{{TEXTO_PROBLEMA}}`
- `{{TEXTO_SOLUCAO}}`
- `{{TITULO_FORMULARIO}}`
- `{{TITULO_PAGINA}}`
- `{{TITULO_PROBLEMA}}`

## Imagens

- `img/produto.svg`
