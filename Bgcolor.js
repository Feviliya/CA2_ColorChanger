import React ,{ useState } from 'react'
import Select from 'react-select'
import './bgcolor.css';
 function Bgcolor() {
    var colors=[
    {
       value:1,
       label:"red"
    },
    {
        value:5,
        label:"lavender"
    },
    {
        value:6,
        label:"teal"
    },
    {
        value:7,
        label:"rebeccapurple"
    },
    {
        value:2,
        label:"blue"
    },
    {
        value:3,
        label:"orange"
    },
    {
        value:4,
        label:"green"
    },
    ];
    const [setbgcolor,ddlvalue]=useState(colors.label);
    const ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
  return (
    <>
    <div>
            <Select className='selectcolor' options={colors} onChange={ddlhandle}>  </Select>
    </div>
    <div className='box'>
        <style>{'.box{background-color:'+ setbgcolor +';'}</style>
    </div>
    </>
        
  )
}

export default Bgcolor;