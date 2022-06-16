/* eslint-disable no-unused-vars */
import React from "react";





function reuse(props:any){


    return(
       <div className="ui fluid card">
           <div >
               {props.header}
           </div>
           <div className="ui bottom attached button">
               {props.footer}
           </div>
       </div>
    )

}

export default reuse