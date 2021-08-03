# Micro Frontends

Tradicionalmente aplicações são formadas de dois monolitos, o monolito de backend e o monolito de frontend. Apesar da adoção de microserviços muitas aplicações mantém o monolito de frontend dado a simplicidade comparativa de regras e complexidade. Mas isso se torna um problema quando cada microserviço da aplicação é adiministrado por equipes diferentes, dessa forma cada microserviço possui necessidades e prazos distintos, e o monolito de frontend se torna um ponto de contenção entre as equipes.

Com a separação do frontend em um ou mais frontends para cada microserviço se alcança a verdadeira separação e isolamento entre os diversos módulos do sistema. Dessa forma cada frontend vira uma unidade indenpendente de deploy:

![](https://micro-frontends.org/ressources/diagrams/organisational/monolith-frontback-microservices.png)

O framework mais maduro com suporte a angular para administrar microfronteds é o: https://single-spa.js.org. Esse framework tem suporte a todos os SPAs mais famosos, permitidindo que cada "aplicação" seja implementada com qualquer uma dessas tecnologias.

## Single-spa com Angular

Uma aplicação exemplo utilizando micro-front ends é composta das aplicações que serão injetadas e uma aplicação raiz que orquestrará essa injeção. Aplicações nesse contexto são os microfrontends.

![](https://i.imgur.com/cxiay2z.png)

A aplicação raiz tem os endereços dos bundles de cada uma das Aplicações.

![](https://i.imgur.com/JzKZOye.png)

O [single-spa](https://single-spa.js.org) utiliza de cada um desses bundles angular que estão disponíveis e monta a aplicação.

## Como rodar a aplicação exemplo

Faça na ordem:

### App1

`npm run serve:single-spa:app1`

### App2

`npm run serve:single-spa:app2`

### Root

`npm start`
