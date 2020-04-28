const initialState = {
  stages: [
    { Id: 1, Text: "Flavour", ActiveFlavourId: 1 },
    { Id: 2, Text: "Filling", ActiveFillingId: 1 },
    {
      Id: 3,
      Text: "Icing",
      ActiveIcing: {
        Type: 1,
        Color: 1,
      },
    },
    {
      Id: 4,
      Text: "Decoration",
      ActiveDecoration: {
        Type: 1,
        Color: 1,
      },
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMIZE_CAKE":
      return {
        ...state,
        stages: action.payload,
      };
    default:
      return state;
  }
};
