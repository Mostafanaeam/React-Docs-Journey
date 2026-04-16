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

### 📍 وصف الواجهة (Describing the UI)

#### ✅ [اليوم 1: البداية والأساسيات](./Describing%20the%20UI/day1)

- إعداد بيئة العمل باستخدام **Vite**.
- بناء تطبيق متعدد اللغات (عربي/إنجليزي).
- دعم الاتجاه من اليمين لليسار (RTL).
- إدارة الحالة (State Management) للتبديل بين اللغات.

#### ✅ [اليوم 2: المكونات الأولى (Your First Component)](./Describing%20the%20UI/day2)

- فهم بنية المكوّن (Component) في React وكيفية إنشائه.
- حل 4 تحديات رسمية من التوثيق:
  - **التحدي 1:** إصلاح `default export` الناقص.
  - **التحدي 2:** إصلاح `return statement` خاطئة.
  - **التحدي 3:** تطبيق قاعدة تسمية المكوّنات بـ `PascalCase`.
  - **التحدي 4:** كتابة مكوّن كامل من الصفر.
- التمييز بين الدوال العادية ومكوّنات React.

#### ✅ [اليوم 3: استيراد وتصدير المكونات](./Describing%20the%20UI/day3)

- تقسيم المكوّنات إلى ملفات منفصلة لتحسين قابلية الصيانة.
- تطبيق `default export` على مكوّنَي `Profile` و `Gallery`.
- استيراد المكوّنات وتداخلها (نستخدم `Profile` داخل `Gallery`).
- حل التحدي الرسمي: نقل `Profile` من `Gallery.jsx` إلى ملفه المستقل `Profile.jsx`.

#### ✅ [اليوم 4: كتابة Markup بـ JSX](./Describing%20the%20UI/day4)

- التعرف على JSX كامتداد لـ JavaScript يتيح كتابة HTML داخل الكود.
- فهم لماذا يُفضل معظم مطوري React استخدام JSX.
- تطبيق البنية الصحيحة لـ JSX وقواعدها الأساسية.

#### ✅ [اليوم 5: استخدام JavaScript في JSX](./Describing%20the%20UI/day5)

- فهم كيفية استخدام الأقواس المتعرجة `{}` لفتح نافذة إلى JavaScript داخل JSX.
- تمرير السلاسل النصية والمتغيرات ديناميكياً إلى خصائص العناصر.
- استخدام "الأقواس المتعرجة المزدوجة" لتمرير الكائنات (Objects) مثل التنسيقات (Inline Styles).
- حل 3 تحديات رسمية: إصلاح أخطاء الصيغة، استخراج البيانات في كائنات، واستخدام التعبيرات الديناميكية.

#### ✅ [اليوم 6: تمرير الـ Props إلى المكونات](./Describing%20the%20UI/day6)

- فهم كيفية تمرير البيانات من المكونات الأب إلى الأبناء عبر الـ Props.
- استخدام خاصية `children` لتمرير محتوى JSX كـ Wrapper Components.
- تخصيص المكونات ديناميكياً بناءً على القيم الممرة (نصوص، أرقام، كائنات).
- حل التحديات الرسمية المتعلقة باستخراج المكونات وتحسين بنية الكود.

#### ✅ [اليوم 7: التصيير الشرطي (Conditional Rendering)](./Describing%20the%20UI/day7)

- فهم كيفية استخدام جمل `if` الشرطية لإرجاع `null` أو JSX مختلف.
- تطبيق المعامل الشرطي (Ternary Operator `? :`) للمنطق المضمن.
- استخدام معامل `&&` المنطقي لعرض العناصر بناءً على شرط.
- تنظيم الكود من خلال تخزين منطق التصيير الشرطي في متغيرات.

#### ✅ [اليوم 8: تصيير القوائم (Rendering Lists)](./Describing%20the%20UI/day8)

- فهم كيفية التعامل مع مصفوفات البيانات وتحويلها إلى مكونات واجهة مستخدم.
- استخدام دالتي `map()` و `filter()` لتوليد وتصفية القوائم ديناميكياً.
- استيعاب أهمية الـ `key` الفريد لكل عنصر لضمان كفاءة تحديثات ريأكت.
- حل التحديات البرمجية المتعلقة بفرز البيانات وتنظيم القوائم المتداخلة.

