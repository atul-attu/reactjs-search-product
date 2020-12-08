import React from "react";

const Card = ({data}) => {
    return(
        <div className="col-md-4">
            <div className="card text-left">
                <img className="card-img-top" src={data.previewURL} alt={data.tags} />
                <div className="card-body">
                    <h4 className="card-title">
                        {data.user}
                    </h4>
                    <p className="card-text">
                        Likes : {data.likes}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;