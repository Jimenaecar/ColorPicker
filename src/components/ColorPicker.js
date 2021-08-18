import React, { useState } from 'react';

const ColorPicker = () => {

    const [colores, setColores]= useState('#f5e5e5')
    return (  
        <div style={{backgroundColor:`${colores}`, width: '100%',height: '30rem'}} className="row justify-content-center p-5">
            <div style={{backgroundColor:'white', width: '425px', height: '200px'}} className="col-md-6 p-5 text-center">
            <h1>Color Picker</h1>
            <input type="color" onChange={(e)=> setColores(e.target.value)}/>
            <input type="text" className="text-center" value={colores}/>
            </div>
        </div>
    );
}

export default ColorPicker;