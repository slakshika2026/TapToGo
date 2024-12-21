// import { createContext, useState, useContext } from 'react';

// const ClickCountContext = createContext<any>(null);

// export const ClickCountProvider = ({ children }: any) => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => setCount(count + 1);

//   return (
//     <ClickCountContext.Provider value={{ count, incrementCount }}>
//       {children}
//     </ClickCountContext.Provider>
//   );
// };

// export const useClickCount = () => useContext(ClickCountContext);
