# 🚀 Calculadora

Este é meu primeiro projeto desenvolvido para meu portfólio. Aqui explico o que ele faz e como cheguei ao resultado.

## ✨ Funcionalidades
- [x] Funcionalidade A
- [x] Como chegamos a este resultado :
   Explicação completa da Calculadora
vou separar os três arquivos — estrutura, visual e lógica, sem deixar nada de fora.

📄 INDEX.HTML — A estrutura
O HTML é objetivo e semântico. Ele define dois grandes blocos dentro de .calc:
1. O display (.display)
html<div class="expr" id="expr"></div>  <!-- linha cinza pequena -->
<div class="num"  id="num">0</div>  <!-- número principal grande -->
São dois elementos separados propositalmente: expr mostra a expressão em curso (ex: 15 +), e num mostra o número atual em tamanho grande. Isso imita o comportamento da calculadora do iPhone.
2. Os botões (.buttons)
Cada botão tem um atributo data-a com o valor da ação. Esse atributo é a ponte entre o HTML e o JavaScript — o JS lê data-a para saber o que fazer, sem depender de id ou classes específicas por botão. As classes CSS são apenas visuais:
btn se refere ao estilo base de todo botão, btn op é voltado para as operações + - x /, btn fn para as funções AC +/- %, btn eq para o sinal de =, o btn zero para o 0 que ocupa mais de 1 coluna e, por fim o btn danger que seria o AC em vermelho

🎨 STYLES.CSS — O visual
Layout geral: o body usa flexbox centralizado na tela inteira (min-height: 100vh). A calculadora tem largura fixa de 300px, cantos arredondados e borda sutil.
O grid de botões:
css.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
Cria 4 colunas de tamanho igual. O botão 0 usa grid-column: span 2 para ocupar o espaço duplo — esse é o detalhe que faz o layout funcionar sem gambiarras.
O display: fundo levemente acinzentado (#f5f5f0), alinhamento à direita, e direction: rtl nos textos. Esse rtl é inteligente: quando o número é longo demais para caber, ele transborda para a esquerda (escondendo o início), não para a direita, priorizando os dígitos mais recentes que o usuário digitou.
o active muda o fundo do botão para #f0f0ec, dando resposta tátil ao clique. O transition: 0.08s torna essa mudança suave mas rápida.

⚙️ SCRIPT.JS — A lógica
As variáveis de estado
jslet current = '0', prev = null, operator = null, justEvaled = false;
Quatro variáveis controlam tudo:

current → o número que está sendo digitado agora
prev → o número guardado antes do operador
operator → qual operação foi escolhida (+, −, ×, ÷)
justEvaled → flag que sinaliza "acabei de pressionar ="

A função fmt — formatação inteligente
jsconst fmt = v => {
  const n = parseFloat(v);
  if (isNaN(n)) return 'Erro';
  const s = parseFloat(n.toPrecision(12)).toString();
  return s.length > 12 ? n.toExponential(6) : s;
};
Ela resolve dois problemas clássicos de calculadoras em JavaScript:

Números flutuantes feios — 0.1 + 0.2 em JS dá 0.30000000000000004. O toPrecision(12) arredonda para 12 dígitos significativos, eliminando o lixo do final, e o parseFloat externo remove zeros desnecessários.
Números gigantes, se o resultado tem mais de 12 caracteres, exibe em notação científica (ex: 1.234568e+15).

A função calc — o motor das operações
jsconst calc = (a, op, b) => {
  const fa = parseFloat(a), fb = parseFloat(b);
  if (op === '÷') return fb === 0 ? 'Erro' : String(fa / fb);
  ...
};
Recebe dois números e um operador, executa a conta e retorna o resultado como string. A divisão por zero é tratada aqui, retornando 'Erro' em vez de Infinity.
O event listener central — delegação de eventos
Em vez de colocar um addEventListener em cada botão, o código usa delegação de eventos:
jsdocument.querySelector('.buttons').addEventListener('click', e => {
  const btn = e.target.closest('[data-a]');
  ...
});
Um único listener no container .buttons captura todos os cliques. O closest('[data-a]') sobe na árvore DOM até encontrar o botão com o atributo, o que é mais robusto e eficiente.
O fluxo de operação passo a passo
Veja o que acontece quando você digita 7 + 3 =:
PassoAçãocurrentprevoperator1digita 7"7"nullnull2pressiona +"0""7""+"3digita 3"3""7""+"4pressiona ="10"nullnull
No passo 2, current vai para prev, o operador é guardado e current é zerado para receber o próximo número. No passo 4, calc("7", "+", "3") é chamado e o resultado entra em current.
O justEvaled — comportamento pós-resultado
Essa flag resolve um comportamento específico: se você acabou de pressionar = e digitar um novo número, o resultado anterior é descartado e a digitação começa do zero. Sem isso, o novo dígito seria concatenado ao resultado.
O suporte a teclado
jsconst map = { '.':'.', ',':'.', '+':'+', '-':'−', '*':'×', '/':'÷', 'Enter':'=', 'Escape':'ac', ... };
Um mapa traduz teclas do teclado físico para os data-a dos botões. Depois, simplesmente simula um .click() no botão correspondente — reutilizando toda a lógica já existente sem duplicar código. Repare que , também é mapeado para ., considerando teclados BR.

🔗 Como os três arquivos se conectam :
INDEX.HTML  →  define a estrutura e os data-a de cada botão
STYLES.CSS  →  transforma a estrutura em visual
SCRIPT.JS   →  lê os data-a e executa a lógica de cálculo
O design central é o atributo data-a: ele desacopla o visual da lógica. Você pode mudar completamente o CSS sem quebrar o JS, e vice-versa.

## 🛠️ Tecnologias usadas
- HTML5 
- CSS3
-  JavaScript

## 🔗 Link para visualizar

<img width="441" height="581" alt="image" src="https://github.com/user-attachments/assets/ec62f66c-91df-4c26-b352-52f2115a9a25" />

Você pode acessar o projeto rodando aqui:
