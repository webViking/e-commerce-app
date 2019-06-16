# Zadanie 
Zadanie  polega na napisaniu programu, który ma przedstawiać proces
 zakupowy książek (pobieranie danych o książkach z API, dodawanie i usuwanie
 produktów z koszyka, wypełnienie formularza danymi osobowymi potrzebnymi do
 realizacji zamówienia).


#### 1. Strona główna
###### Lista funkcjonalności składająca się dla ww. strony:
* pobieranie danych z API po wejściu na stronę aplikacji (**GET** _/book_),
* wyświetlenie wcześniej pobranych danych w konkretnym formacie, tj. każdą
 książkę powinien przedstawiać jeden blok, który ma w sobie zawierać okładkę
 książki, jej tytuł, autora, liczbę stron oraz dwa przyciski:
    * `DODAJ DO KOSZYKA`, który będzie dodawał konkretną pozycję do koszyka,
    * `ZAMÓW`, który będzie kierował do etapu podsumowania zamówienia.
###### Funkcjonalności dodatkowe:
- wyszukiwarka (po tytule lub autorze książki),
- paginacja (potrzebne dane będą zwracane z API, sposób realizacji dowolny).
#### 2. Strona prezentująca koszyk
###### Lista funkcjonalności składająca się na minimum dla ww. strony:
* wyświetlanie listy wybranych przez użytkownika książek,
* przycisk `DALEJ`, który będzie kierował do etapu podsumowania zamówienia.
###### Lista funkcjonalności składająca się dla ww. strony:
* formularza z polami:
    * imię,
    * nazwisko,
    * numer kontaktowy,
    * email,
    * ulica i numer budynku,
    * miejscowość,
    * kod pocztowy,
* przycisk `ZAMAWIAM` po naciśnięciu którego zostaną wysłane dane pod
 endpoint **POST** _/order_.
###### Funkcjonalności dodatkowa:
* walidacja formularza.

### Spis technologii przy pracy 
* react,
* redux,
* react-router,
* formik
* yup
* redux-thunk
* axios
* styled-components
* bootstrap


## Dokumentacja API
Dokumentacja w formacie OpenAPI 3 dostępna jest po uruchomieniu mock serwera
 i przejściu na adres: [localhost:3001/docs](http://localhost:3001/docs).

## Uruchamianie środowiska deweloperskiego
Wymagane jest posiadanie Node.js wraz z Yarn. Projekt wymaga instalacji i
 uruchomienia API mock serwera:
```bash
cd api
cp .env.dist .env # Plik może wymagać modyfikacji
yarn install
yarn start
```
oraz uruchomienia właściwego projektu - frontend:
```bash
cd front
cp .env.dist .env # Plik może wymagać modyfikacji
yarn install
yarn start
```
