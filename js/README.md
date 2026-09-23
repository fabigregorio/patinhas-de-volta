# 🐾 Patinhas de Volta — ONG de Proteção Animal

> Aplicação web desenvolvida no formato **Single Page Application (SPA)** para gestão de doações, ações de voluntariado e adoção responsável de animais resgatados.

---

## 🔗 Link do Site Online (Deploy)
- **Acesse o projeto:** [https://fabigregorio.github.io/patinhas-de-volta/](https://fabigregorio.github.io/patinhas-de-volta/html)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Acessível** (Marcação semântica e normas WCAG 2.1 AA)
- **CSS3 Responsivo** (Design System, Flexbox e CSS Grid)
- **Vanilla JavaScript (ES6+)** (Roteamento SPA, manipulação do DOM e eventos)
- **Web Storage API** (Persistência local de dados com `localStorage`)
- **Git & GitHub** (Controle de versão e hospedagem contínua)

---

## ♿ Acessibilidade (WCAG 2.1 Nível AA)

A interface foi projetada para garantir total inclusão:
- **Perceptível:** Imagens possuem textos descritivos (`alt`) com contexto completo dos animais e seções.
- **Operável:** Navegação 100% funcional via teclado (tecla `Tab`) com destaque visual nos campos ativos (`:focus`).
- **Compreensível:** Formulário de cadastro com instruções, validação de campos e máscaras automáticas (CPF, Telefone e CEP).
- **Robusto:** Mensagens de confirmação e avisos visuais do tipo *Toast* e caixas de alerta.

---

## 📁 Estrutura de Diretórios do Projeto

```text
patinhas-de-volta/
│
├── html/
│   └── index.html               (Estrutura base e ponto de entrada da SPA)
│
├── css/
│   └── style.css                (Estilos globais, responsividade e foco acessível)
│
├── js/
│   └── app.js                   (Roteamento SPA, templates dinâmicos, máscaras e localStorage)
│
├── imagens/                     (Imagens e fotos dos animais otimizadas)
│
└── README.md                    (Documentação técnica do projeto)