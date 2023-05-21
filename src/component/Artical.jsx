import React, { useEffect, useState } from "react";
import "./Css/articale.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Artical() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const location = useLocation();
  const [currentPathName, setCurrentPathName] = useState(null);

  useEffect(() => {
    if (location.pathname !== "/create-article") {
      fetch(
        `${process.env.REACT_APP_SERVER_URL}/v1/articles/${
          location.pathname.split("/")[2]
        }`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("rftes")).token
            }`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.responseData.article.heading);
          setDescription(data.responseData.article.description);
          setCategory(data.responseData.article.category);
          setImageUrl(data.responseData.article.imgUrl);
        });
    } else {
      setTitle("");
      setDescription("");
      setCategory("");
      setImageUrl("");
      setCurrentPathName("/create-article");
    }
  }, [location]);

  // eslint-disable-next-line no-undef
  const uploadImage = cloudinary?.createUploadWidget(
    {
      cloudName: "dlmsjpzl2",
      uploadPreset: "rftes_movika",
      sources: ["local", "url"],
      clientAllowedFormats: ["jpg", "jpeg", "png"],
      cropping: true,
    },
    async (error, result) => {
      if (!error && result && result.event === "success") {
        setImageUrl(result.info.url);
      }
    }
  );
  return (
    <div style={{ marginTop: "115px", overflowY: "auto" }} className="cls">
      <div className="box">
        <h1 className="text-align center">Your Thoughts</h1>
        <form className="form-horizontal">
          <div className="letter">
            Image
            <br></br>
            <img
              height={"100%"}
              width={"100%"}
              src={imageUrl}
              alt=""
              srcset=""
            />
          </div>
          <div className="letter">
            Title:
            <br></br>
            <input
              type="text"
              className="form-control"
              placeholder="Your Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="area">
            Description:
            <br></br>
            <textarea
              className="form-control "
              placeholder="Your Description"
              cols={50}
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="area">
            Choose Your Category:
            <br></br>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Business">Business</option>
              <option value="News">News</option>
              <option value="Sports">Sports</option>
              <option value="Health">Health</option>
              <option value="Technology">Technology</option>
              <option value="Science">Science</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div className="area">
            ImageUpload:
            <br></br>
            <button
              onClick={(e) => {
                e.preventDefault();
                uploadImage.open();
              }}
              className="btn"
            >
              Upload Image
            </button>
          </div>
          <div className="setting">
            <button
              type="button"
              className="btn btn-primary area area1"
              onClick={() => {
                if (location.pathname === "/create-article") {
                  fetch(`${process.env.REACT_APP_SERVER_URL}/v1/articles`, {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${
                        JSON.parse(localStorage.getItem("rftes")).token
                      }`,
                    },
                    body: JSON.stringify({
                      heading: title,
                      description: description,
                      category: category,
                      imgUrl: imageUrl,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      alert(data.responseMessage);
                      setTitle(null);
                      setDescription(null);
                      setCategory(null);
                      navigate("/news");
                    })
                    .catch((err) => {
                      alert(err.response.data.responseMessage);
                    });
                } else {
                  fetch(
                    `${process.env.REACT_APP_SERVER_URL}/v1/articles/${
                      location.pathname.split("/")[2]
                    }`,
                    {
                      method: "PUT",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${
                          JSON.parse(localStorage.getItem("rftes")).token
                        }`,
                      },
                      body: JSON.stringify({
                        heading: title,
                        description: description,
                        category: category,
                        imgUrl: imageUrl,
                      }),
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      alert(data.responseMessage);
                      setTitle(null);
                      setDescription(null);
                      setCategory(null);
                      navigate("/news");
                    })
                    .catch((err) => {
                      alert(err.response.data.responseMessage);
                    });
                }
              }}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-primary area area1"
              style={{ marginLeft: "20px" }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
