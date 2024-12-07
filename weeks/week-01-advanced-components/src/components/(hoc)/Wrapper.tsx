function WithAuth(Component) {
   const isLoggedIn = false;

   if (isLoggedIn) {
      return (props): JSX.Element => {
         return <Component {...props} />;
      };
   }

   return (props): JSX.Element => {
      return (
         <div>
            <h1>You are yet to login</h1>
         </div>
      );
   };
}

function LoggedIn() {
   return (
      <div>
         <h1>John Ossai</h1>
         <button>Logout</button>
      </div>
   );
}

export const ProtectedRoute = WithAuth(LoggedIn);
export default WithAuth;
