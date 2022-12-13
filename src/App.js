import "./App.css";
import {
  Hero,
  Header,
  Navbar,
  Billing,
  Business,
  CTA,
  CardDeal,
  Footer,
  Stats,
  Testimonials
} from "./components";
function App() {
  return <div className="App">
    <Navbar />
    <Header />
    <Stats />
    <Business />
    <Billing />
    <CardDeal />
    <Testimonials />
    <Hero />
    <CTA />
    <Footer />
  </div>;
}

export default App;
