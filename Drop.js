import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// const options = ['Option 1', 'Option 2'];

// export default function Drop() {
//   const [value, setValue] = React.useState(options[0]);
  
//   return (
//     <div>
//       <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      
//       <br />
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         id="controllable-states-demo"
//         options={Colors}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Controllable" />}
//       />
//     </div>
//   );
// }
// function Drop() {
//     const [value,setValue]=React.useState(Colors[0]);
//     const handleChange=(e)=>{
//         setValue(e.target.value);
//     }
//     return (
//         <div>
//             <Autocomplete
//             value={value}
//             onChange={handleChange}
//             id="controllable-states-demo"
//             options={Colors}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} label="Select Color" />}/>
//         </div>
//   )
// }
// const Colors=[
//     {label: 'Blue'},
//     {label: 'Green'},
//     {label: 'Red'},
//     {label: 'Orange'},
//     {label: 'Yellow'}
    
// ]

// export default Drop


const colourOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" }
];

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // const color = chroma(data.color);
    console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#999999" : null,
      color: "#333333"
    };
  }
};
const Select= () => (
  <Select
    defaultValue={colourOptions[1]}
    label="Single select"
    options={colourOptions}
    styles={colourStyles}
  />
);
export default Select;
