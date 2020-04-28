import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { simpleAction } from "../Actions/parentActions";

function Filling(props) {
  const parentReducer = useSelector((state) => state.parentReducer);
  const currentStage = parentReducer.stages.find((x) => x.Id === 2);
  const dispatch = useDispatch();
  return (
    <div className="filling">
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            active: currentStage.ActiveFillingId === 0,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 2, 0, 0))}
        ></div>
        <span>No selection</span>
      </div>
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            strawberry: true,
            active: currentStage.ActiveFillingId === 1,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 2, 0, 1))}
        ></div>
        <span>Strawberry</span>
      </div>
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            creme: true,
            active: currentStage.ActiveFillingId === 2,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 2, 0, 2))}
        ></div>
        <span>Bavarian creme</span>
      </div>
    </div>
  );
}

export default Filling;
