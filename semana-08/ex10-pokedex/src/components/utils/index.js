export function handleGenerateBg1(type1, type2) {
  const types = {
    grass: "#8CD46F",
    fire: "red",
    water: "blue",
    // "grassPoison": "green, purple"
  };
  const types2 = {
    grass: "#8CD46F",
    fire: "red",
    water: "blue",
    none: types[type1]
    // "grassPoison": "green, purple"
  };
  return [types[type1], types2[type2]] || "gray";
}

// export function handleGenerateBg2(type2, type1) {
//   const types = {
//     grass: "#8CD46F",
//     poison: "purple",
//     fire: "red",
//     water: "blue",
//     // "grassPoison": "green, purple"
//   };
//   return types[type2] || types[type1];
// }

