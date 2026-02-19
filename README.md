# 🚀 Journey Learn React | رحلة تعلم ريأكت

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

هذا المستودع يوثق رحلتي التعليمية لإتقان مكتبة **React** بالاعتماد الكامل على التوثيق الرسمي. يحتوي المشروع على مجلدات يومية، كل مجلد يمثل يوماً من التعلم وتطبيق مفاهيم محددة.

### 📅 سجل الرحلة (Progress Log)

#### ✅ [اليوم 1: البداية والأساسيات](./day1)

- إعداد بيئة العمل باستخدام **Vite**.
- بناء تطبيق متعدد اللغات (عربي/إنجليزي).
- دعم الاتجاه من اليمين لليسار (RTL).
- إدارة الحالة (State Management) للتبديل بين اللغات.

#### ✅ [اليوم 2: المكونات الأولى (Your First Component)](./day2)

- فهم بنية المكوّن (Component) في React وكيفية إنشائه.
- حل 4 تحديات رسمية من التوثيق:
  - **التحدي 1:** إصلاح `default export` الناقص.
  - **التحدي 2:** إصلاح `return statement` خاطئة.
  - **التحدي 3:** تطبيق قاعدة تسمية المكوّنات بـ `PascalCase`.
  - **التحدي 4:** كتابة مكوّن كامل من الصفر.
- التمييز بين الدوال العادية ومكوّنات React.

#### ✅ [اليوم 3: استيراد وتصدير المكونات](./day3)

- تقسيم المكوّنات إلى ملفات منفصلة لتحسين قابلية الصيانة.
- تطبيق `default export` على مكوّنَي `Profile` و `Gallery`.
- استيراد المكوّنات وتداخلها (نستخدم `Profile` داخل `Gallery`).
- حل التحدي الرسمي: نقل `Profile` من `Gallery.jsx` إلى ملفه المستقل `Profile.jsx`.

#### ✅ [اليوم 4: كتابة Markup بـ JSX](./day4)

- التعرف على JSX كامتداد لـ JavaScript يتيح كتابة HTML داخل الكود.
- فهم لماذا يُفضل معظم مطوري React استخدام JSX.
- تطبيق البنية الصحيحة لـ JSX وقواعدها الأساسية.

---

## 🇬🇧 English Section

### 🎯 Project Goal

This repository documents my journey to master **React**, relying entirely on the official documentation. The project contains daily folders, each representing a day of learning and applying specific concepts.

### 📅 Journey Log

#### ✅ [Day 1: Genesis & Basics](./day1)

- Setting up the environment using **Vite**.
- Building a multi-language app (English/Arabic) with dynamic RTL support.
- State Management for language switching using `useState`.

#### ✅ [Day 2: Your First Component](./day2)

- Understanding the anatomy of a React Component.
- Solved 4 official documentation challenges:
  - **Challenge 1:** Fix a missing `default export`.
  - **Challenge 2:** Correct a broken `return statement`.
  - **Challenge 3:** Enforce `PascalCase` component naming.
  - **Challenge 4:** Build a component from scratch.
- Distinguishing regular functions from React components.

#### ✅ [Day 3: Importing & Exporting Components](./day3)

- Splitting components into separate files for better maintainability.
- Applied `default export` to `Profile` and `Gallery` components.
- Nested components: rendered `Profile` inside `Gallery`.
- Solved the official challenge: moved `Profile` out of `Gallery.jsx` into its own standalone `Profile.jsx`.

#### ✅ [Day 4: Writing Markup with JSX](./day4)

- Deep dive into JSX — why it's the preferred way to write React UI.
- Learning strict JSX rules (single root element, closing tags, camelCase attributes).
- Challenge: Converting legacy HTML snippets into valid React JSX syntax.

---

## 🗺️ Learning Roadmap & Progress | خريطة التعلم والتقدم

### 🟢 Beginner Level (The Foundation)

**Progress: 44%** `████░░░░░░`

#### 1. Describing the UI

- [x] Your First Component
- [x] Importing and Exporting Components
- [x] Writing Markup with JSX
- [x] JavaScript in JSX with Curly Braces
- [ ] Passing Props to a Component
- [x] Conditional Rendering
- [ ] Rendering Lists
- [ ] Keeping Components Pure
- [ ] Your UI as a Tree

#### 2. Adding Interactivity

- [ ] Responding to Events
- [ ] State: A Component's Memory
- [ ] Render and Commit
- [ ] State as a Snapshot
- [ ] Queueing a Series of State Updates
- [ ] Updating Objects in State
- [ ] Updating Arrays in State

### 🟡 Intermediate Level (Managing State)

**Progress: 0%** `░░░░░░░░░░`

#### 3. Managing State

- [ ] Reacting to Input with State
- [ ] Choosing the State Structure
- [ ] Sharing State Between Components
- [ ] Preserving and Resetting State
- [ ] Extracting State Logic into a Reducer
- [ ] Passing Data Deeply with Context
- [ ] Scaling Up with Reducer and Context

### 🔴 Advanced Level (Escape Hatches)

**Progress: 0%** `░░░░░░░░░░`

#### 4. Escape Hatches

- [ ] Referencing Values with Refs
- [ ] Manipulating the DOM with Refs
- [ ] Synchronizing with Effects
- [ ] You Might Not Need an Effect
- [ ] Lifecycle of Reactive Effects
- [ ] Separating Events from Effects
- [ ] Removing Effect Dependencies
- [ ] Reusing Logic with Custom Hooks

---

## 🚀 How to Run | كيفية التشغيل

للتشغيل، انتقل إلى مجلد اليوم المحدد ثم اتبع التعليمات:
To run, navigate to the specific day's folder and follow the instructions:

1. **Clone the repository | استنساخ المستودع**

   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the day's folder | الانتقال لمجلد اليوم**

   ```bash
   cd day1  # or day2, day3...
   ```

3. **Install dependencies | تثبيت المكتبات**

   ```bash
   npm install
   ```

4. **Run the development server | تشغيل السيرفر**
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
