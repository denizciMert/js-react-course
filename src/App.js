import styles from "./App.module.css";
import { DisplayUseStateDemo } from "./scripts/StatesDemo";
import { DisplayShowHide } from "./scripts/ShowHide";
import { DisplayAgeDiff2 } from "./scripts/AgeDiff2";
import { DisplayAgeDiff } from "./scripts/AgeDiff1";
import { DisplayIncrement } from "./scripts/Increment";
import { DisplayJobs } from "./scripts/Jobs";
import { DisplayListElementsFromList } from "./scripts/ListElements";
import { DisplayListElementsFromList2 } from "./scripts/ListElements2";
import { DisplayUserLister } from "./scripts/ListUser";
import { DisplayUserLister2 } from "./scripts/ListUser2";
import { DisplayMakeGreen } from "./scripts/MakeGreen";
import { DisplayListPlanets } from "./scripts/PlanetsDemo";
import { DisplayTextExpression } from "./scripts/TextExpression";

function App() {
  return (
    <div className={styles.App}>
      <DisplayShowHide/><br /><br />
      <DisplayUseStateDemo/><br /><br />
      <DisplayTextExpression/><br /><br />
      <DisplayIncrement/><br /><br />
      <DisplayListPlanets/><br /><br />
      <DisplayUserLister/><br /><br />
      <DisplayUserLister2/><br /><br />
      <DisplayListElementsFromList2/><br /><br />
      <DisplayListElementsFromList/><br /><br />
      <DisplayMakeGreen/><br /><br />
      <DisplayAgeDiff2/><br /><br />
      <DisplayAgeDiff/><br /><br />
      <DisplayJobs/><br /><br />
    </div>
  );
}

export default App;