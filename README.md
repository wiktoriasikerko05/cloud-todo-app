# Aplikacja TO-DO z synchronizacją w chmurze 

Projekt zrealizowany w ramach praktyk zawodowych. Jest to aplikacja typu "Lista Zadań" z funkcją synchronizacji danych w czasie rzeczywistym między urządzeniami (Real-Time Cloud Sync).

1. Analiza Wymagań 

Cel projektu:
Stworzenie narzędzia zwiększającego produktywność, eliminującego problem braku spójności danych między urządzeniami użytkownika (np. laptop i telefon).

Wymagania Funkcjonalne:
Dodawanie zadań: Użytkownik może wprowadzić tekst i dodać go do listy.
Synchronizacja Real-Time: Zmiany są natychmiast widoczne na innych urządzeniach (wykorzystanie WebSocket).
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

| ID | Test | Wynik |
| **01** | Synchronizacja między dwoma oknami przeglądarki | ✅ Pozytywny |
| **02** | Zapisywanie zadań w bazie Firestore | ✅ Pozytywny |
| **03** | Trwałość danych po odświeżeniu (F5) | ✅ Pozytywny |
| **04** | Poprawne wyświetlanie na PC i Mobile | ✅ Pozytywny |
| **05** | Obsługa usuwania i edycji statusu | ✅ Pozytywny |


