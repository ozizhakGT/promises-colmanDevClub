// TODO: Guess what happened here
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// Promise.resolve("D").then((v) => console.log(v));
// console.log("E");

// TODO: ASYNC / AWAIT
// const log = async () => {
//  console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");
// await Promise.resolve("D").then((v) => console.log(v));
// console.log("E");
// }
//
// log()

// TODO: CALLBACKS HELL 👺

// const errorResponse = () => {
//     console.error("cannot get user details");
// }
//
// const getUserDetailsCb = (getUserAddress) => {
//     // for example took from localStorage
//     const user = {id: 1, name: "Oz"}
//     const address = "Yael Rom 14, Petah-Tiqwa";
//
//     // return
//
//     return {
//         ...user,
//         address: "Yael Rom 14, Petah-Tiqwa",
//     }
// }
//
// const getDetails = (userDetailsCb, errorResponse) => {
//     const details = userDetailsCb(userDetailsCb);
//
//     if (details) {
//         console.log(details)
//     } else {
//         errorResponse()
//     }
// }
//
// getDetails(getUserDetailsCb, errorResponse)

// TODO: PROMISES CHANGING

// const p = new Promise((resolve, reject) => {
//     const userId = 1
//
//     if (userId) {
//         resolve(userId);
//     } else {
//         reject("cannot get user details");
//     }
// })
//
// p.then(userId => {
//     return {id: userId, name: "Oz"};
// }).then(user => {
//    const address = "Yael Rom 14, Petah-Tiqwa"
//     console.log({ ...user, address })
// }).catch(err => console.error(err))

// TODO: API Req

// const getAPI = async () => {
//     fetch("/posts2.json")
//         .then(res => res.json())
//         .then(res2 => console.log(res2))
//         .catch(err => console.error("some error: ", err ))
//         .finally(() => console.log("promise finished"));



    // const res = await fetch("/posts.json");
    // const posts = await res.json()
    // console.log("promise finished")

    // console.log(posts)
// }
// getAPI();