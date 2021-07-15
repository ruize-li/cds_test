// fetch('http://localhost:9000/get-data'
//          , {
//             mode : 'no-cors'
//         })  
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                   } else {
//                       console.log(response.status);
//                     throw new Error('Something went wrong');
//                   }
//             })
//             .then(data => console.log(data))
//             .catch(err => console.log(err))

fetch('localhost:9000/').then(res => console.log(res.json()));