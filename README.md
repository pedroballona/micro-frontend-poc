# POC de Micro Frontends para  Angular

Essa POC se consiste do estudo de duas alternativas para se implementar Micro Frontends com angular. [Uma POC](./single-spa/README.md) utiliza do framework single-spa e [a outra POC](./angular-elements/README.md) consiste do uso da nova tecnologia de custom elements em conjunto com o angular.

## Conclusões do Estudo

A [Poc utilizando custom elements](./single-spa/README.md) é bem mais simples ao compilar todo os aplicativos angular em componentes web que são uma tecnologia padrão de vários browsers. Mas nem todos os browsers possuem suporte a essa tecnologia podendo ser um problema dependendo dos requisitos da aplicação. Também pelo fato que a construção dos micro frontends utilizando essa abordagem não possui o suporte de um framework maduro, não é possível saber todos os corner-cases para essa utilização.

A [Poc utilizando do framework single-spa](./angular-elements/README.md) consegue alcançar os mesmos resultados da POC anterior mas existe uma grande depêndencia do framework [single-spa](https://single-spa.js.org). A vantagem do uso do single-spa é que é um framework com bastante suporte e documentação para todos os casos mais comuns do uso dessa tecnologia. Existem documentações e melhores práticas, além de vários projetos exemplo. Dessa forma, ao se utilizar essa tecnologia será possível ter uma maior suporte da comunidade.