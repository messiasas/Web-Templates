# Template: Profissional liberal / consultório

**Indicado para:** Médicos, dentistas, psicólogos, advogados, contadores, nutricionistas, esteticistas.

## Estrutura

```
index.html   → conteúdo e estrutura
style.css    → visual (cores e fontes nas variáveis em :root)
script.js    → interações
img/         → imagens
```

## Recursos

Menu mobile, áreas de atuação em acordeão e formulário de agendamento que monta a mensagem no WhatsApp, bloqueando datas passadas e dias sem atendimento. Configure no objeto `CONFIG` do `script.js`. Atenção: CFM, CRO, CRP e OAB restringem depoimentos e promessas de resultado. Revise essa seção conforme o código de ética da profissão.

## Como personalizar

1. Use "Localizar e substituir" do editor (no VS Code, Ctrl + Shift + H) para trocar os marcadores abaixo.
2. Substitua as imagens da pasta `img/`. Pode usar .jpg ou .png: basta ajustar a extensão no `index.html`.
3. Ajuste as cores e fontes nas variáveis no topo do `style.css`.
4. Revise os textos, apague as seções que não fizerem sentido e teste no celular.
5. Publique: envie a pasta para um repositório no GitHub e ative em Settings > Pages.

## Marcadores



- `{{ANOS_EXPERIENCIA}}`
- `{{ANO_1}}`
- `{{ANO_2}}`
- `{{ANO_3}}`
- `{{AREA_1}}`
- `{{AREA_2}}`
- `{{AREA_3}}`
- `{{AREA_4}}`
- `{{AREA_5}}`
- `{{AREA_6}}`
- `{{CIDADE}}`
- `{{CONVENIO_1}}`
- `{{CONVENIO_2}}`
- `{{CONVENIO_3}}`
- `{{DEPOIMENTO_1}}`
- `{{DEPOIMENTO_2}}`
- `{{DESCRICAO_AREA_1}}`
- `{{DESCRICAO_AREA_2}}`
- `{{DESCRICAO_AREA_3}}`
- `{{DESCRICAO_AREA_4}}`
- `{{DESCRICAO_AREA_5}}`
- `{{DESCRICAO_AREA_6}}`
- `{{DESCRICAO_FOTO_CONSULTORIO}}`
- `{{DESCRICAO_SEO}}`
- `{{ENDERECO_CONSULTORIO}}`
- `{{FORMACAO_1}}`
- `{{FORMACAO_2}}`
- `{{FORMACAO_3}}`
- `{{FORMAS_PAGAMENTO}}`
- `{{INICIAIS_1}}`
- `{{INICIAIS_2}}`
- `{{LINK_INSTAGRAM}}`
- `{{NOME_CURTO}}`
- `{{NOME_PROFISSIONAL}}`
- `{{PROFISSAO}}`
- `{{REGISTRO_PROFISSIONAL}}`
- `{{SUBTITULO}}`
- `{{TEXTO_AREAS}}`
- `{{TEXTO_ATENDIMENTO_ONLINE}}`
- `{{TEXTO_SOBRE_1}}`
- `{{TEXTO_SOBRE_2}}`
- `{{TITULO_PRINCIPAL}}`

## Imagens

- `img/consultorio.svg`
- `img/profissional.svg`
