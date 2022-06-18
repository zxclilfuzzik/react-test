import { Typography } from "@mui/material";

export default function Title(props) {

    return (
        <Typography style={titleStyle}>
            {props.title}
        </Typography>
    )
}

const titleStyle = {
    color: 'black',
    fontSize: 55,
    fontWeight: 'bold',
    paddingLeft: '3vw',
    paddingTop: '40px'
}