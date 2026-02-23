# 🚀 Journey Learn React - Final Project | رحلة تعلم ريأكت - المشروع الختامي

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

هذا هو المشروع الختامي لقسم **"Describing the UI"**. الهدف هو بناء لوحة تحكم (Dashboard) سياحية احترافية تسمى **VoyageVibe**، مع الالتزام بقواعد صارمة تركز على هيكلة الواجهة ونقل البيانات عبر الـ Props دون استخدام أي حالات (State) أو Hooks، لضمان فهم عميق لكيفية بناء شجرة المكونات وتدفق البيانات.

### 🛠️ ما تم إنجازه في هذا اليوم

تم بناء تطبيق متكامل يتبع معايير التصميم الحديثة والقواعد التالية:

1.  **لوحة تحكم احترافية (Premium Dashboard):** تصميم واجهة داكنة (Dark Theme) باستخدام Glassmorphism وتنسيقات HSL المخصصة.
2.  **هيكلة المكونات (Component Architecture):** تقسيم التطبيق إلى مكونات مستقلة تماماً (Navbar, Sidebar, DestinationCard, DestinationList) لضمان القابلية لإعادة الاستخدام.
3.  **التصيير الشرطي والخرائط (Conditional Rendering & Maps):** استخدام `map` لعرض الوجهات، مع إظهار علامات "Featured" و "New" بناءً على البيانات.
4.  **استخدام JSX Variables:** تنظيم الكود بجعل أجزاء الـ UI المعقدة مخزنة في متغيرات داخل المكون لزيادة أناقة الكود وقابليته للقراءة.
5.  **الالتزام بالقواعد (Rules of the Road):** عدم استخدام أي Hooks، والاعتماد الكلي على الـ Props لتمثيل البيانات.

---

## 🇬🇧 English Section

### 🎯 Project Goal

This is the final project for the **"Describing the UI"** section. The goal was to build a premium travel dashboard named **VoyageVibe**, focusing on component architecture, data flow via props, and clean UI description. This project strictly follows rules that prohibit hooks, ensuring absolute mastery of React's fundamental rendering patterns.

### 🚀 Key Accomplishments

Implemented a sophisticated dashboard following a premium design system:

- **Component Splitting**: Every part of the UI is a separate, well-defined component in its own file.
- **Data-Driven UI**: Entirely driven by props from a central `data.js` file, simulating a production-ready data flow.
- **JSX Variables implementation**: Used JSX variables to handle complex conditional logic, making the `return` statement clean and readable.
- **Premium Aesthetics**: Integrated **Framer Motion** for animations and **Lucide React** for icons within a Glassmorphism theme.
- **Pure Component Logic**: Ensured all rendering logic remains pure and focused only on describing the UI.

### 📂 Project Structure

- `src/components/Navbar.jsx`: Dashboard top navigation with search and user profile.
- `src/components/Sidebar.jsx`: Category navigation with dynamic item counts.
- `src/components/DestinationCard.jsx`: Detailed card for each travel spot.
- `src/DestinationList.jsx`: Grid-based container for destination cards.
- `src/data.js`: Central data repository.

### 🛠️ Tech Stack

- **React 18**
- **Vite**
- **Lucide React** (Icons)
- **Framer Motion** (Animations)
- **JavaScript (ES6+)**

---

## 🚀 How to Run | كيفية التشغيل

1. **Clone the repository | استنساخ المستودع**

   ```bash
   git clone https://github.com/Mostafanaeam/React-Docs-Journey.git
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
