import css from './FeaturesList.module.css';
import FeatureItem from '../FeatureItem/FeatureItem.jsx';

export default function FeaturesList({ camper, moreDetailed }) {
  return (
    <ul className={css.featuresList}>
      <li>
        <FeatureItem icon="icon-users" text={`${camper.adults} adults`} />
      </li>
      <li>
        <FeatureItem icon="icon-gearbox" text={camper.transmission} />
      </li>
      <li>
        <FeatureItem icon="icon-fuel" text={camper.engine} />
      </li>
      {camper.details.kitchen > 0 && (
        <li>
          <FeatureItem icon="icon-kitchen" text="kitchen" />
        </li>
      )}
      {camper.details.beds > 0 && (
        <li>
          <FeatureItem icon="icon-bed" text={`${camper.details.beds} beds`} />
        </li>
      )}
      {camper.details.airConditioner > 0 && (
        <li>
          <FeatureItem icon="icon-ac" text="AC" />
        </li>
      )}

      {moreDetailed & (camper.details.shower > 0) ? (
        <li>
          <FeatureItem
            icon="icon-shower"
            text={`${camper.details.shower} shower`}
          />
        </li>
      ) : null}
      {moreDetailed & (camper.details.toilet > 0) ? (
        <li>
          <FeatureItem
            icon="icon-toilet-paper"
            text={`${camper.details.toilet} toilet`}
          />
        </li>
      ) : null}
      {moreDetailed & (camper.details.TV > 0) ? (
        <li>
          <FeatureItem icon="icon-tv" text={`${camper.details.TV} TV`} />
        </li>
      ) : null}
      {moreDetailed & (camper.details.freezer > 0) ? (
        <li>
          <FeatureItem
            icon="icon-freezer"
            text={`${camper.details.freezer} freezer`}
          />
        </li>
      ) : null}
      {moreDetailed & (camper.details.microwave > 0) ? (
        <li>
          <FeatureItem
            icon="icon-microwave"
            text={`${camper.details.microwave} microwave`}
          />
        </li>
      ) : null}
      {moreDetailed & (camper.details.hob > 0) ? (
        <li>
          <FeatureItem icon="icon-hob" text={`${camper.details.hob} hob`} />
        </li>
      ) : null}
      {moreDetailed & (camper.details.gas !== '') ? (
        <li>
          <FeatureItem icon="icon-gas" text={camper.details.gas} />
        </li>
      ) : null}
    </ul>
  );
}
