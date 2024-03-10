import ReactSelectCreatable from 'react-select/creatable';
import Button from './Button';

const NoteForm = () => {
  return (
    <div className='py-20'>
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
          <div
          className='flex flex-col gap-2 w-full my-5'
          >
            <label htmlFor="body" className='text-xl font-semibold'>Body</label>
         <textarea name="body" id="" cols={30} rows={10} placeholder='Body' className='border p-[6px] rounded-md border-gray-300 focus:outline-sky-500'></textarea>
          </div>
          <div className='flex justify-center gap-5'>
            <Button data-title='Save'>Save</Button>
            <Button >Clear</Button>
          </div>
      </form>
    </div>
  )
}

export default NoteForm