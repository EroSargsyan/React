// import React from "react";

// export default class Comments extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comment: "",

//       items: [
//         {
//           date: new Date().toLocaleTimeString(),
//           by: window.localStorage.getItem("login"),
//         },
//       ],
//     };
//   }

//   addComment = () => {};

//   render() {
//     console.log(this.state.items);
//     return (
//       <div id="container">
//         <div id="commentInput">
//           <h2>Comments</h2>
//           <input
//             type="text"
//             placeholder="comment"
//             onChange={(event) => {
//               this.setState({
//                 comment: event.target.value,
//               });
//             }}
//           />
//           <input
//             type="button"
//             value="Add Comment"
//             onClick={() => this.addComment}
//           />
//         </div>

//         <div id="addedComments">
//           {this.state.items.map((el) => {
//             return (
//               <div key={Math.floor(Math.random() * 10000)}>
//                 <p>Comment: {this.state.comment}</p>
//                 <p>By: {el.by}</p>
//                 <p>Date: {el.date}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
