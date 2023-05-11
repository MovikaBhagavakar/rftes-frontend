import React from "react";
import TableMain from "./component/table/tableMain";
import TableHead from "./component/table/tableHead";
import TableBody from "./component/table/tableBody";
import AdminArticleAction from "./AdminArticleAction";
import CustomAdminModal from "./component/Modal";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [articles, setArticles] = React.useState([]);
  const [reRender, setReRender] = React.useState(new Date().getTime());
  const [viewArticle, setViewArticle] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("rftes")).userExist.role === "admin") {
      fetch("http://localhost:8080/v1/admin/articles", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setArticles(data.responseData))
        .catch((err) => console.log(err));
    } else {
      alert("You are not authorized to access this page.");
      navigate("/");
    }
  }, []);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("rftes")).userExist.role === "admin") {
      fetch("http://localhost:8080/v1/admin/articles", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setArticles(data.responseData))
        .catch((err) => console.log(err));
    } else {
      alert("You are not authorized to access this page.");
      navigate("/");
    }
  }, [reRender]);

  const childs = [
    {
      component: TableHead,
      props: {
        options: [
          "#",
          "Category",
          "Heading",
          "Description",
          "Created At",
          "Status",
          "Actions",
        ],
      },
    },
    {
      component: TableBody,
      props: {
        values: articles.map((article) => {
          return {
            category: article.category,
            heading: article.heading,
            description: article.description,
            createdAt: article.createdAt,
            status: article.published ? "Published" : "Not Published",
            action: (
              <div className="d-flex">
                <AdminArticleAction
                  onClick={() => {
                    fetch(
                      `http://localhost:8080/v1/admin/articles/${article._id}`,
                      {
                        method: "PUT",
                        body: JSON.stringify({
                          published: !article.published,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.responseCode == 1) {
                          setReRender(new Date().getTime());
                        }
                      });
                  }}
                  btnTheme={article.published ? "btn-danger" : "btn-success"}
                  label={article.published ? "Suspend" : "Publish"}
                />
                <AdminArticleAction
                  onClick={() => {
                    fetch(
                      `http://localhost:8080/v1/admin/articles/${article._id}`,
                      {
                        method: "DELETE",
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.responseCode == 1) {
                          setReRender(new Date().getTime());
                        }
                      });
                  }}
                  btnTheme={"btn-danger"}
                  label={"Delete"}
                />
                <AdminArticleAction
                  onClick={() => {
                    fetch(
                      `http://localhost:8080/v1/admin/articles/${article._id}`,
                      {
                        method: "GET",
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        if (data.responseCode == 1) {
                          setViewArticle(data.responseData);
                        }
                      });
                  }}
                  dataBsTarget={"#adminNews"}
                  dataBsToggle={"modal"}
                  btnTheme={"btn-primary"}
                  label={"View"}
                />
              </div>
            ),
          };
        }),
      },
    },
  ];
  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <h2>Admin</h2>
      <TableMain childrenComponent={childs} />
      <CustomAdminModal data={viewArticle} id={"adminNews"} />
    </div>
  );
};

export default Admin;
