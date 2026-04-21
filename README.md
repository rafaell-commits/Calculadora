# 📱 Calculadora Web Minimalista

Uma calculadora elegante, funcional e responsiva desenvolvida com o "trio fundamental" da web: **HTML5, CSS3 e JavaScript puro**. Este projeto foi construído com foco em precisão matemática, interface limpa e uma experiência de usuário fluida, simulando o comportamento de calculadoras nativas.

---

## ✨ Diferenciais do Projeto

Diferente de calculadoras simples, este projeto implementa lógicas para resolver problemas comuns de aplicações web:

* **Precisão Numérica:** Utiliza a função `toPrecision(12)` para evitar erros comuns de ponto flutuante no JavaScript (como 0.1 + 0.2).
* **Interface Inteligente:** O visor se adapta automaticamente. Se o resultado exceder 12 caracteres, ele utiliza notação científica para não quebrar o layout.
* **Suporte Total a Teclado:** Mapeamento completo para uso de números, operadores, `Enter` para igual, `Esc` para limpar (AC) e `%`.
* **Design Moderno:** Layout construído com **CSS Grid**, garantindo alinhamento perfeito e responsividade.
* **Segurança Matemática:** Tratamento de erro para divisões por zero, exibindo uma mensagem amigável em vez de valores infinitos.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é um exemplo de performance e leveza, utilizando **zero frameworks**:

1.  **HTML5:** Estrutura semântica e acessível.
2.  **CSS3:** Uso de Grid, Flexbox e transições suaves nos botões.
3.  **Vanilla JavaScript (ES6+):** Lógica de estado, manipulação de DOM e delegação de eventos.

---

## 🧠 Destaques da Implementação

### 1. Delegação de Eventos
Em vez de criar um ouvinte para cada botão, o script utiliza um único *event listener* no container pai `.buttons`, identificando qual botão foi clicado através de atributos `data-a`. Isso torna o código mais limpo e performático.

### 2. Estilização Profissional
O CSS utiliza cores sóbrias e efeitos de `:active` para dar feedback tátil ao usuário, além de usar a direção de texto `rtl` (direita para esquerda) no display para simular o comportamento de calculadoras reais.

---

## 🚀 Como Executar

Não é necessário configurar nenhum ambiente de build. 

1. Faça o download ou clone este repositório.
2. Abra o arquivo `INDEX.HTML` em qualquer navegador.
3. Se preferir, você pode hospedar gratuitamente no **GitHub Pages**.

---

## ⌨️ Atalhos de Teclado

| Tecla | Função |
| :--- | :--- |
| `0-9` | Inserir números |
| `+`, `-`, `*`, `/` | Operadores matemáticos |
| `Enter` ou `=` | Calcular resultado |
| `Esc` | Limpar tudo (AC) |
| `%` | Porcentagem |
| `.` ou `,` | Ponto decimal |

---

## 🖋️ Considerações Finais

Este projeto demonstra como conceitos fundamentais de desenvolvimento web podem criar ferramentas poderosas e visualmente agradáveis sem a necessidade de bibliotecas externas pesadas.

**Sinta-se à vontade para explorar o código, fazer forks ou sugerir melhorias!** 🚀
