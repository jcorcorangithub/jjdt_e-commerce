import React from "react";
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Orders from "./Orders";
import Suggestions from "./Suggestions";
import FileUpload from "./FileUpload";
import PaymentForm from "./PaymentForm";
import UploadModal from "./UploadModal";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: "100%"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function Profile(){
    const classes = useStyles();

      
    return(
        <>
  
            <Grid  className={classes.paper}>
                <div className={classes.paper}>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Typography varient='h2'> JJDT</Typography>
                <Typography varient='h6'>Shopper</Typography>
                 </div>
                 <div className={classes.paper}>
                 <div className={classes.paper}>
                   <UploadModal/>
                         <FileUpload/>
                         <PaymentForm/>
                     </div>
                     <div className={classes.paper}>
                         <Orders/>
                     </div>
                 </div>
                 <div className={classes.paper}>
                     <Suggestions/>
                 </div>
           
            
            </Grid>

        </>
    );
}

 export default Profile;