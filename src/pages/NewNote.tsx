import Heading from "../components/Heading"

type Props = {}

const NewNote = (props: Props) => {
  return (
    <div>
      <Heading variant="body2"
      sx={{ fontWeight: 800 , maxWidth: 500 }}
      gutterBottom
      >New Note</Heading>
    </div>
  )
}

export default NewNote