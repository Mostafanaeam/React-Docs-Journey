# 🚀 Journey Learn React - Day 3 | رحلة تعلم ريأكت - اليوم 3

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react logo" width="80" height="80" />
</div>

> [!NOTE]
> **Source**: The sole and primary source and reference for this project is the official documentation: [react.dev](https://react.dev).
> <br>
> **المصدر**: المصدر والمرجع الأساسي والوحيد لهذا المشروع هو التوثيق الرسمي: [react.dev](https://react.dev).

---

## 🇪🇬 القسم العربي (Arabic Section)

### 🎯 الهدف من المشروع

في هذا اليوم، ركزنا على فهم كيفية تقسيم المكوّنات (Components) إلى ملفات منفصلة وإدارتها باستخدام **الاستيراد والتصدير** في React. تعلمنا الفرق بين **Default Export** و **Named Export**، وكيفية إعادة هيكلة Codebase لجعله أكثر قابلية للصيانة وإعادة الاستخدام.

### 🛠️ ما تم إنجازه في هذا اليوم

1.  **تصدير المكوّنات (Exporting Components):** تطبيق `default export` لتصدير مكوّن `Profile` من ملفه الخاص `Profile.jsx`، ومكوّن `Gallery` من `Gallery.jsx`.
2.  **استيراد المكوّنات (Importing Components):** استيراد مكوّن `Profile` داخل `Gallery.jsx` واستخدامه لعرض قائمة من البطاقات، ثم استيراد كلا المكوّنين في `App.jsx`.
3.  **تحدي تقسيم المكوّنات:** حل تحدي React الرسمي الخاص باليوم الثالث، وهو نقل مكوّن `Profile` من ملف `Gallery.jsx` إلى ملفه المستقل `Profile.jsx`، مع تحديث جميع ملفات الاستيراد المرتبطة بشكل صحيح.

---

## 🇬🇧 English Section

### 🎯 Project Goal

Today's focus was on understanding how to split components into separate files and manage them using **Importing & Exporting** in React. We learned the difference between **Default** and **Named** exports, and how to restructure a codebase for better maintainability and reusability.

### 🚀 Key Accomplishments

- **Exporting Components**: Applied `default export` to export the `Profile` component from its own `Profile.jsx` file and `Gallery` from `Gallery.jsx`.
- **Importing Components**: Imported `Profile` inside `Gallery.jsx` to render a grid of cards, then imported both components into `App.jsx`.
- **Component Splitting Challenge**: Solved the official React docs challenge by moving the `Profile` component out of `Gallery.jsx` into its own standalone `Profile.jsx` file, updating all import statements accordingly.

### 📂 Project Structure

- `src/Profile.jsx`: A standalone component displaying a scientist's profile card.
- `src/Gallery.jsx`: A component that imports and renders multiple `Profile` components in a grid.
- `src/App.jsx`: Main entry point that imports and renders both `Profile` and `Gallery`.

### 🛠️ Tech Stack

- **React 18**
- **Vite**
- **JavaScript (ES6+)**

---

## 🚀 How to Run | كيفية التشغيل

1. **Clone the repository | استنساخ المستودع**

   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies | تثبيت المكتبات**

   ```bash
   npm install
   ```

3. **Run the development server | تشغيل السيرفر**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 About Me | عني

<div align="center">
  
  **Mostafa Abd El-naeam**
  <br>
  *Front-End Engineer (Angular & React)*

  <br>

  <p align="center">
    Mostafa Abd El-naeam is a Front-End Engineer specializing in Angular and modern JavaScript ecosystems, with a strong foundation in the MEAN stack and scalable web application architecture.
    <br><br>
    He builds production-ready interfaces with a focus on clean architecture, performance optimization, and maintainable code. His technical scope includes HTML, CSS, JavaScript, Angular, RESTful APIs, and an expanding focus on backend system design.
    <br><br>
    Currently, Mostafa is deepening his expertise in the React ecosystem, focusing on modern patterns, component architecture, and scalable front-end systems to broaden his impact across diverse technical stacks.
  </p>

  <br>

  <!-- Social Links -->
  <a href="https://github.com/Mostafanaeam">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  &nbsp;
  <a href="https://linkedin.com/in/mostafanaeam/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://mostafa-naeam.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  &nbsp;
  <a href="mailto:mnaeam10@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  &nbsp;
  <a href="https://wa.me/201114938410">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>

</div>

---

<div align="center">
  Done with ❤️ during the React Learning Journey
</div>
