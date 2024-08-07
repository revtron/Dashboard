import './App.css'
import styles from './assets/Components/Container.module.css';
import Box1 from './assets/Components/Box1';
import Box2 from './assets/Components/Box2';
import Box3 from "./assets/Components/Box3";
import Box4 from "./assets/Components/Box4";
import Containerxstyles from "./assets/Components/Containerx.module.css";
import Rectangle from "./assets/Components/Rectangle"
import Rect2 from "./assets/Components/Rect2";
import Rect3 from "./assets/Components/Rect3";
import Rect4 from './assets/Components/Rect4';
import Rect5 from './assets/Components/Rect5';
import Containerystyles from "./assets/Components/Containery.module.css";
import Containerzstyles from "./assets/Components/Containerz.module.css";










function App() {
 

  return (
    <>
      <div>
        <div className={styles.Container}>
          <div className={Containerxstyles.Containerx}>

            <Box1></Box1>
            <Box2></Box2>
            <Box3></Box3>
            <Box4></Box4>
            <Rectangle></Rectangle>
            <div>
             

            </div>

          </div>
          <div className ={Containerystyles.Containery}>
            <Rect2></Rect2>
            <Rect3></Rect3>

            
            
          </div>
          <div className ={Containerzstyles.Containerz}>
           <Rect4></Rect4>
           <Rect5></Rect5>

          </div>



        </div>
        
      </div>
    </>
  );
}


export default App
