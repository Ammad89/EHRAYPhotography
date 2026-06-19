import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import FamilyPhotography from "./pages/FamilyPhotography";
import PetPhotography from "./pages/PetPhotography";
import PersonalBranding from "./pages/PersonalBranding";
import EventPhotography from "./pages/EventPhotography";
import WeddingPhotography from "./pages/WeddingPhotography";
import Portfolio from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "family-photography", Component: FamilyPhotography },
      { path: "pet-photography", Component: PetPhotography },
      { path: "personal-branding", Component: PersonalBranding },
      { path: "event-photography", Component: EventPhotography },
      { path: "wedding-photography", Component: WeddingPhotography },
    ],
  },
]);
