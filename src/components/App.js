import React from "react";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<TicketControl />} />
      </Routes>
    </Router>
  );
}

export default App;
// import Header from "./Header";
// import TicketControl from "./TicketControl";
// import ToggleTheme from "./ToggleTheme";

// function App(){
//   return (
//     <React.Fragment>
//       <Header />
//       <ToggleTheme />
//       <TicketControl />
//     </React.Fragment>
//   );
// }

// export default App;