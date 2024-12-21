import { createContext, useState } from "react";

// Extending the context to include authentication states
export const ClickCountContext = createContext({
   clickCount: 0, // Default value for clickCount
   setClickCount: (value: number) => { }, // Placeholder for the setter function
   yourName: "", // Default value for yourName
   setYourName: (value: string) => { }, // Placeholder for the setter function
   isAuthenticated: false, // Default value for authentication status
   setIsAuthenticated: (value: boolean) => { }, // Placeholder for setter function
   userEmail: "", // Default value for the user's email
   setUserEmail: (value: string) => { }, // Placeholder for setter function
   userPassword: "", // Default value for the user's password
   setUserPassword: (value: string) => { }, // Placeholder for setter function
});

const ClickCountProvider = ({ children }: { children: any }) => {
   const [clickCount, setClickCount] = useState(0); // Global state for click count
   const [yourName, setYourName] = useState(""); // Global state for your name

   // Authentication state management
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");

   return (
      <ClickCountContext.Provider
         value={{
            clickCount,
            setClickCount,
            yourName,
            setYourName,
            isAuthenticated,
            setIsAuthenticated,
            userEmail,
            setUserEmail,
            userPassword,
            setUserPassword,
         }}
      >
         {children}
      </ClickCountContext.Provider>
   );
};

export default ClickCountProvider;
