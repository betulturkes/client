import React, {useState} from 'react'

const Auth = () => {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({userName: "", password: "",email: ""});

    const onChangeFunc = (e) =>{
        setAuthData({...authData, [e.target.name]: e.target.value})
    };

    console.log("authData", authData);

    return (
        <div className = 'w-full h-screen bg-gray-200 flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 z-50'>
            <div className = 'w-1/3 bg-white padding p-3'>
                <h1 className ="text-2xl text-indigo-700 font-bold">
                    {signUp ? "Kayıt ol" : "Giriş Yap"}
                </h1>
                <div className = 'flex flex-col space-y-2 my-4'>
                    {signUp && <input value={authData.userName} name="userName" onChange ={onChangeFunc} type="text" placeholder="Username" className="input-style"/>}
                    <input value={authData.email} name="email" onChange ={onChangeFunc} type="text" placeholder="Email" className="input-style"/>
                    <input value={authData.password} name="password" onChange ={onChangeFunc} type="text" placeholder="Password" className="input-style"/>
                </div>
                <div className = "text-red-500 text-xs cursor-pointer mb-4">
                    {signUp ? <span onClick = {() => setSignUp(false)}>Daha önce giriş yaptınız mı?</span> : <span onClick = {() => setSignUp(true)}>Kayıt olmak için tıklayınız</span>}
                </div>
                <div className="cursor-pointer hover:bg-indigo-800 w-full p-2 text-center bg-indigo-600 text-white rounded-md">
                    {signUp ? "Kayıt Ol" : "Giriş Yap"}
                </div>
            </div>
        </div>
    )
}

export default Auth