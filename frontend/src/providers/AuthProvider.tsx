import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { Loader } from "lucide-react";

const updateApiToken = (token:string | null) => {

    if(token) {
        // nếu token có thì thêm header Authorization với giá trị Bearer để gửi khi gọi kèm Api
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        //xóa header
        delete axiosInstance.defaults.headers.common[`Authorization`];
    }
}

const AuthProvider = ({children}: {children:React.ReactNode}) => {

    const {getToken} = useAuth();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                console.log("Token:", token);
                updateApiToken(token)

                
            } catch(error:any) {
                updateApiToken(null);
                console.log("error in auth provider", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                    console.log("Loading state:", loading);
                  }, 2000);
            
            }
        }
        // hàm bất đồng bộ để lấy token thông qua getToken() từ useAuth() thư viện clerk
        initAuth();
    }, [getToken]);

    if(loading) return (
        <div className="h-screen w-full flex items-center justify-center">
            <Loader className="w-8 h-8 text-emerald-500 animate-spin"/>
        </div>
    )
    return (
        <>{children}</>
    )
}

export default AuthProvider;