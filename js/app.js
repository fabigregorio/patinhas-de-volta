/* =========================================================
   PATINHAS DE VOLTA — SPA, TEMPLATES, MÁSCARAS E LOCALSTORAGE
========================================================= */

// 1. BANCO DE DADOS DOS ANIMAIS (CAMINHOS CORRIGIDOS COM ../)
const dadosAnimais = [
  { nome: "Bela", especie: "Cão - 2 anos", desc: "Resgatada da rua, dócil e ótima com crianças.", img: "../imagens/bela.jpg", alt: "Cachorra Bela, vira-lata de porte médio, dócil e disponível para adoção" },
  { nome: "Bartho", especie: "Gato - 1 ano", desc: "Brincalhão e carinhoso, totalmente recuperado.", img: "../imagens/bartho.jpg", alt: "Gato Bartho, pelagem curta, saudável e brincalhão, disponível para adoção" },
  { nome: "Thor", especie: "Cão - 5 anos", desc: "Calmo e companheiro.", img: "../imagens/thor.jpg", alt: "Cão Thor, porte grande, calmo e companheiro, disponível para adoção" },
  { nome: "Brigite", especie: "Gata - 1 ano", desc: "Dócil e brincalhona.", img: "../imagens/brigite.jpg", alt: "Gata Brigite, dócil e peluda, disponível para adoção" },
  { nome: "Freddy", especie: "Cão - 1 ano", desc: "Cheio de energia e muito amigável.", img: "../imagens/freddy.jpg", alt: "Cão Freddy, porte médio, brincalhão e enérgico, disponível para adoção" },
  { nome: "Maria e Margarida", especie: "Gatas - 1 ano", desc: "Amáveis e tranquilas.", img: "../imagens/maria-margarida.jpg", alt: "Duas gatas Maria e Margarida juntas, tranquilas e disponíveis para adoção conjunta" }
];

