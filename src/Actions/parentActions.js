export const simpleAction = (stages, stageId, typeId, customizeId) => (
  dispatch
) => {
  var stateCopy = Object.assign([], stages);
  stateCopy = stateCopy.map((x) => {
    const o = {
      ...x,
    };
    if (x.Id === stageId) {
      switch (stageId) {
        case 1:
          o["ActiveFlavourId"] = customizeId;
          break;
        case 2:
          o["ActiveFillingId"] = customizeId;
          break;
        case 3:
          o["ActiveIcing"].Type = typeId;
          o["ActiveIcing"].Color = customizeId;
          break;
        case 4:
          o["ActiveDecoration"].Type = typeId;
          o["ActiveDecoration"].Color = customizeId;
          break;

        default:
          break;
      }
    }
    return o;
  });

  //debugger

  dispatch({
    type: "CUSTOMIZE_CAKE",
    payload: stateCopy,
  });
};