#### ✅ [اليوم 9: المكونات النقية (Pure Components)](./Describing%20the%20UI/day9)

- فهم مفهوم "النقاء" في ريأكت: نفس المدخلات تعطي دائماً نفس المخرجات.
- تجنب الآثار الجانبية (Side Effects) والتحويلات (Mutations) أثناء عملية الرندر.
- حل تحديات الساعة المتعطلة، ملف التعريف، وStory Tray لتعميق فهم استقرار البيانات.

#### ✅ [اليوم 10: واجهة المستخدم كشجرة (UI as a Tree)](./Describing%20the%20UI/day10)

- استيعاب نموذج "الشجرة" لفهم العلاقات بين المكونات (Render Tree).
- فهم شجرة تبعية الوحدات (Module Dependency Tree) وكيفية عمل أدوات البناء.
- بناء مثال تفاعلي يوضح ديناميكية علاقة الأب والابن.

#### 🏆 [المشروع الختامي: VoyageVibe - لوحة تحكم سياحية](./Describing%20the%20UI/VoyageVibe)

- بناء تطبيق متكامل يجمع كل مفاهيم قسم **"Describing the UI"**.
- هيكلة المكونات بشكل احترافي مع التركيز على تدفق البيانات عبر الـ Props.
- تطبيق التصميم الحديث (Glassmorphism) واستخدام المكتبات الخارجية (Lucide, Framer Motion).
- الالتزام بنقاء المكونات وعدم استخدام الـ State لتعميق فهم الأساسيات.

### 📍 إضافة التفاعل (Adding Interactivity)

#### ✅ [اليوم 1: الاستجابة للأحداث (Responding to Events)](./Adding%20Interactivity/day1)

- فهم كيفية معالجة تفاعلات المستخدم في ريأكت.
- تعلم قواعد إضافة معالجات الأحداث (Event Handlers).
- التمييز بين تمرير وظيفة معالجة الحدث ومناداتها.
- استكشاف مفاهيم "انتشار الحدث" (Propagation) و "السلوك الافتراضي" (Prevent Default).

#### ✅ [اليوم 2: ذاكرة المكون (State: A Component's Memory)](./Adding%20Interactivity/day2)

- فهم مفهوم State كذاكرة للمكون تحتفظ بالبيانات بين التصييرات.
- التعرف على `useState` Hook وهيكلته: `const [state, setState] = useState(initialValue)`.
- فهم الفرق بين المتغيرات العادية و State.
- حل 4 تحديات رسمية:
  - **التحدي 1:** إصلاح أعطال المعرض (إيقاف عند الصورة الأخيرة + إضافة Previous).
  - **التحدي 2:** إصلاح حقول الإدخال المجمدة (استخدام State بدلاً من المتغيرات).
  - **التحدي 3:** إصلاح انهيار React (خطأ في ترتيب Hooks).
  - **التحدي 4:** إزالة State غير الضروري.

---

## 🇬🇧 English Section

### 🎯 Project Goal

This repository documents my journey to master **React**, relying entirely on the official documentation. The project contains daily folders, each representing a day of learning and applying specific concepts.

### 📍 Describing the UI

#### ✅ [Day 1: Genesis & Basics](./Describing%20the%20UI/day1)

- Setting up the environment using **Vite**.
- Building a multi-language app (English/Arabic) with dynamic RTL support.
- State Management for language switching using `useState`.

#### ✅ [Day 2: Your First Component](./Describing%20the%20UI/day2)

- Understanding the anatomy of a React Component.
- Solved 4 official documentation challenges:
  - **Challenge 1:** Fix a missing `default export`.
  - **Challenge 2:** Correct a broken `return statement`.
  - **Challenge 3:** Enforce `PascalCase` component naming.
  - **Challenge 4:** Build a component from scratch.
- Distinguishing regular functions from React components.

#### ✅ [Day 3: Importing & Exporting Components](./Describing%20the%20UI/day3)

- Splitting components into separate files for better maintainability.
- Applied `default export` to `Profile` and `Gallery` components.
- Nested components: rendered `Profile` inside `Gallery`.
- Solved the official challenge: moved `Profile` out of `Gallery.jsx` into its own standalone `Profile.jsx`.

#### ✅ [Day 4: Writing Markup with JSX](./Describing%20the%20UI/day4)

