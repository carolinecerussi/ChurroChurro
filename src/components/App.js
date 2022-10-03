import React from "react";
import TicketControl from "./TicketControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TicketList from "./TicketList";
function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/tickets" element={<TicketList />} />
      </Routes>
      <Footer />
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