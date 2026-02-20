/*
Challenge 1 of 3: Extract a component 
This Gallery component contains some very similar markup for two profiles. 
Extract a Profile component out of it to reduce the duplication. 
You’ll need to choose what props to pass to it.

*/
import Avatar from './Avatar';

export default function Gallery() {
  const people = [
    {
      id: 0,
      name: 'Maria Skłodowska-Curie',
      imageId: 'szV5sdG',
      profession: 'physicist and chemist',
      numberOfAwards: 4,
      awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
      discovered: 'polonium (chemical element)',
      size: 100,
    },
    {
      id: 1,
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      profession: 'geochemist',
      numberOfAwards: 2,
      awards: '(Miyake Prize for geochemistry, Tanaka Prize)',
      discovered: 'a method for measuring carbon dioxide in seawater',
      size: 100,
    },
  ];
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Avatar person={people[0]} size={people[0].size} />
      </section>
      <section className="profile">
        <Avatar person={people[1]} size={people[1].size} />
      </section>
    </div>
  );
}
