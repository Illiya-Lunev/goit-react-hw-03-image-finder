import L from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './loader.module.css';

function Loader() {
  return (
    <div className={s.loader_container}>
      <L
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default Loader;
