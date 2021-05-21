import axios from 'axios';

const APIURL = "https://randomuser.me/api/?page=3&results=10&seed=abc";

const Search = () => {
  return axios.get(APIURL);
}

export default Search;

//  search the Giphy API for search query
// export default {
//   search: function() {
//     return new Promise((resolve, reject) => {
//       axios
//       .get("https://randomuser.me/api/?nat=fr&results=20&inc=picture,name,dob,email"
//     ).then(res => {
//       const employees = res.data;
//       const results = employees.map(employee => {
//         return {
//           name: employee.name,
//           picture: employee.picture,
//           dob: employee.dob,
//           email: employee.email
//         };
//       });
//       resolve(results);
//     })
//     .catch(err => reject(err));
//   });
// }};
