import React, { ComponentType } from "react";

// Define the type for the props
interface WithAuthProps {
   // You can define the props here if necessary, but for now we use `Record<string, unknown>` to allow any props
   [key: string]: unknown;
}

// HOC to wrap the component with authentication logic
function WithAuth<P extends WithAuthProps>(Component: ComponentType<P>) {
   const isLoggedIn = true;

   if (isLoggedIn) {
      // Return a component that renders the passed component with props
      return (props: P): JSX.Element => {
         return <Component {...props} />;
      };
   }

   // Return a component that displays a message when not logged in
   return (props: P): JSX.Element => {
      return (
         <div>
            <h1>You are yet to login</h1>
         </div>
      );
   };
}

// Define the LoggedIn component
function LoggedIn() {
   return (
      <div>
         <h1>John Ossai</h1>
         <button>Logout</button>
      </div>
   );
}

// Wrap the LoggedIn component with the WithAuth HOC
export const ProtectedRoute = WithAuth(LoggedIn);
export default WithAuth;
