import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IUser, useUserStore } from "../../../../../stores/user";

export const OptionExit = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem("@ziti:token");
    setUser({} as IUser);
    navigate("/", { replace: true });
  };
  return (
    <li>
      <button type="button" onClick={handleLogout}>
        <MdOutlineLogout />
        <p>Sair</p>
      </button>
    </li>
  );
};
