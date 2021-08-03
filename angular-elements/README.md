# Micro Frontends

Tradicionalmente aplicações são formadas de dois monolitos, o monolito de backend e o monolito de frontend. Apesar da adoção de microserviços muitas aplicações mantém o monolito de frontend dado a simplicidade comparativa de regras e complexidade. Mas isso se torna um problema quando cada microserviço da aplicação é adiministrado por equipes diferentes, dessa forma cada microserviço possui necessidades e prazos distintos, e o monolito de frontend se torna um ponto de contenção entre as equipes.

Com a separação do frontend em um ou mais frontends para cada microserviço se alcança a verdadeira separação e isolamento entre os diversos módulos do sistema. Dessa forma cada frontend vira uma unidade indenpendente de deploy:


![](https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png)

É [possível compilar elementos angular](https://angular.io/guide/elements) utilizando a tecnologia web de custom elements. Só é necessário criar um pacote com os elementos, importá-los em um tag `<script>` e utilizá-los em qualquer página web.

![](https://i.imgur.com/7hMfiW1.png)

## Como rodar a aplicação exemplo

Faça na ordem:

### App1

`npm run serve:component`

### App2

`npm run serve:component`

### Root

`npm start`
