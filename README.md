# Chameleon Digital - Proiect Didactic React + Material-UI (MUI)

Acest proiect este o aplicație web modernă, de tip Single Page Application (SPA), creată special ca suport de curs pentru studenți. Scopul său este de a exemplifica utilizarea framework-ului **React** împreună cu librăria de componente **Material-UI (MUI)** și sistemul de navigare **React Router v7**.

Aplicația simulează site-ul de prezentare al unei agenții de software fictive, numită **Chameleon Digital**, al cărei concept central este *adaptabilitatea* în lumea tehnologiei.

---

## 🚀 Pornire Rapidă (Ghid de Instalare)

Pentru a rula acest proiect pe calculatorul tău local, urmează pașii de mai jos:

### 1. Clonarea / Descărcarea Proiectului
Dacă ai un repozitoriu Git:
```bash
git clone <url-repozitoriu>
cd mui
```

### 2. Instalarea dependențelor
Proiectul folosește `npm` ca manager de pachete. Rulează comanda de mai jos pentru a descărca și instala bibliotecile necesare (React, MUI, React Router, React Icons):
```bash
npm install
```

### 3. Rularea serverului de dezvoltare
Pornește serverul local oferit de **Vite**:
```bash
npm run dev
```
După pornire, aplicația va fi accesibilă în browser la adresa indicată în consolă (de obicei `http://localhost:5173`).

### 4. Construirea versiunii de producție
Dacă dorești să generezi fișierele optimizate pentru deployment:
```bash
npm run build
```
Codul compilat va fi generat în folderul `/dist`.

---

## 📂 Structura Proiectului și Rolul Fișierelor

Proiectul respectă o structură modulară și curată, ușor de urmărit:

```text
├── public/                 # Fișiere statice (imagini, logo-uri, favicon)
│   ├── cameleon.jpg
│   ├── generic-map.jpg
│   └── vite.svg
├── src/
│   ├── components/         # Componente reutilizabile
│   │   └── Layout/         # Elementele de structură globală a paginii
│   │       ├── Menu.jsx    # Bara de navigare superioară (responsive AppBar)
│   │       └── index.jsx   # Wrapper-ul principal pentru pagini
│   ├── routes/             # Paginile corespunzătoare rutelor de navigare
│   │   ├── Contact.jsx     # Formular de contact și tab-uri cu informații
│   │   ├── DespreNoi.jsx   # Povestea, misiunea și valorile agenției
│   │   ├── LandingPage.jsx # Pagina principală (Hero section, servicii, CTA)
│   │   └── Preturi.jsx     # Cardurile side-by-side cu tarife și pachete
│   ├── App.jsx             # Configurarea rutelor globale ale aplicației
│   ├── main.jsx            # Punctul de intrare React, setarea temei globale
│   └── theme.js            # Fișierul de configurare a temei Material-UI
├── index.html              # Template-ul HTML de bază în care se injectează codul React
├── package.json            # Dependențele și scripturile proiectului
└── vite.config.js          # Configurația utilitarului de build Vite
```

### Detalierea Fișierelor Principale:

*   **`src/main.jsx`**: Este cel mai înalt punct din ierarhia de randare. Aici se învelește întreaga aplicație într-un `<ThemeProvider theme={theme}>` pentru ca stilurile MUI să fie disponibile în toate componentele, și se folosește `<CssBaseline />` pentru a asigura o normalizare CSS consistentă pe toate browserele.
*   **`src/App.jsx`**: Configurează rutele folosind `react-router-dom`. Pagina principală, secțiunea de prețuri, contactul și detaliile despre agenție sunt randate în mod dinamic în interiorul componentei `<Layout>`, în funcție de adresa din browser.
*   **`src/theme.js`**: Definește o temă personalizată prin `createTheme()`. Aici este setată paleta de culori primare (`#141f4f`, un albastru închis corporate) și secundare (`#19857b`, un verde teal modern), permițând schimbarea rapidă a identității vizuale a site-ului.
*   **`src/components/Layout/Menu.jsx`**: O componentă esențială pentru studiul designului responsiv. Pe ecrane mari (desktop) randează un meniu orizontal, iar pe ecrane mici (mobil, breakpoint `xs`) ascunde meniul orizontal și afișează o pictogramă tip hamburger (trei linii) care deschide un meniu dropdown.
*   **`src/routes/LandingPage.jsx`**: Conține animația de intrare (`Fade`), un grid cu două coloane pe desktop (text de prezentare la stânga și o imagine la dreapta), un set de carduri cu efect de hover la trecerea mouse-ului și un apel la acțiune (CTA) final.

---

## 💡 Concepte Cheie de Studiu (MUI & React)

În timpul analizei codului din acest proiect, acordați o atenție deosebită următoarelor concepte:

