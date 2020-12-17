import React from "react";

const Gallery = (props)=>{
    console.log(props);
    if (props.data.length > 0) {
    return(
        <div className="img-holder" >
              
 {props.data.map(p => {
      return <img key={p.title} src={p.thumbnailUrl} alt="can't show image" />;
    })}

            </div>
    )}
    else{
        return "";
    }

}

export default Gallery;