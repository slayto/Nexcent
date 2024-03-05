import { Navbar } from "./Components/Navbar";
import { Carousel } from "./Components/Carousel";
import { Clients } from "./Components/Clients";
import { PixelGrade } from "./Components/PixelGrade";
import { Locals } from "./Components/Locals";
import { Design } from "./Components/Design";
import { Owner } from "./Components/Owner";
import { Community } from "./Components/Community";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />    
      <Carousel />
      <Clients />
      <PixelGrade />
      <Locals />
      <Design />
      <Owner />
      <Community />
      <Footer />
    </div>
  );
};

export default App