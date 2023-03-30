import { Routes, Route } from "react-router-dom";
import { FeedPage } from "../pages/FeedPage";
import { HomePage } from "../pages/HomePage";
import { PostsFavoritesPage } from "../pages/PostsFavoritesPage";
import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/posts/favorites" element={<PostsFavoritesPage />} />
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
