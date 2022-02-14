function FourthComponentSubInput({ selectedExtData }) {
  return (
    <div>
      <input
        type="text"
        className="form-input"
        placeholder="Choose from below"
        value={selectedExtData}
        disabled
      />
    </div>
  );
}

export default FourthComponentSubInput;
