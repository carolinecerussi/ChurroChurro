import React from "react";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Footer from "./Footer";
import TicketList from "./TicketList";

function App(){
  return ( 
    <Router>
      <Header />
      <TicketControl />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/tickets" element={<TicketControl />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
