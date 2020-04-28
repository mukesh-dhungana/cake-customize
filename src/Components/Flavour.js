import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classnames from "classnames";
import { simpleAction } from "../Actions/parentActions";
function Flavour(props) {
  const parentReducer = useSelector((state) => state.parentReducer);
  const currentStage = parentReducer.stages.find((x) => x.Id === 1);
  const dispatch = useDispatch();
  return (
    <div className="flavour">
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            active: currentStage.ActiveFlavourId === 1,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 1,0, 1))}
        ></div>
        <span>White</span>
      </div>
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            chocolate: true,
            active: currentStage.ActiveFlavourId === 2,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 1,0, 2))}
        ></div>
        <span>Chocolate</span>
      </div>
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            assorted: true,
            active: currentStage.ActiveFlavourId === 3,
          })}
          onClick={() => dispatch(simpleAction(parentReducer.stages, 1,0, 3))}
        ></div>
        <span>Assorted</span>
      </div>
    </div>
  );
}


export default Flavour;
