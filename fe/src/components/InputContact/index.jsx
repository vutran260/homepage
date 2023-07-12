export default function InputContact({ label, placeholder, id, handleChange, type = 'text', error }) {
  return (
    <div className='form-item'>
      <p className='w-full text-sm opacity-60'>{label}</p>
      <input
        onChange={handleChange}
        id={id}
        name={id}
        type={type}
        className={`w-full rounded-sm border-b-[1px] border-[#434A5F] bg-transparent py-4 placeholder-[#434A5F] placeholder-opacity-100 outline-none focus:border-gray-500 focus:shadow-sm ${
          error ? 'border-red-600' : ''
        }`}
        placeholder={placeholder}
      />
      {error && <div className='mt-1 text-red-600'>{error}</div>}
    </div>
  )
}