- Deep dive into JSX — why it's the preferred way to write React UI.
- Learning strict JSX rules (single root element, closing tags, camelCase attributes).
- Challenge: Converting legacy HTML snippets into valid React JSX syntax.

#### ✅ [Day 5: JavaScript in JSX with Curly Braces](./Describing%20the%20UI/day5)

- Mastering the use of curly braces `{}` to embed JavaScript expressions in JSX.
- Dynamically passing strings and variables to element attributes.
- Using "Double Curlies" to pass JavaScript objects (common for inline styles).
- Solved 3 official challenges: fixing syntax errors, data extraction into objects, and applying dynamic expressions.

#### ✅ [Day 6: Passing Props to a Component](./Describing%20the%20UI/day6)

- Learned the fundamental pattern of sending data from parent to child components.
- Mastered the `children` prop for creating flexible wrapper components.
- Dynamically adjusted component logic and UI based on prop values.
- Refactored code by extracting reusable child components.

#### ✅ [Day 7: Conditional Rendering](./Describing%20the%20UI/day7)

- Learned how to use `if` statements to return different JSX or `null`.
- Implemented the ternary operator (`? :`) for concise inline logic.
- Used the logical AND operator (`&&`) for short-circuit rendering.
- Practiced clean code by assigning conditional JSX to variables.

#### ✅ [Day 8: Rendering Lists](./Describing%20the%20UI/day8)

- Learned to transform data arrays into dynamic UI component collections.
- Mastered `map()` and `filter()` array methods for list generation and data subsetting.
- Understood the critical role of unique `keys` in React's reconciliation process.
- Solved challenges focused on data sorting and nested list structures.

#### ✅ [Day 9: Keeping Components Pure](./Describing%20the%20UI/day9)

- Mastered the concept of "Purity": components as predictable formulas.
- Learned to avoid mutations and side effects during the rendering phase.
- Debugged and fixed complex state leakage and array mutation issues.

#### ✅ [Day 10: Your UI as a Tree](./Describing%20the%20UI/day10)

- Visualized application structure through Render and Module Dependency Trees.
- Explored parent-child relationships and their impact on performance and bundling.
- Implemented interactive demos to showcase tree dynamics.

#### 🏆 [Final Project: VoyageVibe - Travel Dashboard](./Describing%20the%20UI/VoyageVibe)

- Built a comprehensive application consolidating all concepts from **"Describing the UI"**.
- Professional component architecture prioritizing clean prop-drilling data flow.
- Implemented modern UI (Glassmorphism) and integrated (Lucide, Framer Motion).
- Maintained component purity and avoided state to master rendering fundamentals.

### 📍 Adding Interactivity

#### ✅ [Day 1: Responding to Events](./Adding%20Interactivity/day1)

- Learning how to handle user interactions in React.
- Mastering the rules for adding Event Handlers.
- Distinguishing between passing a function and calling it.
- Exploring Event Propagation and Preventing Default behavior.

#### ✅ [Day 2: State: A Component's Memory](./Adding%20Interactivity/day2)

- Understanding State as component memory that persists data across renders.
- Learning `useState` Hook anatomy: `const [state, setState] = useState(initialValue)`.
- Understanding the difference between regular variables and State.
- Solved 4 official challenges:
  - **Challenge 1:** Fix gallery crashes (prevent crash on last image + add Previous).
  - **Challenge 2:** Fix stuck form inputs (use State instead of variables).
  - **Challenge 3:** Fix React crash (Hooks ordering error).
  - **Challenge 4:** Remove unnecessary state variable.

---

## 🗺️ Learning Roadmap & Progress | خريطة التعلم والتقدم

### 🟢 Beginner Level (The Foundation)

**Progress: 71%** `████████░░`

#### 1. Describing the UI

- [x] Your First Component
- [x] Importing and Exporting Components
- [x] Writing Markup with JSX
- [x] JavaScript in JSX with Curly Braces
- [x] Passing Props to a Component
- [x] Conditional Rendering
- [x] Rendering Lists
- [x] Keeping Components Pure
- [x] Your UI as a Tree
- [x] **🏆 Final Project: VoyageVibe Dashboard**

#### 2. Adding Interactivity

**Progress: 28%** `███░░░░░░░`

- [x] Responding to Events
- [x] State: A Component's Memory
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
