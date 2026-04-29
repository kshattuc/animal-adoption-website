# Hopeful Tails - Animal Adoption Website

## Features

### Pages
- Home  
- Cats  
- Dogs  
- Other Animals  

### Animal Profiles
Each animal includes:
- Name  
- Image  
- Breed  
- Color  
- Vaccination status  
- Description  

### Functionality
- “Adopt Now” button → updates to **Adopted**
- Availability status changes dynamically  
- Reusable components across pages  
- Data fetched from Supabase  

---

## Tech Stack

### Frontend
- React (JavaScript)

### Styling
- Tailwind CSS  
- DaisyUI  

### Backend
- Supabase  

### Routing
- React Router  

---

## Project Structure
animal-adoption-website/
├── public/
├── src/
│ ├── config/
│ ├── pages/
│ ├── AnimalList.js
│ ├── App.js
│ ├── navbar.js
│ ├── Footer.js
│ └── styles.css
├── package.json
└── tailwind.config.js

## Installation

### 1. Clone repo
bash
git clone <your-repo-url>
cd animal-adoption-website

### 2. Install dependencies
npm install

### Environment Variables

Create a `.env` file in the root directory by copying the `.env.example` example file:
Then fill in your values:
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key

### 3. Run project
npm start

## Contributions

### Katie
- Built the initial front-end structure using React and JavaScript  
- Created pages: Home, Cats, Dogs, and Other Animals  
- Designed static animal profile layouts (name, image, breed, color, vaccination status, description)  
- Implemented the “Adopt Now” button with front-end state updates  

---
### Huyen
- Configured routing using React Router and managed shared state across pages  
- Developed and refactored a reusable `AnimalList` component for consistent rendering  
- Designed and set up the Supabase database and animal table  
- Implemented data fetching from Supabase to display dynamic animal data  
- Handled adoption functionality by updating animal status in the database  
- Ensured adoption status persists by syncing UI changes with Supabase  

---
### Emerson
- Designed the overall UI, including layout, color scheme, and responsiveness using Tailwind CSS and DaisyUI  
- Built reusable components (navbar, footer, animal cards, buttons, collapsible sections)  
- Refined UI to display dynamic data cleanly  
- Troubleshot layout issues, especially responsiveness and image handling  