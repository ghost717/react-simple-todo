# React TODO APP on react-webpack


## Instalacja i uruchomienie
#### 1. Instalacja
a) instalacja yeoman npm install -g yo
b) instalacja generatora npm install -g generator-react-webpack
c) instalacja generatora w katalogu projektu yo react-webpack

#### 2. Start
npm start
http://localhost:8000/
http://localhost:8000/webpack-dev-server


## LISTA KOMEND 

#### uruchomienie w trybie dev
npm start # lub
npm run serve

#### uruchomienie wykorzystując pliki z katalogu dist
npm run serve:dist

#### generowanie plików do katalogu dist + kopiowanie zasobów statycznych
npm run dist

#### urumienie testów
npm test

#### uruchomienie testów wraz z re-testem przy zmianie pliku
npm run test:watch

#### uruchomienie lintera (dzieje się też automatycznie po testach)
npm run lint

#### czyszczenie katalogu dist
npm run clean

#### kopiowanie statycznych zasobów
npm run copy

## SOURCE

https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
http://5a088601519b7c0012caab20.mockapi.io/api/v1/react-simple-todo