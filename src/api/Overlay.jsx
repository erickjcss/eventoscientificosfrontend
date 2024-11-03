import React from 'react'

const Overlay = (isVisible) => {
    if (!isVisible) return null;
   
    return (
       <div
         style={{
           position: 'fixed',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           backgroundColor: 'rgba(0, 0, 0, 0.5)', // Puedes ajustar la opacidad y el color según prefieras
           zIndex: 1000, // Asegúrate de que el zIndex sea mayor que el del toast
         }}
       />
    );
   }

export default Overlay

