import css from './CampersList.module.css';
import CampersItem from '../CampersItem/CampersItem.jsx';

export default function CampersList({ campers }) {
  return (
    <div>
      <ul className={css.campersList}>
        {campers.map(camper => (
          <li className={css.campersListItem} key={camper._id}>
            <CampersItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
