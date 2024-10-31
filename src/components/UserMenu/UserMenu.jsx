import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../../redux/auth/selectors"; //
import { logout } from "../../redux/auth/operations"; //
import toast from "react-hot-toast";
import s from './UseMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const nameUsers = useSelector(selectUsersData); //
  const handleExitClick = () => {
    toast.success(`I'll see you next time ${nameUsers.name}`, {
      duration: 4000,
      position: "top-center",

      style: {
        borderRadius: "8px",
        background: "rgb(8, 168, 241)",
        color: "aliceblue",
      },

      className: "",
      icon: "👋",
    });
    dispatch(logout());
  };

  setTimeout(() => {
    toast.success(`Welcome ${nameUsers.name}`, {
      duration: 4000,
      position: "top-center",

      style: {
        borderRadius: "10px",
        background: "rgb(8, 168, 241)",
        color: "aliceblue",
      },

      className: "",
      icon: "👋",
    });
  }, 2000);

  return (
    <div>
      <h2>Welcome, {nameUsers.name}</h2>
      <button className={s.exbtn} onClick={handleExitClick}>Exit</button>
    </div>
  );
};

export default UserMenu;
