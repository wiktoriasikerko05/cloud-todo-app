# Aplikacja TO-DO z synchronizacją w chmurze 

Projekt zrealizowany w ramach praktyk zawodowych. Jest to aplikacja webowa do zarządzania zadaniami, wykorzystująca chmurę do przechowywania danych w czasie rzeczywistym.

1. Analiza Wymagań 

Cel projektu:
Stworzenie aplikacji typu "Lista Zadań", która przechowuje dane w zewnętrznej bazie danych (chmurze), zapewniając trwałość danych niezależnie od urządzenia lokalnego.

Wymagania Funkcjonalne:
Dodawanie zadań: Użytkownik może wprowadzić tekst i dodać go do listy.
Synchronizacja Real-Time: Natychmiastowa synchronizacja danych. Zmiany dokonane w jednej karcie przeglądarki pojawiają się natychmiast w innych otwartych instancjach aplikacji.
Oznaczanie statusu: Interaktywne checkboxy zmieniają stan zadania na "wykonane" (zmienia się styl graficzny).
Usuwanie: Możliwość trwałego usunięcia zadania z bazy danych.
Trwałość danych: Zadania są zapisywane w chmurze i nie znikają po odświeżeniu strony.

Wymagania Niefunkcjonalne:
* Responsywność (RWD) – poprawne działanie na PC i Mobile.
* Niskie opóźnienie synchronizacji (< 1s).
* Przejrzysty interfejs użytkownika (UI).


2. Projekt Architektury

Stos technologiczny:
Frontend: React.js + Vite
Język: JavaScript
Baza Danych (Backend): Google Firebase Firestore
Komunikacja: Firebase SDK
Stylizacja: CSS3.

Przepływ danych:
`[Użytkownik] <-> [React App] <-> [Google Cloud Firestore] <-> [Inne Urządzenia]`



3. Instrukcja Uruchomienia

Aby uruchomić projekt lokalnie:

1.  Sklonuj repozytorium lub pobierz pliki.
2.  Zainstaluj zależności (wymaga Node.js):
    ```bash
    npm install
    ```
3.  Uruchom serwer deweloperski:
    ```bash
    npm run dev
    ```
4.  Otwórz w przeglądarce adres: `http://localhost:5173`



4. Raport z Testów

Aplikacja przeszła pomyślnie następujące scenariusze testowe:

Trwałość danych: Zadanie dodane do listy pozostaje na niej po ponownym uruchomieniu przeglądarki.
Synchronizacja: Otwarcie aplikacji w dwóch oknach przeglądarki obok siebie pozwala obserwować zmiany w czasie rzeczywistym.
Operacje CRUD: Poprawne dodawanie, odczyt, edycja statusu (checkbox) i usuwanie rekordów z bazy Firebase.



