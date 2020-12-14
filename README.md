# ☀️ Praise the sun App 

## Sumário

- [Sobre o desafio](#sobre)
- [Resultado](#resultado) 
- [Instalação](#instalação)
- [Ferramentas](#ferramentas)
- [Arquitetura](#arquitetura)
- [Melhorias](#melhorias)

## Sobre

Desenvolva um aplicativo que consuma a localização atual do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.

Para fazer essa busca, pode-se usar a API do Open Weather Map: http://api.openweathermap.org/

## Resultado

| Após 6am até 18h                                                 | 18h até 6am                                            | 
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | 
| ![](video_day.gif)                                                  | ![](video_night.gif)  | 


Aplicação mostrando temperatura atual, temperatura para às próximas 12 horas e temperatura diária para 1 semana. Além de detalhes como horário de nascer/pôr do sol, humidade relativa do ar, visibilidade, etc.
Também conta com background dinâmico em relação ao horário atual. 

## Instalação

`$ git clone https://github.com/nymalone/praise-the-sun.git`

`$ yarn` 

`$ yarn ios`

A aplicacão estará rodando no simulador. *(Utilizado xcode para desenvolvimento)* 

## Ferramentas
- React native
- Redux 
- Redux thunk
- Styled components
- React native geocoding 
- React native community geolocation
- Openweather api

## Arquitetura
O **Atomic Design** é uma metodologia que nos ajuda a pensar na interface do usuário (UI) de maneira hierarquia, e apresenta técnicas para otimizar o fluxo de trabalho do design e desenvolvimento em equipe.
Ao dividir os componentes em átomos básicos, é fácil ver quais partes do site podem ser reutilizadas e como elas podem ser misturadas e combinadas para formar outras moléculas e até organismos. O atômic design nos fornece uma estrutura para navegar entre as partes e a totalidade de nossas UIs.

## Melhorias 
* Aplicação de testes unitários
* Tratamento de geolocalização


---

<p align="center">Feito com 💛 por <strong>Nykolle Malone :wave: </p>
