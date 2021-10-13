import L from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './loader.module.css';

function Loader() {
  return (
    
      <L
      type="ThreeDots"
      color="#303f9f"
      height={30}
      width={60}
      timeout={3000}
      style={{ margin: "0 auto" }}
      />
  
  );
}

export default Loader;
