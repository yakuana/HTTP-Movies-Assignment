import { makeStyles } from '@material-ui/core/styles';

export const updateStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'column wrap',  
        justifyContent: 'center'

    },
    background: {
        paddingTop: 30,
        paddingBottom: 30,  
        width: 550,
        margin: '0 auto',
        textAlign: 'center',
    },
    textField: {
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
        margin: "10px auto",
        width: 400, 
        height: 50, 
        fontSize: 20,
    },
    button: {
        width: 200, 
        height: 48,
        fontSize: 20,
        background: '#2196F3',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        margin: '10px auto',
    },
    error: {
        color: 'red', 
        fontSize: 20
    }
}));