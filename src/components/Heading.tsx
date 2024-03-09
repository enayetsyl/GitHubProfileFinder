import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';
import  TypographyVariant  from '@mui/material/Typography';


interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
  gutterBottom?: boolean;
  sx?: SxProps<Theme>;
  children: string;
}


const Heading = ({variant, gutterBottom=false, sx, children}: HeadingProps) => {
  return (
    <div>
      <Typography variant={variant} gutterBottom={gutterBottom}
      sx={sx}
      >
        {children}
      </Typography>
    </div>
  )
}

export default Heading