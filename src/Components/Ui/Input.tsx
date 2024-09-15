const InputField = ({ type, placeholder, name }) => {
  return (
    <div className={type=== "textarea" && "mt-3"}>
      <label className="font-medium" htmlFor={placeholder}>{placeholder}</label>
      {
        type==="textarea"?<textarea
        name={name}
        required
        id={placeholder}
        className="w-full  min-h-[200px] focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium"
     
      />:<input
      name={name}
      required
      id={placeholder}
      className="w-full focus:outline-none border border-gray-600 py-2 pl-2 rounded-lg text-lg font-medium"
      type={type}
    />
      }
    </div>
  );
};

export default InputField;