// 2. TEMPLATES DAS PÁGINAS (CAMINHOS DAS IMAGENS CORRIGIDOS COM ../)
const rotas = {
  inicio: () => `
    <section class="hero">
      <div class="container hero-conteudo">
        <div class="hero-texto">
          <h1>Todo animal resgatado merece uma segunda chance</h1>
          <p>Somos uma ONG dedicada a resgatar, cuidar e encontrar novos lares para animais vítimas de maus-tratos e abandono.</p>
          <a href="#cadastro" class="btn">Quero adotar</a>
          <a href="#projetos" class="btn btn-secundario">Ver projetos</a>
        </div>
        <figure class="hero-imagem">
          <img src="../imagens/banner.jpg" alt="Cães e gatos resgatados e felizes; chamada para adoção responsável e apoio à ONG Patinhas de Volta">
        </figure>
      </div>
    </section>

    <section class="sobre" id="sobre">
      <div class="container sobre-grid">
        <div>
          <h2>Quem somos</h2>
          <p>A Patinhas de Volta nasceu em 2020 através do trabalho de voluntários que resgatam animais vítimas de abandono e maus-tratos. Hoje mantemos abrigo temporário, atendimento veterinário e adoção responsável.</p>
          <p>Todos os animais passam por avaliação veterinária, vacinação, castração e adaptação antes da adoção.</p>
        </div>
        <figure class="sobre-imagem">
          <img src="../imagens/abrigo.jpg" alt="Instalações do abrigo da ONG Patinhas de Volta com espaço amplo e limpo para acolhimento dos animais resgatados">
        </figure>
      </div>
    </section>

    <section class="animais" id="animais">
      <div class="container">
        <h2>Animais para adoção</h2>
        <p>Conheça alguns dos nossos resgatados.</p>
        <div class="cards">
          ${dadosAnimais.map(animal => `
            <article class="card">
              <figure class="card-imagem">
                <img src="${animal.img}" alt="${animal.nome}">
              </figure>
              <div class="card-corpo">
                <span class="tag">${animal.especie}</span>
                <h3>${animal.nome}</h3>
                <p>${animal.desc}</p>
                <a href="#cadastro" class="btn">Quero adotar</a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="ajudar" id="ajudar">
      <div class="container">
        <h2>Como você pode ajudar</h2>
        <div class="formas-ajuda">
          <article class="forma-ajuda">
            <h3>Doação financeira</h3>
            <p>Ajude com ração, vacinas e tratamentos.</p>
          </article>
          <article class="forma-ajuda">
            <h3>Adoção Responsável</h3>
            <p>Transforme a vida de um animal resgatado.</p>
          </article>
          <article class="forma-ajuda">
            <h3>Voluntariado</h3>
            <p>Ajude no abrigo, resgates e divulgação.</p>
          </article>
        </div>
      </div>
    </section>
  `,

  sobre: () => `
    <section class="sobre container" style="padding: 60px 20px;">
      <div class="sobre-grid">
        <div>
          <h2>Quem somos</h2>
          <p>A Patinhas de Volta nasceu em 2020 através do trabalho de voluntários que resgatam animais vítimas de abandono e maus-tratos. Hoje mantemos abrigo temporário, atendimento veterinário e adoção responsável.</p>
          <p>Todos os animais passam por avaliação veterinária, vacinação, castração e adaptação antes da adoção.</p>
        </div>
        <figure class="sobre-imagem">
          <img src="../imagens/abrigo.jpg" alt="Abrigo de animais">
        </figure>
      </div>
    </section>
  `,

  projetos: () => `
    <section class="projetos-intro">
      <div class="container">
        <h1>Nossas iniciativas solidárias</h1>
        <p>Além do resgate e da adoção, realizamos campanhas de doação e ações de voluntariado.</p>
        <nav class="indice-projetos">
          <a href="#projetos-doacao">Ver doações</a>
          <a href="#projetos-voluntariado">Ver voluntariado</a>
        </nav>
      </div>
    </section>

    <section class="bloco-tematico" id="projetos-doacao">
      <div class="container">
        <h2>Campanhas de doação</h2>
        <p>Conheça formas de contribuir com a causa.</p>
        <div class="lista-projetos">
          <article class="projeto-card">
            <h3>Doação mensal recorrente</h3>
            <p>Contribuição fixa para ração, vacinas e medicamentos.</p>
          </article>
          <article class="projeto-card">
            <h3>Campanha de castração</h3>
            <p>Doações destinadas a mutirões gratuitos de castração.</p>
          </article>
          <article class="projeto-card">
            <h3>Doação de insumos</h3>
            <p>Aceitamos ração, cobertores e medicamentos.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bloco-tematico bloco-alternado" id="projetos-voluntariado">
      <div class="container">
        <h2>Como ser voluntário</h2>
        <p>Participe das nossas ações de apoio aos animais.</p>
        <div class="lista-projetos">
          <article class="projeto-card">
            <h3>Feira de adoção</h3>
            <p>Eventos para aproximar animais e futuros tutores.</p>
          </article>
          <article class="projeto-card">
            <h3>Lares temporários</h3>
            <p>Acolhimento provisório para animais resgatados.</p>
          </article>
          <article class="projeto-card">
            <h3>Apoio em resgates</h3>
            <p>Auxílio nas operações de resgate da ONG.</p>
          </article>
        </div>
        <br>
        <a href="#cadastro" class="btn">Quero ser voluntário</a>
      </div>
    </section>
  `,

  cadastro: () => {
    const cadastrosSalvos = JSON.parse(localStorage.getItem('cadastros_ong') || '[]');
    const ultimo = cadastrosSalvos[cadastrosSalvos.length - 1];

    return `
      <section class="cadastro">
        <div class="container">
          <header class="cadastro-intro">
            <h1>Cadastre-se como colaborador</h1>
            <p>Preencha seus dados para fazer parte da nossa rede de apoio.</p>
          </header>

          <div id="alerta-form"></div>

          <form id="form-cadastro">
            <div class="campo">
              <label for="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required minlength="5">
            </div>

            <div class="campo">
              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required>
            </div>

            <div class="campo">
              <label for="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required inputmode="numeric" maxlength="14">
              <small>Digite apenas os números.</small>
            </div>

            <div class="campo">
              <label for="telefone">Telefone / WhatsApp</label>
              <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required inputmode="numeric" maxlength="15">
              <small>Digite apenas os números.</small>
            </div>

            <div class="campo">
              <label for="cep">CEP</label>
              <input type="text" id="cep" name="cep" placeholder="00000-000" required inputmode="numeric" maxlength="9">
              <small>Digite apenas os números.</small>
            </div>

            <fieldset class="campo-checkboxes">
              <legend>Como você quer ajudar?</legend>
              <div class="opcao-checkbox">
                <input type="checkbox" id="interesse-doacao" name="interesse" value="doacao">
                <label for="interesse-doacao">Doação financeira</label>
              </div>
              <div class="opcao-checkbox">
                <input type="checkbox" id="interesse-voluntariado" name="interesse" value="voluntariado">
                <label for="interesse-voluntariado">Voluntariado</label>
              </div>
              <div class="opcao-checkbox">
                <input type="checkbox" id="interesse-adocao" name="interesse" value="adocao">
                <label for="interesse-adocao">Adoção</label>
              </div>
            </fieldset>

            <button type="submit" class="btn btn-enviar">Quero me cadastrar</button>
          </form>

          ${ultimo ? `
            <div class="alerta alerta-sucesso" style="margin-top: 25px;">
              <strong>Último colaborador cadastrado com sucesso:</strong> ${ultimo.nome} (${ultimo.email})
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }
};

function navegar() {
  const rawHash = window.location.hash.replace('#', '') || 'inicio';
  
  let rotaChave = rawHash;
  if (rawHash.startsWith('projetos')) {
    rotaChave = 'projetos';
  }

  const render = rotas[rotaChave] || rotas.inicio;
  const main = document.getElementById('app-content');

  main.innerHTML = render();

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) menuToggle.checked = false;

  if (rotaChave === 'cadastro') {
    ativarMascarasEFormulario();
  }

  setTimeout(() => {
    const elementoAlvo = document.getElementById(rawHash);
    if (elementoAlvo) {
      elementoAlvo.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, 50);
}

function ativarMascarasEFormulario() {
  const campoCPF = document.getElementById('cpf');
  const campoTelefone = document.getElementById('telefone');
  const campoCEP = document.getElementById('cep');
  const form = document.getElementById('form-cadastro');

  if (campoCPF) {
    campoCPF.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '').slice(0, 11);
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})/, '$1-$2');
      e.target.value = valor;
    });
  }

  if (campoTelefone) {
    campoTelefone.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (valor.length > 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (valor.length > 2) {
        valor = valor.replace(/^(\d{2})(\d*)/, '($1) $2');
      } else if (valor.length > 0) {
        valor = valor.replace(/^(\d*)/, '($1');
      }
      e.target.value = valor;
    });
  }

  if (campoCEP) {
    campoCEP.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '').slice(0, 8);
      valor = valor.replace(/(\d{5})(\d{1,3})/, '$1-$2');
      e.target.value = valor;
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const cpf = document.getElementById('cpf').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const cep = document.getElementById('cep').value.trim();

      const cadastros = JSON.parse(localStorage.getItem('cadastros_ong') || '[]');
      cadastros.push({ nome, email, cpf, telefone, cep, data: new Date().toISOString() });
      localStorage.setItem('cadastros_ong', JSON.stringify(cadastros));

      exibirToast("✓ Cadastro realizado e salvo com sucesso!");
      navegar();
    });
  }
}

function exibirToast(mensagem) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = mensagem;
  toast.style.display = 'block';

  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

window.addEventListener('hashchange', navegar);
window.addEventListener('DOMContentLoaded', navegar);