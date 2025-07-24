import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceForm from "./Components/InvoiceForm";
import PreviewInvoice from "./Components/InvoicePreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoiceForm />} />
        <Route path="/preview" element={<PreviewInvoice />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
