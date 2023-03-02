export interface AuthProps {
    isLogin: boolean;
}

export interface FormValues {
    [key: string]: string;
    email: string;
    password: string;
}