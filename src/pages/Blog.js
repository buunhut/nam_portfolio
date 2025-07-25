import React from "react";
import TopMenu from "../components/TopMenu";

const Blog = () => {
  return (
    <div id="blog">
      <TopMenu data={true} />
      <div className="content">
        <iframe src="/pdf/sample.pdf" title="PDF Viewer" />
      </div>
    </div>
  );
};

export default Blog;
