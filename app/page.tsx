// "use client"
// import {useRef,FormEvent} from "react"

// export default function UncontrolledExample() {
//   const inputRef = useRef<HTMLInputElement>(null);
//   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputRef.current) {
//       console.log(inputRef.current.value);
//     }
// };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//      <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded shadow-md w-96"
//       >
//         <input
//           type="text"
//           ref={inputRef}
//           className="w-full p-2 border rounded mb-4"
//           placeholder="Enter name"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//           >
//           Submit
//           </button>
//       </form>
//     </div>
//   );
// }

// "use client"
// import {useState,ChangeEvent,FormEvent} from "react"

// export default function controlledExample() {
//   const [name,setName] = useState<string>("");
//   const [email,setEmail] = useState<string>("");
//   const[password,setPassword] = useState<string>("");
//   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(name,email,password);
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//      <form
//       onSubmit={handleSubmit}
//       className="bg-white p-6 rounded shadow-md w-96"
//       >
//         <input
//           type="text"
//           value={name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter name"
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={handleEmailChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter password"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//           >
//           Submit
//           </button>
//       </form>
//     </div>
//   );
// }

// "use client"
// import {useState,ChangeEvent,FormEvent} from "react"
// interface FormData {
//   name: string;
//   email: string;
//   password: string;
// } 

// export default function LoginPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
//      return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//      <form className="bg-white p-6 rounded shadow-md w-96">
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter name"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full p-2 border rounded mb-4 text-black"
//           placeholder="Enter password"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//           >
//           Submit
//           </button>
//       </form>
//     </div>
//   );
// }
 

// "use client";
// import { useState,ChangeEvent, FormEvent } from "react";
//  interface FormData {
//     name: string;
//     email: string;
//     password: string;
//  }
//  //to validate our form
//     interface FormErrors{
//       name?: string;
//       email?: string;
//       password?: string;
//     }

// export default function LoginPage() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [loading, setLoading] = useState<boolean>(false);
//   const[apiError, setApiError] = useState<string | null>(null);
//   const[success, setSuccess] = useState<boolean>(false);

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const validate =() :FormErrors => {
//       const newErrors: FormErrors = {};
//       if (!formData.name) {
//         newErrors.name = "Name is required";
//       }
//       if (!formData.email) {
//         newErrors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newErrors.email = "Email is invalid";
//       }
//       if (!formData.password) {
//         newErrors.password = "Password is required";
//       } else if (formData.password.length < 6) {
//         newErrors.password = "Password must be at least 6 characters";
//       }
//       return newErrors;
//     };
        
//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       const validationErrors = validate();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       } 
//       try{
//         setLoading(true);
//         setApiError(null);
//         const response=await fetch("https://jsonplaceholder.typicode.com/posts", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(formData)
//         });
//         if (!response.ok) {
//           throw new Error("Failed to login");
//         }
//         const data = await response.json();
//         console.log("API Response:", data);
//         setSuccess(true);
//       }
//       catch (error) {
//        if (error instanceof Error) {
//         setApiError(error.message);
//        }
//       } finally {
//         setLoading(false);
//        }
//     };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <form 
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md w-96" >
//           <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            

//               <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={`w-full p-2 border rounded mb-4 text-black ${errors.name ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter name"
//             />
//             {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name}</p>}

//             <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full p-2 border rounded mt-4 mb-4 text-black ${errors.email ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter email"
//             />
//             {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

//             <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={`w-full p-2 border rounded mt-4 mb-4 text-black ${errors.password ? "border-red-500" : "border-gray-300"}`}
//             placeholder="Enter password"
//             />
//             {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

//             {apiError &&( <p className="text-red-500 text-sm mb-4">{apiError}</p>
//             )}
//             {success && (
//               <p className="text-green-500 text-sm mb-4">Login successful!</p>
//             )}

//               <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                 Submit
//                 </button>

              
//         </form>
//     </div>
//     );
// }


// "use client";  
// import {useForm} from "react-hook-form";

// interface LoginFormInputs {
//   name: string;
//   email: string;
//   password: string;
// }

// export default function Home() {
//   const { 
//     register,
//     handleSubmit,
//     formState: { errors ,isSubmitting },
//     } = useForm<LoginFormInputs>();

//     const onSubmit = (data: LoginFormInputs) => {
//       console.log("Form Data:", data) ;
//     };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
//           <h2 className="text-2xl font-bold mb-4">Login Form</h2>

//           <input
//             type="text"
//             placeholder="Enter name"
//             {...register("name", { required: "Name is required" })}
//             className="w-full p-2 border rounded mb-4"
//             />

//             {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

//             <input
//             type="email"
//             placeholder="Enter email"
//             {...register("email", { required: "Email is required", 
//             pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" } })}
//             className="w-full p-2 border rounded mb-4"
//             />

//             {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}
        
//             <input
//             type="password"
//             placeholder="Enter password"
//             {...register("password", { required: "Password is required", 
//             minLength: { value: 6, message: "Password must be at least 6 characters" } })}
//             className="w-full p-2 border rounded mb-4"
//             />

//             {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

//             <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white p-2 rounded">
//               {isSubmitting ? "Submitting..." : "Submit"}
//               </button>
//         </form>
//     </div>
//   );
// } 


// "use client";

// import { useForm } from "react-hook-form";

// interface LoginFormInputs {
//   name: string;
//   email: string;
//   password: string;
// }

// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<LoginFormInputs>();

//   const onSubmit = async (data: LoginFormInputs) => {
//     console.log("Form Data:", data);
//     alert("Form Submitted Successfully ✅");

//     reset(); // clears the form after submit
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-6 rounded shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Login Form
//         </h2>

//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Enter name"
//           {...register("name", {
//             required: "Name is required",
//           })}
//           className={`w-full p-2 border rounded mb-2 text-black ${
//             errors.name ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm mb-3">
//             {errors.name.message}
//           </p>
//         )}

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Enter email"
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Email is invalid",
//             },
//           })}
//           className={`w-full p-2 border rounded mb-2 text-black ${
//             errors.email ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mb-3">
//             {errors.email.message}
//           </p>
//         )}

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Enter password"
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters",
//             },
//           })}
//           className={`w-full p-2 border rounded mb-2 text-black ${
//             errors.password ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm mb-3">
//             {errors.password.message}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-500 text-white p-2 rounded mt-2"
//         >
//           {isSubmitting ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";
import {useEffect,useState} from "react";
import { set } from "react-hook-form";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="min-h-screen flex items-center justify-center">
        <p className=" font-semibold text-red-500">{error}</p>
        </div>
      );
    }
  
    if (users.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center">
        <p >No users found.</p>
        </div>
      );
    }
    return (
      <div className="min-h-screen  bg-gray-100">
        <div className="text-2xl font-bold mb-4 text-center ">User List</div>
        <div className="grid gap-4 max-w-4xl mx-auto">
          {users.map(user => (  
            <div key={user.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.username}</p>
              <p className="text-sm text-gray-600">{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
