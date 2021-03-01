// import User from '../models/user.model';
// import Tree from '../models/tree.model';
// import { decodeBase64 } from 'bcryptjs';

// export const substractLeafTimer = () => {
//     User.updateOne({_id: "6033c60490a4a80fcdf75654"},[{
//         $set: {
//             leaves: {
//                 $function: {
//                     body: function(leaves) {
//                         Math.floor(leaves / 2);
//                         if (leaves < 0) {
//                             return 0;
//                         } else {
//                             return leaves
//                         }

//                     },
//                     args: ["$leaves"],
//                     lang: "js"
//                 }
//             }
//         }
//     }])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//     console.log("leaves/2")
// };

// export const substractLeafTimer = () => {
//     User.aggregate([
//         {
//             $match: {
//                 _id: "6033c60490a4a80fcdf75654"
//             }
//         },
//         {
//             $set: {
//                 leaves: 2
//             }
//         }
//     ])
//     console.log("leaves+2")
// };

// export const addLeafTimer = () => {
//     const leavesToAdd = 0;
//     User.updateMany({},[{
//         $set: {
//             leaves: {
//                 $function: {
//                     body: function(trees) {
//                         for (let i = 0; i < trees.length; i++) {
//                             Tree.find({_id: trees[i]._id})
//                                 .then(tree => {
//                                     leavesToAdd += tree.leaves;
//                                 })
//                         }
//                         return leavesToAdd
//                     },
//                     args: [$trees],
//                     lang: "js"
//                 }
//             }
//         }
//     }])
// }
