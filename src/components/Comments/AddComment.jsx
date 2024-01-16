import { useEffect, useState } from "react";
import CommentsList from "./CommentLists";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../Redux/Slices/comments/commentsSlice";
import PropTypes from "prop-types";

const AddComment = ({ postId, comments }) => {
  const [formData, setFormData] = useState({
    message: "",
  });
  const [localComments, setLocalComments] = useState(comments);

  const dispatch = useDispatch();
  const { success } = useSelector((state) => state?.comments);

  useEffect(() => {
    if (success) {
      // Yeni bir yorum eklendiğinde yerel yorumları güncelle
      setLocalComments((prevComments) => [
        ...prevComments,
        { message: formData.message },
      ]);
      // Formu sıfırla
      setFormData({ message: "" });
    }
  }, [dispatch, success]); // formData.message ve localComments'u bağımlılıklardan çıkardık

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCommentAction({ ...formData, postId }));
  };

  return (
    <div className="bg-white rounded shadow">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-blue-600">
          Yorumlar
        </h3>
        <div className="mt-5">
          <hr className="mt-5 border-gray-300" />
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-none"></div>
              <div className="flex-grow">
                <div className="border rounded-lg shadow-sm">
                  <div className="p-3 border-b bg-gray-50">
                    <h4 className="text-sm font-medium text-blue-600">
                      Yorum ekle
                    </h4>
                  </div>
                  <div className="p-3">
                    <label htmlFor="comment" className="sr-only">
                      Yorum
                    </label>
                    <textarea
                      id="comment"
                      rows={3}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-textarea focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      placeholder="Your comment"
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    />
                  </div>
                  <div className="flex items-center justify-end px-3 py-2 rounded-b-lg bg-gray-50">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* comment lists */}
      <CommentsList comments={localComments} />
    </div>
  );
};

export default AddComment;

AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array,
};
