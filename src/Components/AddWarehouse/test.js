// console.log(validator.isEmail(email));
// if (error == false){
//   alert("Fill in all fields")
// // }
// if (formValid) {
//   console.log("nice");
// } else {
//   console.log("nah");
// }
// addWarehouse();
// alert("Success.");
// navigate("/");

// //INPUT VALIDATION - tests for the TYPE of data being sent
// const validateInput = (e) => {
//   const isValid = e.target.value.length > 0;
//   console.log(e.target.value);
//   if (!e.target.value) {
//     setFormValid(false);
//   } else {
//     setFormValid(true);
//   }
// };

//   let changedInputField = e.target.name;
//   const foundObject = warehouseDetails.forEach((detail, i) => {
//     const detailKeys = Object.keys(detail);
//     // console.log(detailKeys);
//     console.log(detailKeys[detailKeys.findIndex((key) => key)]);
//     if (
//       changedInputField ===
//       detailKeys[detailKeys.findIndex((key) => key === changedInputField)]
//     ) {
//       // console.log(warehouseDetails[i]);
//       warehouseDetails[i][`${detailKeys[0]}`] = e.target.value;
//     }
//   });
