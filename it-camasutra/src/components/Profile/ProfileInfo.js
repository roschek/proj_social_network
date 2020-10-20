import React from "react";

const ProfileInfo = (props) =>{
    return(
        <div className="row mb-5">
            <img  className="round col-4 pl-1 pr-1"
                  src="https://demotivation.ru/wp-content/uploads/2020/05/1463056020_205639_1463060534_noticia_normal_recorte1-1.jpg" alt="avatar"/>
           <div className="mt-5 w-100 col-8">
            <h2 className="ml-5 text-left">{props.name}</h2>
            <p className="text-left ml-5 mt-3 h5">{props.age}</p>
           </div>
        </div>
    )

}

export default  ProfileInfo