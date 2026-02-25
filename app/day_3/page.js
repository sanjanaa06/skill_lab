// "use client"
// import {useState} from "react";

// export default function page(){
//     const [color,setColor]=useState('green');
    
// return(
//     <div style={{backgroundColor:color,padding:"20px"}}>
//         <button onClick={() => setColor("yellow")}>
//           like:count
//         </button>
//     </div>
// )
//}

// "use client"
// import { useState } from "react";

// export default function Page() {

//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => setCount(count + 1)}>
//         Like: {count}
//       </button>
//     </div>
//   )
// }

// "use client"
// import { useState } from 'react';

//  export default function Page() {
//     const [name, setName] = useState("");
//     return(
//         <div>
//             <input 
//             type='text'
//             placeholder='Enter your name' 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />
//             <h2>Hello,{name}</h2>
//         </div>

//     );
//  }


//  "use client"
//  import { useState } from "react";

//  export default function Page() {

//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => setCount(count + 1)}>
//        ❤️ : {count}
//       </button>
//     </div>
//   )
//}

// const [age,setAge] = useState("");
//   const checkAge = () => {
//     if (age>=18){
//       setAge("Adult");
//     } else {
//       setAge("Minor");
//     }
//   };
//   return(
//     <div>
//       <input
//         type="number"
//         placeholder="Enter your age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <button onClick={checkAge}>
//         Check Age
//       </button>
//       <h3>{age}</h3>
//     </div>
// )
//}



// export default function Page() {
//   return (            
//     <div className="grid h-screen place-content-center bg-yellow-500">

//       <h1 className="text-4xl font-bold text-blue-800 mb-6">
//         hello
//       </h1>

//       <div className="w-80 h-80 bg-[url('/images/dog.jpg')] bg-cover bg-center rounded-lg">

//         <button className="duration-300 ease-in bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
//           Button A
//         </button>

//       </div>

//     </div>
//   )
// }


// export default function Page() {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
      
//       <img
//         src="https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg"
//         alt="Mountain"
//         className="w-96 h-64 object-cover rounded-xl shadow-2xl"
//       />

//     </div>
//   );
// }


// export default function Page() {
//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-200">
      
//       <div className="w-100 h-100 bg-[url('https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg')] bg-cover rounded-lg shadow-2xl">
//       </div>
//       <div className="shadow-md ..."></div>
//       <div className="bg-[url('https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg')] bg-local ...">
// </div>
//       <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</button>

//     </div>
//   );
// }

// "use client"
// import { useState } from "react";

// export default function Toggle() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide" : "Show"}
//       </button>

//       {show && <p>Welcome Participants!</p>}
//     </div>
//   );
// }

// "use client"
// import { useState } from "react";

// export default function Toggle() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "OFF" : "ON"}
//       </button>

//       {/*{show && <p>Welcome Participants!</p>}*/}
//     </div>
//   );
// }

// "use client"
// import { useState } from "react";

// export default function InputExample() {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <p>character count: {text.length}</p>
//       <button onClick={() => setText("")}>Clear</button>
//     </div>
//   );
// }

// "use client"
// import { useState } from "react";

// export default function PasswordToggle() {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div>
//       <h2>Password Show / Hide</h2>

//       <input
//         type={showPassword ? "text" : "password"}
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter password"
//       />

//       <button onClick={() => setShowPassword(!showPassword)}>
//         {showPassword ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// }

"use client"
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

