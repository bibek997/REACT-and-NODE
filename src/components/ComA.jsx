import React, { useState } from "react";
import ComB from "./ComB";

const ComA = () => {
  const [isComBOpen, setIsComBOpen] = useState(false);

  const handleOpenComB = () => {
    setIsComBOpen(true);
  };

  const handleCloseComB = () => {
    setIsComBOpen(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    handleCloseComB();
  };

  const formData = [
    { label: "Book Class Number", type: "text", name: "bookClassNumber", placeholder: "Enter Book Class Number", required: true },
    { label: "Book Number", type: "text", name: "bookNumber", placeholder: "Enter Book Number", required: true },
    { label: "Publisher Name", type: "text", name: "publisherName", placeholder: "Enter Publisher Name", required: true },
    { label: "Author Name", type: "text", name: "authorName", placeholder: "Enter Author Name", required: true },
    { label: "ISBN", type: "text", name: "isbn", placeholder: "Enter ISBN Number", required: true },
    { label: "Barcode", type: "text", name: "barcode", placeholder: "Enter Barcode No", required: true },
    { label: "Title", type: "text", name: "title", placeholder: "Enter Book Title", required: true },
    { label: "Sub Title", type: "text", name: "subTitle", placeholder: "Enter Book Sub Title", required: true },
    { label: "Edition Statement", type: "text", name: "editionStatement", placeholder: "Enter Edition Statement", required: true },
    { label: "Publication Place", type: "text", name: "publicationPlace", placeholder: "Enter Publication Place", required: true },
    { label: "Publication Year", type: "text", name: "publicationYear", placeholder: "Enter Publication Year", required: true },
    { label: "No Of Pages", type: "text", name: "noOfPages", placeholder: "Enter No Of Pages", required: true },
  ];

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        onClick={handleOpenComB}
      >
        Open Form
      </button>
      {isComBOpen && (
        <ComB
          onClose={handleCloseComB}
          title="Add New Book"
          formData={formData}
          onSubmit={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default ComA;
