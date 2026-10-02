# LínguaViva — Plataforma de Ensino de Idiomas & Inclusão

Plataforma inclusiva e moderna para aprendizado de **Libras**, **Espanhol** e **Inglês** nas modalidades **EAD**, **Integral** e **Híbrida**, com área para alunos e cadastro de professores.

---

## 🚀 Como rodar o projeto localmente no VS Code

Como este é um projeto moderno em **React 19 + TypeScript + Vite**, ele **não abre apenas clicando duas vezes no `index.html`** (o navegador não interpreta `.tsx` puro sem compilação).

Siga os 4 passos abaixo para abrir e rodar perfeitamente no seu computador:

### 1. Pré-requisito
Certifique-se de ter o **Node.js** instalado no seu computador:
- Baixe a versão LTS em: [nodejs.org](https://nodejs.org) (caso ainda não tenha).

---

### 2. Abrir a pasta correta no VS Code
1. Extraia o arquivo `.zip`.
2. Abra o **VS Code**.
3. Vá em **Arquivo > Abrir Pasta...** (ou `File > Open Folder...`).
4. Selecione a pasta raiz do projeto (onde estão os arquivos `package.json`, `index.html` e a pasta `src`).
   > ⚠️ **Atenção:** Certifique-se de que o arquivo `package.json` está visível diretamente na raiz do explorador de arquivos do VS Code, e não dentro de uma subpasta.

---

### 3. Instalar as dependências
1. Abra o terminal integrado do VS Code:
   - Atalho: `Ctrl + '` (ou `Ctrl + J`, ou no menu superior: **Terminal > Novo Terminal**).
2. Digite o comando abaixo e aperte Enter:
   ```bash
   npm install
   ```
   *(Aguarde alguns segundos até que todas as bibliotecas sejam instaladas e a pasta `node_modules` seja criada).*

---

### 4. Iniciar o servidor local
Com as dependências instaladas, rode o comando:
```bash
npm run dev
```

Você verá uma mensagem como:
```text
  VITE v...  ready in ... ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Agora, segure a tecla **`Ctrl`** e clique no link `http://localhost:3000/` (ou abra seu navegador e acerte `http://localhost:3000`).

Pronto! O site estará funcionando com todas as animações, recursos de acessibilidade e telas interativas.

---

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento na porta 3000.
- `npm run build`: Compila e gera os arquivos finais otimizados para produção na pasta `dist/`.
- `npm run preview`: Visualiza localmente o build de produção.
- `npm run lint`: Checa tipos e integridade do código TypeScript.

---

## 📦 Como gerar os arquivos estáticos (HTML/CSS/JS final) para hospedagem
Se quiser publicar o site em hospedagens convencionais (Vercel, Netlify, GitHub Pages ou servidor cPanel):
```bash
npm run build
```
O Vite criará uma pasta chamada `dist/`. Essa pasta contém o HTML, CSS e JavaScript puros já empacotados e prontos para qualquer servidor web.
