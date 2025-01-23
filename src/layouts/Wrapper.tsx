export const Wrapper  = ({ children }: Readonly<{ children?: React.ReactNode }>) => {
    return (
        <div className="min-h-screen relative">
            {children}
        </div>
    );
}