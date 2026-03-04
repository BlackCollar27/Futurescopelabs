import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { BookCall } from "./pages/BookCall";
import { TermsOfService } from "./pages/TermsOfService";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ProjectDetail } from "./pages/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: About },
      { path: "portfolio/:projectId", Component: ProjectDetail },
      { path: "services", Component: Services },
      { path: "book-call", Component: BookCall },
      { path: "terms", Component: TermsOfService },
      { path: "privacy", Component: PrivacyPolicy },
    ],
  },
]);