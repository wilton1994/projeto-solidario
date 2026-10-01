# Projeto Solidário

Projeto desenvolvido como atividade de front-end. A proposta é apresentar um projeto social simples, mostrar algumas ações e disponibilizar um formulário para participação.

## Páginas

- `index.html` - página inicial e apresentação do projeto.
- `projetos.html` - ações de doação e voluntariado.
- `cadastro.html` - formulário de participação.

## Tecnologias utilizadas

O projeto foi feito com HTML5, CSS3 e JavaScript puro. Não foi utilizado framework ou biblioteca externa.

## Recursos implementados

- HTML semântico com `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`.
- CSS Grid com 12 colunas e Flexbox em componentes internos.
- Layout responsivo com breakpoints para diferentes tamanhos de tela.
- Menu com dropdown no desktop e botão hambúrguer no mobile.
- Formulário com `required`, tipos de input e `pattern` para CPF, telefone e CEP.
- Estados visuais de botões e validação dos campos.
- Badge, alerta de sucesso e modal.
- Imagens em WebP com JPG como alternativa.
- Textos alternativos nas imagens.
- Navegação por teclado, foco visível e link para pular ao conteúdo.
- Botão de alto contraste.
- Atributos ARIA nos componentes que precisam informar estado.

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.
4. Use o menu para acessar as outras páginas.

Como é um projeto estático, não é necessário instalar dependências nem executar servidor para testar as páginas.

## Versionamento

A `main` é usada para a versão estável. A `develop` pode reunir alterações em desenvolvimento e novas funcionalidades podem ser feitas em branches `feature`. Depois dos testes, as alterações podem ser integradas novamente na `develop` e posteriormente na `main`.

As mensagens de commit podem seguir uma forma simples inspirada em Conventional Commits, por exemplo:

- `feat: adiciona menu responsivo`
- `feat: adiciona validação ao formulário`
- `style: ajusta layout responsivo`
- `docs: atualiza README`

## Publicação

O projeto está preparado para hospedagem estática, como GitHub Pages. Como os caminhos utilizados são relativos, as páginas, estilos, scripts e imagens funcionam quando o repositório é publicado dessa forma.
