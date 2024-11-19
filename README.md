# SENAI Cotia - "Ricardo Lerner"

<p align="center">
<a href= "https://sp.senai.br/unidade/cotia/"><img src="https://www.conre3.org.br/portal/wp-content/uploads/2024/05/logo-senai-1.png" alt="SENAI Cotia - "Ricardo Lerner" border="0"></a>
</p>

# DS´LANCHES

## Integrantes: <a href="" >Roger Alves Lemos</a>, <a href="https://github.com/vitorsdev20" >Vitor Sousa</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/giovannirp/" >Giovani Ribeiro</a>

# Descrição

 O projeto "DS' Lanches" é um aplicativo desenvolvido em React Native, focado em proporcionar uma experiência prática e intuitiva para pedidos de lanches e refeições. O layout é composto por várias telas, incluindo uma tela de boas-vindas com um botão de continuação, uma tela de seleção de produtos com diferentes opções de lanches e preços, e uma tela de descrição detalhada de cada produto. O usuário pode fazer pedidos preenchendo um formulário com dados como nome, telefone, tipo de pedido e quantidade.
O projeto também possui funcionalidades para gestão de pedidos, com uma interface de login para administradores e uma tela para visualizar e editar pedidos dos clientes, onde cada pedido pode ser atualizado ou removido. A paleta de cores em tons de laranja e bege confere um visual agradável e acolhedor ao aplicativo, alinhado ao tema de um restaurante ou lanchonete.
Também reutilizamos hooks e elementos de projetos anteriores, trazendo maior eficiência e consistência ao desenvolvimento. Essa abordagem permite o aproveitamento de funcionalidades já testadas, como a gestão de estados e efeitos no React Native, além de otimizar o tempo de desenvolvimento. A utilização de componentes e hooks reaproveitados facilita a manutenção e a escalabilidade do aplicativo, além de garantir uma experiência mais robusta para o usuário.
Fizemos algumas requisições de Api, onde desenvolvemos em Nodejs. Para a funcionalidade do aplicativo e integração do Back-end, usamos useState e useEffect para receber os dados do Back-end e assim, trabalhar com essa integração, fazendo as funções de puxar dados(GET), editar(PUT) e delete(DELETE). 

### Front-end

- **React Native**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Javascript**: Gerenciamento de rotas.

### Back-end

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **JSON**: Criação e implementação do banco de dados.

## 🛠 Instalação

Para configurar e executar o projeto localmente, siga estas etapas:

### Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- CASO NÃO TENHA O NODE usar esse comando a seguir: npx react-native init NomeDoProjeto
- NPM (incluído com o Node.js)

### Instalação

1. Clone o repositório do projeto:
   ```
   git clone https://github.com/RogerDevL/DS_LANCHES.git
   ```
2. Navegue até a pasta do projeto e instale o node, se ja estiver dentro da pasta:
   ```
   cd Backend
   npm install

   Após baixar o Back end, inicie o terminal e deve entrar na pasta Front end e rodar este comando abaixo:
   npm install
   
   ```
3. Inicie o terminal na pasta do projeto, e rode os comandos para iniciar o Back-end e front end.
   ```
   cd Backend(caso já não abra na pasta)
   npm start

   entre agora, na pasta Front End e rode este comando:
   npx expo start
   logo após rodar este comando, aperte "a", assim ele irá abrir o projeto em seu Android Studio(caso tenha instalado).
   ```
