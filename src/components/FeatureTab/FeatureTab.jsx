import css from './FeatureTab.module.css';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import formatString from '../../utils/formatString.js';

export default function FeatureTab({ camper }) {
  return (
    <div className={css.details}>
      <FeaturesList camper={camper} moreDetailed={true} />
      <h2 className={css.detailsTitle}>Vehicle details</h2>
      <ul className={css.detailsList}>
        <li className={css.detailsListItem}>
          <span>Form</span>
          <span>{formatString(camper.form)}</span>
        </li>
        <li className={css.detailsListItem}>
          <span>Length</span>
          <span>{`${parseFloat(camper.length)} m`}</span>
        </li>
        <li className={css.detailsListItem}>
          <span>Width</span>
          <span>{`${parseFloat(camper.width)} m`}</span>
        </li>
        <li className={css.detailsListItem}>
          <span>Height</span>
          <span>{`${parseFloat(camper.height)} m`}</span>
        </li>
        <li className={css.detailsListItem}>
          <span>Tank</span>
          <span>{`${parseFloat(camper.tank)} l`}</span>
        </li>
        <li className={css.detailsListItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
