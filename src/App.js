import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./App.css";

class App extends Component {
  handleEditorChange = (content, editor) => {
    localStorage.setItem("content", content);
  };

  render() {
    return (
      <div className="text-editor">
        <Editor
          apiKey={process.env.REACT_APP_YOUR_API_KEY}
          initialValue="<p>Hi, I'm your rich text editor</p>"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default App;
