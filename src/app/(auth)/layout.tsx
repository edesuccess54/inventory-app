
const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="lg:max-w-[900px] h-full flex items-center mx-auto p-5">
        {children}
    </div>
  )
}

export default AuthLayout