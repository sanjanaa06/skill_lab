//export default function page() {
  //return
    //<div>hello</div>

  //} 
  
// import Image from "next/image"
// import img from './next.jpg'
// import Link from "next/link"
// export default function page() {
//   let name = "sanjana"//js code declaring a variable
//   return (
//     <div>{`hello ${name}`}
//       <Image src={img} alt="Next logo" />
//       <Link href="/about">about page</Link>
//       </div>

//   )
// }

//  import Image from "next/image"
//  import img from './next.jpg'
//  import Link from "next/link"
//  export function UserData({name,role}) {
//     return (
//     <div>
//      <h3>{name}</h3>
//      <h2>{role}</h2>
//     </div>
//     )
//  }


//  export default function page() {
//   return (
//     <div>
//       <UserData name="sanjana" role="software engineer"/>
//       <UserData name="sahana" role="developer"/>
//       <UserData name="prajna" role="tester"/>
//          </div>
//   )
// }



//   import Image from "next/image"
//   import img from './next.jpg'
//   import Link from "next/link"
//   export function UserData({name,role}) {
//      return (
//       <div style={{border:"1px solid blue",backgroundColor:"lightblue",margin:"10px",padding:"10px"}}>
//         <h3 style={{color:"darkblue",fontFamily:"Arial, sans-serif"}}>{name}</h3>
//      <h2>{role}</h2>
//      <Image src={img} alt="Next logo" />
//      <button style={{backgroundColor:"white",color:"black"}}>click me</button>
//     </div>
//     )
//     }


//   export default function page() {
//    return (
//      <div style={{color:"black",justifyContent:"center",alignItems:"center",height:"100vh",cursor:"pointer",border:"1px solid red"}}>
//        <UserData name="sanjana" role="software engineer"/>
//       <UserData name="sahana" role="developer"/>
//       <UserData name="prajna" role="tester"/>
//          </div>
//    )
//  }


// export function Header({title}) {
//     return(
//         <div>
//          {title}
//         </div>
      
//     )
//   }

//   export default function page() {
//     return(
//       <div>
//         <Header title="Dashboard"/>
//       </div>

//     )
//   }

// export function Header({name,age}) {
//     return(
//         <div>Hello  {name} ,you are {age} old.
//         </div>
      
//     )
//   }

//   export default function page() {
//     return(
//       <div>
//         <Header name="John" age={25}/>
//       </div>

//     )
//   }


// export function PriceTag({Price,currency}) {
//     return(
//         <div>
//           {currency}
//           {Price}
//         </div>
      
//     )
//   }

//   export default function page() {
//     return(
//       <div>
//         <PriceTag Price={100} currency="USD" />
//       </div>

//     )
//   }

// export function Header({isLoggedIn}) {
//       if (isLoggedIn) {
//         return<h1>Welcome Back</h1>
//       }else{
//         return<h1>Please Log In</h1>
//       }
//   }
//    export default function page() {
//        return(
//       <div>
//         <Header isLoggedIn={true}/>
//       </div>

//    )
//  }


// export function Button({label,onClick}) {
//       return(
// <div>
// <button onClick={onClick}>{label}</button>
// </div>
//       )
//     }

//    export default function page() {
//        return(
//       <div>
//         <Button onClick="Button Clicked"/>
//       </div>

//    )
//  }


export function BookCard({ title, author }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "260px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}>
      <p style={{ color: "#2c3e50", fontWeight: "bold" }}>
        Title: {title}
      </p>
      <p style={{ color: "#555" }}>
        Author: {author}
      </p>
    </div>
  )
}
import React from "react";
export default function Page() {

  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ];

  return (
    <div style={{
      backgroundColor: "#e6f0ff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <h1 style={{ color: "#1a237e" }}>Book List</h1>

      <div style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>

    </div>
  )
}
