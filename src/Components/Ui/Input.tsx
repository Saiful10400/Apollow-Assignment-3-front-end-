const InputField = ({ type, placeholder, name }) => {
  return (
    <>
      <label className="font-medium" htmlFor={placeholder}>{placeholder}</label>
      <input
        name={name}
        id={placeholder}
        className="w-full focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium"
        type={type}
      />
    </>
  );
};

export default InputField;