### 1. Sistemul de Design Responsiv (Grid v2/Grid)
Material-UI folosește un sistem de grid bazat pe 12 coloane. Breakpoint-urile implicite sunt:
*   `xs` (extra-small): telefoane (>= 0px)
*   `sm` (small): tablete (>= 600px)
*   `md` (medium): laptopuri mici (>= 900px)
*   `lg` (large): ecrane mari (>= 1200px)

Exemplu de cod din proiect:
```jsx
<Grid size={{ xs: 12, md: 6 }}>
  {/* Ocupă toată lățimea (12 coloane) pe mobil și jumătate (6 coloane) pe desktop */}
</Grid>
```

### 2. Personalizarea Componentelor prin Proprietatea `sx`
Proprietatea `sx` este motorul de stilizare rapidă din Material-UI. Aceasta permite scrierea de stiluri CSS direct în componente, având acces facil la variabilele din temă (ex. `color: 'primary.main'`, `bgcolor: 'background.paper'`, `borderRadius: 2`).

### 3. State Management în Componente
În `src/routes/Contact.jsx`, se exemplifică utilizarea hook-ului `useState` pentru a gestiona tab-ul activ:
```jsx
const [activeTab, setActiveTab] = useState(0);
```
Acesta dictează ce componentă se afișează dedesubt, demonstrând conceptul de **randare condiționată**.

### 4. Navigarea Programatică cu React Router
Pentru a naviga fără a reîncărca întreaga pagină (Single Page Application), folosim hook-ul `useNavigate`:
```jsx
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
// ...
onClick={() => navigate('/contact')}
```

---

## 🛠️ Teme și Exerciții Practice Propuse

Pentru a-ți fixa cunoștințele dobândite în timpul cursului, încearcă să rezolvi următoarele sarcini de lucru:

### Exercițiul 1: Validarea formularului de Contact și Feedback Vizual
Momentan, butonul „Trimite mesajul” din pagina `Contact.jsx` nu are nicio logică atașată.
*   **Cerință**:
    1. Creează stări (state) în React pentru câmpurile din formular: Nume, Email, Telefon și Mesaj.
    2. Adaugă o funcție care validează aceste date la apăsarea butonului (ex: email-ul să conțină `@`, mesajul să aibă minim 10 caractere).
    3. Dacă datele sunt valide, afișează o componentă de tip [`Snackbar`](https://mui.com/material-ui/react-snackbar/) cu o componentă [`Alert`](https://mui.com/material-ui/react-alert/) de la MUI de culoare verde (success) care să scrie „Mesajul a fost trimis cu succes!”. Dacă datele sunt incorecte, afișează un alert roșu (error).

### Exercițiul 2: Implementarea Dark Mode / Light Mode
Un site premium trebuie să ofere utilizatorului posibilitatea de a alege tema întunecată sau luminoasă.
*   **Cerință**:
    1. În `src/theme.js`, redefinește tema pentru a suporta paleta de culori adaptabilă (`mode: 'light'` vs `mode: 'dark'`).
    2. Mutați controlul temei în componenta `App.jsx` sau `main.jsx` folosind `useState` pentru modul temei (`'light'` sau `'dark'`).
    3. Adaugă un buton (iconiță cu Soare/Lună) în bara de meniu (`Menu.jsx`) care să comute această stare la click și să actualizeze interfața în timp real.

### Exercițiul 3: Pagina de detalii a unui pachet de prețuri
*   **Cerință**:
    1. Definește o rută dinamică nouă în `src/App.jsx` de forma `/preturi/:pachetId` care să direcționeze utilizatorul spre o pagină nouă de detalii a pachetului.
    2. Când un utilizator apasă pe butonul unui card din pagina de prețuri, acesta ar trebui navigat programatic către noua pagină (ex: `/preturi/pachet-standard`).
    3. În pagina de destinație, folosește hook-ul `useParams` din `react-router-dom` pentru a prelua `pachetId` din URL și a afișa un text personalizat (de ex: „Ați ales să achiziționați Pachetul Standard”).

### Exercițiul 4: Îmbunătățirea aspectului Layout-ului global
Wrapper-ul curent din `src/components/Layout/index.jsx` are un chenar gri punctat: `border: "1px dashed grey"`. Acest stil a fost adăugat doar pentru a delimita vizual zona de conținut în timpul dezvoltării inițiale.
*   **Cerință**:
    1. Elimină chenarul punctat.
    2. Înlocuiește-l cu un fundal moale pentru pagină și organizează conținutul în interiorul unui [`Paper`](https://mui.com/material-ui/react-paper/) alb elegant cu margini rotunjite și umbră fină (elevation), asigurându-te că site-ul își păstrează aspectul premium.

---

## 📚 Resurse Utile
*   [Documentația Oficială React](https://react.dev/)
*   [Documentația Oficială Material-UI (MUI)](https://mui.com/material-ui/getting-started/)
*   [Ghidul React Router v7](https://reactrouter.com/)
*   [Material Design Guidelines](https://m3.material.io/)
