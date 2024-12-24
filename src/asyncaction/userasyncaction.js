import { PostFail, PostSuc } from "../action/postaction";

export const  getData  = ()=>{

    return async (dispatch,getstate)=>{

        try
        {
        var data = await fetch("https://jsonplaceholder.typicode.com/posts");
        var mydata= await data.json();
        dispatch(PostSuc(mydata))
        }
        catch
        {
            dispatch(PostFail(mydata))
        }




    }

}