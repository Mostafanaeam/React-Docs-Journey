/*
Challenge 3 of 3: Refactor a series of ? : to if and variables 
This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee".
The problem is that the information about each drink is spread across multiple conditions. 
Refactor this code to use a single if statement instead of three ? : conditions.
*/
//! try 1
// const drinks = {
//     tea: {
//         partOfPlant: 'leaf',
//         caffeineContent: '15–70 mg/cup',
//         age: '4,000+ years'
//     },
//     coffee: {
//         partOfPlant: 'bean',
//         caffeineContent: '80–185 mg/cup',
//         age: '1,000+ years'
//     }
// }
// function Drink({ name }) {
//   return (
//     <section>
//       <h1>{name}</h1>
//       {/* <dl>
//         <dt>Part of plant</dt>
//         <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
//         <dt>Age</dt>
//         <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
//       </dl> */}
//       <dl>
//         {drinks[name] && (
//           <>
//             <dt>Part of plant</dt>
//             <dd>{drinks[name].partOfPlant}</dd>
//             <dt>Caffeine content</dt>
//             <dd>{drinks[name].caffeineContent}</dd>
//             <dt>Age</dt>
//             <dd>{drinks[name].age}</dd>
//           </>
//         )}
//       </dl>
//     </section>
//   );
// }

//! try 2
function Drink({ name }) {
    let partOfPlant, caffeineContent, age;
    if (name === 'tea') {
      partOfPlant = 'leaf';
      caffeineContent = '15–70 mg/cup';
      age = '4,000+ years';
    } else if (name === 'coffee') {
      partOfPlant = 'bean';
      caffeineContent = '80–185 mg/cup';
      age = '1,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{partOfPlant}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeineContent}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
}
export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
