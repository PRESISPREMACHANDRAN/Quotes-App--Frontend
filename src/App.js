import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuotes from "./Components/AddQuotes";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import SearchQuotes from "./Components/SearchQuotes";
import ViewAllQuotes from "./Components/ViewAllQuotes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" exact element={<Header/>} />
        <Route path="/" exact element={<AddQuotes />} />
        <Route path="/search" exact element={<SearchQuotes/>} />
        <Route path="/viewAll" exact element={<ViewAllQuotes/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
