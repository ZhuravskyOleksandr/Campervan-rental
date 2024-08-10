import css from './FeatureItem.module.css';
import { icons } from '../../assets/icons/index.js';

export default function FeatureItem({ icon, text }) {
  return (
    <div className={css.featureWrapper}>
      <svg className={css.icon} width="20" height="20">
        <use xlinkHref={`${icons}#${icon}`}></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
  );
}
