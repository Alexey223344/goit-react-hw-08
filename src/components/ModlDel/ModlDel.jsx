const ModlDel = ({ closeModal, deleteContact }) => {
  const handleDelits = () => {
    deleteContact();
    closeModal();
  };

  return (
    <div>
      <button type="button" onClick={closeModal}>
        X
      </button>
      <div>
        <p>Delete?</p>
        <div>
          <button onClick={handleDelits}>Yes</button>
          <button onClick={() => closeModal()}>No</button>
        </div>
      </div>
    </div>
  );
};
export default ModlDel;
