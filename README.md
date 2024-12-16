# [Logo Longtail](https://logo.longtail.info/)

## 📖 Description

`Logo Longtail` is an in-house project showcasing all the logos of the brands and companies `Longtail` has worked with. This platform was built with a dedicated team of designers and developers. Users can:

- Search for logos,
- View logos and their details,
- Download logos in different formats (with proper authority).

---

## 🚀 Features

- 🔍 **Search**: Find logos efficiently using the search feature.
- 🖼️ **View Details**: Explore detailed information about each logo.
- 📥 **Download**: Download logos in various formats, if authorized.
- 🔑 **User Authentication**: Secures download functionality.

---

## 🛠️ Technologies

### `Frontend`
- **Vite** + **React**: Fast and modern frontend tooling.
- **TypeScript**: Type-safe JavaScript.
- **pnpm**: Fast, disk space efficient package manager.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: Promise-based HTTP client.
- **React Router**: Declarative routing for React.
- **CryptoJS**: JavaScript library for cryptographic operations.

### `Backend`
- **PHP**: Server-side scripting language.
- **MySQL**: Relational database management system.

### `Deployment`
- **Frontend**: Deployed on `Cloudflare` Pages.
- **Backend**: Hosted on `MeroHamro` cPanel.

---

## 📁 Project Structure

### **src/**

| Folder            | Description                                      |
|--------------------|-------------------------------------------------|
| `components/`     | Contains reusable React components               |
| `hooks/`          | Custom React hooks                               |
| `pages/`          | Page-level components                            |
| `styles/`         | Global CSS and TailwindCSS configurations        |
| `utils/`          | Utility functions and API calls                  |
| `types/`          | TypeScript type definitions                      |

---

```plaintext
📂 logo-longtail
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 components
│   │   ├── 📂 ui
│   │   └── [Other Components]
|   ├── 📂 constants
│   │   └── data.ts
|   ├── 📂 layouts
│   │   └── [Layout Components]
│   ├── 📂 hooks
│   │   └── useCustomHook.tsx
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── 📂 utils
│   │   ├── api.tsx
│   ├── App.tsx
│   ├── global.d.ts
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslintrc.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

--- 

## ⚙️ Setup and Installation Frontend

1. Clone the repository

```bash
git clone https://github.com/Longtail-e-media/logo-longtail.git
```

2. Install the dependencies

```bash
pnpm install
```

3. Run the development server

```bash
pnpm run dev
```

(optional): For Local Network Access

```bash
pnpm run dev -- --host # Windows
pnpm run dev --host -  # Mac
```

4. Build the project

```bash
pnpm vite build
```

5. Preview the production build

```bash
pnpm vite serve
```

6. 🔒 `.env` Configuration
Create a .env file in the root directory and define the following environment variables:

```bash
VITE_API_URL=https://api.longtail.info
VITE_API_KEY=YOUR_API_KEY
VITE_API_SECRET=YOUR_API_SECRET
```

---

## 👤 Team Members

- **Concept**: [Bijan Bajracharya](#)
- **Frontend Developer**: [Purna Shrestha](https://purnashrestha.com.np/)
- **Backend Developer**: [Swarna Shakya](#), [Sahas Shakya](#)
- **Team Lead**: [Sunita Shakya](#)

---



## 📝 License
All the assets, and codes used in this project are the propety of `Longtail e-Media`. Use of any of the property without the permission of the owner is strictly prohibited.

## 🔖 Remarks
This version organizes the documentation clearly and ensures that developers can quickly get started with the project. Let me know if you'd like further customization!