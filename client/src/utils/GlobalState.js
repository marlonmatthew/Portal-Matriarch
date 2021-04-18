import React, { createContext, useReducer, useContext } from "react";
import API from "./api";

const stateContext = createContext();
const { Provider } = stateContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle-comment":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.id) {
            return { ...post, addComment: !post.addComment };
          }
          if (post.addComment === true && post.id != action.id) {
            return { ...post, addComment: !post.addComment };
          }
          return post;
        }),
      };
    case "create-array":
      // API.getAllPosts()
      //   .then((res) => {

      const new_state = { ...state, posts: action.payload };

      return new_state;
    // })
    // .catch((error) => {
    //   console.log(error);
    //   return [];
    // });

    // toggle-user
    case "toggle-user":
      return {
        //not operator
        ...state,
        addUser: !state.addUser,
        openNews: false,
        openDirectory: false,
        openTime: false,
        openPay: false,
        openManage: false,
        openEmployeeForm: true,
      };
    case "push-comment":
      const new_posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            comments: post.comments.concat(action.payload.comment),
            addComment: !post.addComment,
            commentCount: post.commentCount + 1,
          };
        }
        return post;
      });

      return { ...state, posts: new_posts };

    case "toggle-comment-list":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.id
            ? { ...post, hasComments: !post.hasComments }
            : post
        ),
      };
    case "load-more-post":
      return {
        ...state,
        postCount: state.postCount + 2,
      };
    case "add-like":
      const new_comments = state.posts.map((post) => {
        return {
          ...post,
          comments: post.comments.map((comment) => {
            if (comment.id === action.id) {
              return {
                ...comment,
                likes: comment.likes + 1,
              };
            }
            return comment;
          }),
        };
      });
      return { ...state, posts: new_comments };

    case "toggle-new-post":
      return {
        ...state,
        createPost: !state.createPost,
        openNews: true,
        openDirectory: false,
        openTime: false,
        openPay: false,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: false,
      };

    case "add-new-post":
      const new_post = { ...action.payload };

      return { ...state, posts: [new_post].concat(state.posts) };

    case "open-directory":
      return {
        ...state,
        openDirectory: true,
        openTime: false,
        openPay: false,
        openNews: false,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: false,
      };
    case "open-news":
      return {
        ...state,
        openNews: true,
        openDirectory: false,
        openTime: false,
        openPay: false,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: false,
        createPost: false,
      };
    case "open-pay":
      return {
        ...state,
        openDirectory: false,
        openTime: false,
        openNews: false,
        openPay: true,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: false,
      };
    case "open-time":
      return {
        ...state,
        openDirectory: false,
        openTime: true,
        openNews: false,
        openPay: false,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: false,
      };
    case "open-manage":
      return {
        ...state,
        openDirectory: false,
        openTime: false,
        openNews: false,
        openPay: false,
        openManage: true,
        openEmployeeForm: false,
        openCreateSchedule: false,
      };
    case "open-createschedule":
      return {
        ...state,
        openDirectory: false,
        openTime: false,
        openNews: false,
        openPay: false,
        openManage: false,
        openEmployeeForm: false,
        openCreateSchedule: true,
      };
    // case "open-viewrequest":
    //   return {
    //     ...state,
    //     openDirectory: false,
    //     openTime: false,
    //     openNews: false,
    //     openPay: false,
    //     openManage: false,
    //   };
    default:
      return;
  }
};

const StateProvider = ({ value = false, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    createPost: false,
    postCount: 3,
    addUser: false,
    openDirectory: false,
    openNews: false,
    openPay: false,
    openTime: false,
    openManage: false,
    openEmployeeForm: false,
    openCreateSchedule: false,
    logout: false,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
  return useContext(stateContext);
};

const authContext = React.createContext({
  authData: {
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  setAuth: () => {},
});

export { StateProvider, useStateContext, authContext };
