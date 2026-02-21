# 🚀 Journey Learn React - Day 9 | رحلة تعلم ريأكت - اليوم 9

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

في هذا اليوم من رحلة تعلم ريأكت، ركزنا على فهم وبناء **المكونات النقية (Pure Components)**. تعلمنا كيف نضمن أن المكونات تقوم بالحسابات فقط ولا تغير الحالة الخارجية، مما يجعل الكود أكثر قابلية للتنبؤ وأسهل في التصحيح.

### 🛠️ ما تم إنجازه في هذا اليوم

1.  **إبقاء المكونات نقية:** تعلم القواعد الأساسية للنقاء؛ المكون يجب أن يهتم بشؤونه الخاصة فقط (لا يغير المتغيرات الخارجية) وأن يعطي نفس المخرجات لنفس المدخلات.
2.  **تجنب الآثار الجانبية أثناء الرندر:** فهم لماذا يجب أن تظل عملية الرندر خالية من أي تغييرات في البيانات الخارجية، وترك هذه التغييرات لمديري الأحداث (Event Handlers).
3.  **حل التحديات التطبيقية:**
    - **تحدي الساعة:** إصلاح كود يعتمد على تغيير متغير خارجي داخل الرندر.
    - **تحدي ملف التعريف:** حل مشكلة تداخل البيانات وتغيير الحالة بين مكونين منفصلين.
    - **تحدي الـ Story Tray:** إصلاح مشكلة تكرار البيانات الناتجة عن تعديل الـ Arrays (Prop mutation).

---

## 🇬🇧 English Section

### 🎯 Project Goal

Today's focus was on **Keeping Components Pure**. We explored the fundamental requirements for deterministic rendering in React, ensuring components act as pure formulas that always produce predictable JSX based on their inputs.

### 🚀 Key Accomplishments

- **Purity Patterns**: Implemented components as pure functions that don't mutate external state or variables.
- **Side-Effect Management**: Learned to keep the rendering logic pure and move side effects to Event Handlers or `useEffect`.
- **Debugging Mutation Issues**:
  - **Challenge 1 (Broken Clock)**: Fixed a bug where time calculation relied on mutating local variables during render.
  - **Challenge 2 (Broken Profile)**: Resolved an issue where shared objects caused state leakage between different instances.
  - **Challenge 3 (Broken Story Tray)**: Fixed an array mutation bug that caused duplicate entries when adding new stories.

### 📂 Project Structure

- `src/Challenge/`: Contains individual challenge solutions.
- `src/App.jsx`: Demonstrates purity concepts with tea recipes and gathering examples.
- `src/index.css`: Implementation of the **Premium Dark Theme**.

### 🛠️ Tech Stack

- **React 18**
- **Vite**
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
