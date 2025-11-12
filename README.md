# 🧠 Genius Clone (Simon Game)



Uma simples e divertida implementação do clássico jogo de memória **Genius** (também conhecido como Simon) construída com **Vue 3 (Composition API)**.

## 🌟 Visão Geral

Este projeto recria o famoso jogo eletrônico dos anos 80, onde o jogador deve repetir uma sequência crescente de cores/sons aleatórios. O objetivo é testar e aprimorar sua memória de curto prazo.

### ✨ Funcionalidades

* **Jogo Clássico de Sequência:** O jogo apresenta uma sequência de luzes e sons que o jogador deve replicar.
* **Progressão de Dificuldade:** A cada rodada bem-sucedida, um novo passo é adicionado à sequência, aumentando o desafio.
* **Feedback Visual e Sonoro:** Feedback claro de qual cor está piscando e um som para indicar a ação.
* **Indicação de Erro:** Feedback visual e sonoro quando o jogador erra a sequência.
* **Contador de Rodadas:** O botão "Start" mostra a contagem atual de passos na sequência.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **Vue.js 3:** Framework principal para a interface do usuário (utilizando a Composition API e `<script setup>`).
* **JavaScript (ES6+):** Lógica do jogo e manipulação de estado.
* **CSS (Scoped):** Estilização para recriar o visual do Genius.
* **Bootstrap (Min. CSS):** Para a estrutura básica do layout.

## 🚀 Como Jogar

1.  **Iniciar:** Clique no botão central **"Start"**.
2.  **Memorizar:** Observe e ouça a sequência de cores que se acendem.
3.  **Repetir:** Clique nas cores na **ordem exata** em que piscaram.
4.  **Próxima Rodada:** Se você acertar, o jogo adicionará mais uma cor à sequência e a repetirá, e você terá que memorizar e repetir a sequência mais longa.
5.  **Fim de Jogo:** Se você errar a sequência, o jogo indicará o erro com um som e reiniciará.

## 💻 Estrutura do Código (Componente `App.vue`)

A lógica principal do jogo está contida no arquivo `App.vue` e utiliza a Composition API do Vue.

| Variável/Função | Tipo | Descrição |
| :--- | :--- | :--- |
| `genius` | `ref([])` | Array que armazena a sequência correta de cores (0 a 3). |
| `userGenius` | `ref([])` | Array que armazena a sequência inserida pelo usuário na rodada atual. |
| `currentBeep` | `ref(null)` | Indica a cor que está piscando no momento (para feedback visual). |
| `pressable` | `ref(false)` | Flag para evitar que o usuário interaja durante a exibição da sequência. |
| `wrong` | `ref(false)` | Flag para indicar visualmente um erro. |
| `gameStart()` | `async function` | Inicia um novo jogo e a primeira rodada. |
| `nextRound()` | `async function` | Adiciona um novo passo à sequência e a exibe. |
| `pressColor(index)` | `function` | Lógica de interação do usuário: registra a cor pressionada e verifica o acerto/erro. |
| `missGame()` | `async function` | Lógica para processar um erro e reiniciar o jogo. |

### Notas sobre o Som 🎵

O som do "beep" é implementado através de uma `Audio` embutida usando uma string **base64** para garantir que o som esteja disponível sem a necessidade de arquivos externos, simplificando a implantação.

## ⚙️ Instalação e Execução (Assumindo um Projeto Vue Padrão)

Para rodar este projeto localmente, você precisará ter o **Node.js** e o **npm** (ou **yarn**) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
    cd [NOME DO REPOSITÓRIO]
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o projeto:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O aplicativo estará disponível em `http://localhost:5173` (ou a porta padrão configurada pelo seu ambiente Vue/Vite).

## 📄 Licença

Este projeto está sob a licença [Licença MIT](LICENSE)..
