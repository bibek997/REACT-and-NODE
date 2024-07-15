import React from "react";

const ComB = ({ onClose, title, formData, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg overflow-y-auto max-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.map((field, index) => (
                <div key={index}>
                  <label className="text-base my-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="border rounded-md p-2 w-full"
                    required={field.required}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComB;
