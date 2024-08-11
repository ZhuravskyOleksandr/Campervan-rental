import css from './HourglassLoader.module.css';
import { Hourglass } from 'react-loader-spinner';

export default function HourglassLoader() {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{ marginBottom: '30px' }}
        colors={['#e44848', '#101828']}
      />
      <p className={css.loaderText}>Just a little more to go</p>
    </div>
  );
}
