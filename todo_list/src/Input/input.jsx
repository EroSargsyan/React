export default function Input({ type, placeholder, value, labelName }) {
  return (
    <form>
      <label>
        {labelName}
        <input type={type} placeholder={placeholder} value={value} />
      </label>
    </form>
  );
}
