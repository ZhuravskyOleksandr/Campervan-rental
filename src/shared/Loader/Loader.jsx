import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#e44848"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
