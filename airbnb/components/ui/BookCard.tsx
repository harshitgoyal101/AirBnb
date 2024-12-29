export const BookCard = ({
    children,
    className
}: {
    children:React.ReactNode
    className?: string,
}) => {
    return (
        <div className={`rounded-xl shadow-darkText ${className}`}
          style={{"boxShadow": "0 6px 20px rgba(0,0,0,0.2)"}}>
            {children}
        </div>
    );
}