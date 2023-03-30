import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useUserStore } from "../../stores/user";
import { AssideBanner } from "./AssideBanner";
import { HomePageContainer } from "./styles";
import { SwitchForm } from "./SwitchForm";

export const HomePage = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@ziti:token");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const handleGetSession = async (): Promise<void> => {
      try {
        const response = await api.get("/sessions");
        setUser(response.data);
        navigate("/feed", { replace: true });
      } catch (error) {
        console.error(error);
      }
    };

    if (token) handleGetSession();
  }, []);
  return (
    <HomePageContainer>
      <AssideBanner />

      <SwitchForm />
    </HomePageContainer>
  );
};
