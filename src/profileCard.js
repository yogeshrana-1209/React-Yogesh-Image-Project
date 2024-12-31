import React from "react";

export default function ProfileCard({ title, handle, image ,description}) {
  console.log(title, handle);

  // 1) Method to pass props data
  // const title = props.title;
  // const handle = props.handle;

  // 2) Method to pass props data
  //const {title, handle} = props;

  //3) Method to pass props data------> Using Argument Destructuring
  //function ProfileCard({title, handle})

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="pda logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content"></div>
        <p>Title is {title}</p>
        <p>Handle is {handle}</p>
      </div>
      <div className="content mx-4">
          {description}
      </div>
    </div>
  );
}
