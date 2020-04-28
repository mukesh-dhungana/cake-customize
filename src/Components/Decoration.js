import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../Actions/parentActions";
import classnames from "classnames";

function Decoration(props) {
  const parentReducer = useSelector((state) => state.parentReducer);
  const dispatch = useDispatch();
  const [toppingActive, setToppingActive] = useState(true);
  const types = [
    {
      Id: 1,
      Text: "Sprinkles",
      Colors: [
        {
          Id: 1,
          Text: "Red",
        },
        {
          Id: 2,
          Text: "Orange",
        },
        {
          Id: 3,
          Text: "Black",
        },
      ],
    },
    {
      Id: 2,
      Text: "Nonpariels",
      Colors: [
        {
          Id: 4,
          Text: "Multicolor",
        },
      ],
    },
  ];
  const handlesetToppingChange = (toppingActive) => {
    setToppingActive(toppingActive);
    dispatch(
      simpleAction(
        parentReducer.stages,
        4,
        toppingActive ? 1 : 0,
        toppingActive ? 1 : 0
      )
    );
  };
  const currentDecoration = parentReducer.stages.find((x) => x.Id === 4)
    .ActiveDecoration;
  const selectedTypeId = currentDecoration.Type;
  const selectedType = types.find((x) => x.Id === selectedTypeId);
  const selectedTypeText = selectedType && selectedType.Text;
  const selectedColorText =
    selectedType &&
    selectedType.Colors.find((x) => x.Id === currentDecoration.Color).Text;
  const currentColors =
    selectedType && types.find((x) => x.Id === selectedTypeId).Colors;
  //debugger
  return (
    <div className="decoration">
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            active: currentDecoration.Type === 0,
          })}
          onClick={() => handlesetToppingChange(false)}
        ></div>
        <span>No selection</span>
      </div>
      <div className="body-row">
        <div
          className={classnames({
            radio: true,
            active: currentDecoration.Type === 1,
          })}
          onClick={() => handlesetToppingChange(true)}
        ></div>
        <div className="type-color">
          <span>Toppings</span>
          {toppingActive ? (
            <>
              <span>Type: {selectedTypeText}</span>
              <div className="types">
                {types.map((x) => {
                  return (
                    <img
                      alt=""
                      className="type"
                      key={x.Id}
                      src={
                        x.Id === 1
                          ? "https://i5.walmartimages.com/dfw/4ff9c6c9-4de5/k2-_0596143f-d00b-4567-a78c-634003aeec10.v1.png"
                          : "https://i5.walmartimages.com/dfw/4ff9c6c9-5f47/k2-_89bbaddd-b29b-4351-8305-773cd10ed88d.v1.png"
                      }
                      onClick={() =>
                        dispatch(
                          simpleAction(
                            parentReducer.stages,
                            4,
                            x.Id,
                            x.Colors[0].Id
                          )
                        )
                      }
                      className={classnames({
                        type: true,
                        active: currentDecoration.Type === x.Id,
                      })}
                    />
                  );
                })}
              </div>
              <span>Color: {selectedColorText}</span>
              <div className="colors">
                {currentColors.map((x) => {
                  return (
                    <span
                      className="color"
                      key={x.Id}
                      style={{ background: x.Text }}
                      onClick={() =>
                        dispatch(
                          simpleAction(
                            parentReducer.stages,
                            4,
                            selectedTypeId,
                            x.Id
                          )
                        )
                      }
                      className={classnames({
                        color: true,
                        active: currentDecoration.Color === x.Id,
                      })}
                    ></span>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Decoration;
