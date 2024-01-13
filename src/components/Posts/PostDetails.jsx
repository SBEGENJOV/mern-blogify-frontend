import { useEffect } from "react";
import { getPostAction } from "../../redux/slices/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import ErrorMsg from "../Alert/ErrorMsg";

const PostDetails = () => {
  //! navigation
  const navigate = useNavigate();
  //! redux store
  const dispatch = useDispatch();
  const { post, error, loading, success } = useSelector(
    (state) => state?.posts
  );

  //! get the login user
  const { userAuth } = useSelector((state) => state?.users);
  //! Get params
  const { postId } = useParams();
  //dispatch
  useEffect(() => {
    dispatch(getPostAction(postId));
  }, [dispatch, postId]);

  //! Get the creator of the post
  const creator = post?.post?.author?._id?.toString();
  // //! get the login user
  const loginUser = userAuth?.userInfo?._id?.toString();

  const isCreator = creator === loginUser;

  return (
    <>
      {error ? (
        <ErrorMsg message={error?.message} />
      ) : (
        <section
          className="py-16 bg-white md:py-24"
          style={{
            backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="mx-auto mb-12 text-center md:max-w-2xl">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium leading-5 text-green-500 uppercase bg-green-100 rounded-full shadow-sm">
                {post?.post?.category?.name}
              </div>
              <div className="flex items-center justify-center">
                <p className="inline-block font-medium text-green-500">
                  {post?.post?.author?.username}
                </p>
                <span className="mx-1 text-green-500">•</span>
                <p className="inline-block font-medium text-green-500">
                  {new Date(post?.post?.createdAt).toDateString()}
                </p>
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-5xl text-darkCoolGray-900">
                {post?.post?.title}
              </h2>

              <Link
                to={`/user-public-profile/${post?.post?.author?._id}`}
                className="flex items-center justify-center -mx-2 text-left"
              >
                <div className="w-auto px-2">
                  <img
                    className="w-12 h-12 rounded-full"
                    alt="author image"
                    src={
                      userAuth?.userInfo?.profilePicture ||
                      "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
                    }
                  />
                </div>
                <div className="w-auto px-2">
                  <h4 className="text-base font-bold md:text-lg text-coolGray-800">
                    {post?.post?.author?.username}
                  </h4>
                </div>
              </Link>
            </div>
          </div>
          <img
            className="w-full mx-auto mb-4 mb-10"
            src={post?.post?.image}
            alt="post image"
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          ></div>
          <div className="container px-4 mx-auto">
            <div className="mx-auto md:max-w-3xl">
              <p className="pb-10 mb-8 text-lg font-medium border-b md:text-xl text-coolGray-500 border-coolGray-100">
                {post?.post?.content}
              </p>
              {/* delete and update icons */}
              {isCreator && (
                <div className="flex justify-end mb-4">
                  {/* edit */}
                  <Link
                    to={`/posts/${post?.post?._id}/update`}
                    className="p-2 mr-2 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </div>
              )}
              <h3 className="mb-4 text-2xl font-semibold md:text-3xl text-coolGray-800">
                Add a comment
              </h3>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
