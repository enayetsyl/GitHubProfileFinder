import ReactSelectCreatable from 'react-select/creatable';

const NoteForm = () => {
  return (
    <div className='container mx-auto'>
      <form>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="title" className='text-xl font-semibold'>Title</label>
            <input type="text" name="title" id="title" placeholder='Title' className='border p-[6px] rounded-md border-gray-300 focus:outline-sky-500'/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="tags" className='text-xl font-semibold'>Tags</label>
            <ReactSelectCreatable
            isMulti
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default NoteForm