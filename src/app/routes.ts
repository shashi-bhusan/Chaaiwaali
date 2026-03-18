import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { StoryPage } from "./components/StoryPage";
import { CorporatePage } from "./components/CorporatePage";
import { FranchisePage } from "./components/FranchisePage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: HomePage },
        { path: "story", Component: StoryPage },
        { path: "corporate", Component: CorporatePage },
        { path: "franchise", Component: FranchisePage },
        { path: "contact", Component: ContactPage },
      ],
    },
  ]
);
