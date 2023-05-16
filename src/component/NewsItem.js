import React, { useEffect, useState } from 'react'

const NewsItem = (props) => {
  const [active, setActive] = useState(false)
  //  add props
  let { title, description, imgurl, nwesurl, author, date, source, id } = props;

  useEffect(() => {
    fetch(`http://localhost:8080/v1/users/${JSON.parse(localStorage.getItem("rftes")).userExist._id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
      }
    }).then((res) => res.json()).then((data) => props.setUserData(data.responseData.favourites))
  }, [])

  useEffect(() => {
    let userDataArrState = props?.userData?.map((value) => value._id)
    if (userDataArrState?.includes(id)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [props.userData])

  useEffect(() => {
    fetch(`http://localhost:8080/v1/users/${JSON.parse(localStorage.getItem("rftes")).userExist._id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
      }
    }).then((res) => res.json()).then((data) => props.setUserData(data.responseData.favourites))
  }, [active])

  const handleLike = () => {
    let userDataArr = props?.userData?.map((value) => value._id)
    // console.log(id, userDataArr)
    if (userDataArr?.includes(id)) {
      // console.log("if condition");
      const index = userDataArr?.indexOf(id);
      // console.log(index);
      userDataArr?.splice(index, 1)
      props.setUserData(userDataArr)

      fetch(`http://localhost:8080/v1/users/${JSON.parse(localStorage.getItem("rftes")).userExist._id}`, {
        method: "POST",
        body: JSON.stringify({
          favourites: userDataArr
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
        }
      }).then(() => alert("Removed from fav(s) list."))
    } else {
      // console.log("else condition");
      const updatedState = [...props.userData, id]
      props.setUserData(updatedState)
      // console.log(props.userData)
      fetch(`http://localhost:8080/v1/users/${JSON.parse(localStorage.getItem("rftes")).userExist._id}`, {
        method: "POST",
        body: JSON.stringify({
          favourites: updatedState
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("rftes")).token}`
        }
      }).then(() => alert("Added to fav(s) list."))
    }
  }

  return (

    <div>
      <div className="card my-5" style={{ width: "20rem" }}>
        {/* showing top titles  */}
        <span style={{ left: "10%", textAlign: "end" }} className="position-absolute top=0 start=100  translate-middle badge rounded-pill bg-danger">
          {source}</span>
        {
          id && <div className={`p-2 position-absolute ${active && "bg-danger"}`} style={{ borderRadius: "50%" }}>
            <i onClick={() => {
              setActive(!active)
              handleLike()
            }} className="fa-regular fa-heart text-white" style={{ cursor: "pointer" }}></i>
          </div>
        }
        {/* if image is null then this image will show */}
        <img src={imgurl ? imgurl : "https:static.toiimg.com/thumb/msid-93287340,width-1070,height-580,imgsize-221349,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg "} className="card-img-top" alt="img" />
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        {/* add dates and author */}
        <p className="card-text">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</p>

        <a rel="noreferrer" href={nwesurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>

      </div>

    </div>

  )

}

export default NewsItem
