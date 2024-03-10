import React, { useState } from "react";
import "./Question.css";
import Header from "../Afterlogin/Header";
import { Link, useNavigate, } from "react-router-dom";
import Footer from "../Footer/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios  from "axios";
function Question() {
  const [title, setTitle] = useState("");
  const [alert, setAlert] = useState("");
  const [description, setDescription] = useState("");
  const Navigate = useNavigate();
  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const plainTextDescription = stripHtml(description);
  const postQuestion = async () => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    if (!token) {
      // console.error("No token found");
      setAlert("You're not logged in!");
      return;
    }
    try {
      const response = await axios.post(
        "https://request-response-server.vercel.app/api/questions/onequestion",
        {
          title,
          description:plainTextDescription,
        },
        {
          headers:{
            Authorization:`Bearer ${token}`,
          }
        }
      );
      setTimeout(() => {
        Navigate("/afterlogin");
      }, 1000);
      setAlert("Question successfully posted!");
    } catch (error) {
      // console.error('Error posting the question:', error);
      console.error(
        "Error posting the question:",
        error.response ? error.response.data : error
      );
      setAlert("There was an error posting your question.");
    }
  };
  return (
    <div>
      <Header />
      <div className="askquestionguides">
        <h2>Steps to write a good question</h2>
        <ul>
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>

      <div className="askquestionpublic">
        <h2>Ask a public question</h2>
        <Link to="/afterlogin">
          <p>Go to Question page</p>
        </Link>
      </div>

      <div className="questionform">
        <h1>{alert}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postQuestion();
          }}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ fontSize: `25px` }}
            className="titlequestion"
            type="text"
            placeholder="Title"
            name="title"
          />

          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="descritpion"
            placeholder="Question Description"
          />
          <br />
          <button className="postbutton">Post Your Question</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Question;
