import  { makeStyles} from '@material-ui/core'


const useStyle = makeStyles({
    navbar : {
        backgroundColor : '#FFF',
       color : '#000',
       fontWeight : "bold",
       fontSize : 10
    },
    main : {
            minHeight : '80vh'
    },
    footer : {
        textAlign : 'center'
    }

})

export default useStyle;