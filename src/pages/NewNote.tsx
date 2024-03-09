import { Heading, NoteForm } from "../constants"


const NewNote = () => {
  return (
    <div>
      <Heading variant="h3"
      sx={{ marginBottom: '16px' }}
      gutterBottom
      >New Note</Heading>
      <NoteForm/>
    </div>
  )
}

export default NewNote