import  { makeStyles} from '@material-ui/core'


const useStyle = makeStyles({
    navbar : {
        backgroundColor : '#FFF',
       color : '#000',
       fontWeight : 'bold',
       fontSize : 10
    },
    main : {
            minHeight : '80vh'
    },
    brand : {
        fontWeight : 'bold',
        fontSize : '1.5rem',
        color : "#000"
    },
    grow :{
        flexGrow : 1
    },
    footer : {
        textAlign : 'center'
     }

})

export default useStyle;