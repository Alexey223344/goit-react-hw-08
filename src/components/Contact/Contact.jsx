import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserContacts } from "../../redux/contacts/operations";
import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { RedactionContactModl } from "../RedactionContactModl/RedactionContactModl";
import toast from "react-hot-toast";
import ModlDel from "../ModlDel/ModlDel";
import ReactModal from "react-modal";

const Contact = ({ user }) => {
  const [isModlOpen, setIsModlOpen] = useState(false);
  const [isModlDeletOpen, setIsModlDeletOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelContUser = () => {
    dispatch(deleteUserContacts(user.id));
    toast.success("Deleted!", {
      duration: 4000,
      position: "top-center",
      style: {
        borderRadius: "10px",
        background: "rgb(8, 168, 241)",
        color: "aliceblue",
      },
      className: "",
      icon: "✅ ",
    });
  };

  // const handleOpen = (openModal) => {
  //   openModal(true);
  // };
  // const handleClose = (closeModal) => {
  //   closeModal(false);
  // };
  ReactModal.setAppElement("#root");

  return (
    <>
      <div>
        <p>Name: {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
        <p>Phone:{user.number}</p>
      </div>
      <div>
        <button type="button" onClick={() => setIsModlDeletOpen(true)}>
          <RiDeleteBinLine size={18} />
        </button>
        <button onClick={()=>setIsModlOpen(true)}>
        <RiEdit2Line size={18} />
        </button>

        <ReactModal isOpen={isModlOpen} contentLabel={"Example Modal"}>
          <RedactionContactModl closeModal={() => setIsModlOpen(false)} user={user} />
        </ReactModal>
        <ReactModal isOpen={isModlDeletOpen} contentLabel={"text"}>
        <ModlDel closeModal={()=>setIsModlDeletOpen(false)} deleteContact={handleDelContUser}/>
        </ReactModal>
      </div>
    </>
  );
};
export default Contact;
