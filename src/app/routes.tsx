import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Programs } from "./components/pages/Programs";
import { ProgramDetail } from "./components/pages/ProgramDetail";
import { Admissions } from "./components/pages/Admissions";
import { Events } from "./components/pages/Events";
import { Gallery } from "./components/pages/Gallery";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { ParentPortal } from "./components/pages/ParentPortal";
import { Payment } from "./components/pages/Payment";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/:programId", Component: ProgramDetail },
      { path: "admissions", Component: Admissions },
      { path: "events", Component: Events },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "parent-portal", Component: ParentPortal },
      { path: "payment", Component: Payment },
      { path: "*", Component: NotFound },
    ],
  },
]);
