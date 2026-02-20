import getImageUrl from './utils';

export default function Avatar({ person, size }) {
  return (
    <>
    <h2>{person.name}</h2>
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
    <ul>
          <li>
            <b>Profession: </b> 
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.numberOfAwards} </b> 
            {person.awards}
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
    </>
  );
}