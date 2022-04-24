import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    root: {
      "&$focused $notchedOutline": {
        borderColor: "#0d6efd",
      },
    },
    focused: {},
    notchedOutline: {},
    form: {
      height: "100%",
      width: "90%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      textTransform: "capitalize",
      // backgroundColor: "#0d6efd",
      backgroundColor: "#222222",
      '&:hover': {
        backgroundColor: "#000",
    }
    },
    typography: {
      cursor: "pointer",
      color: "#0d6efd",
      paddingBottom: theme.spacing(2)
    },
    textField: {
      borderColor: "red",
    },
  }));