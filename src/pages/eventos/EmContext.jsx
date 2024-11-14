import React, { createContext, useState } from 'react';

const EmContext = createContext();
export const EmProvider = ({ children }) => {
 const [em, setEm] = useState('');

 return (
    <EmContext.Provider value={{ em, setEm }}>
      {children}
    </EmContext.Provider>
 );
};

export default EmContext;