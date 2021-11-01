const AddMargin = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "60px",
        boxShadow: "5px 10px 8px #888888",
      }}
    >
      {props.children}
    </div>
  );
};

export default AddMargin;
