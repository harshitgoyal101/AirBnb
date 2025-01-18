import { cn } from "@/lib/utils"

export const Card = ({
    children,
    className
}: {
    children:React.ReactNode
    className?: string,
}) => {
    return (
        <div className={cn('rounded-xl shadow-darkText', className)}
          style={{"boxShadow": "0 6px 20px rgba(0,0,0,0.2)"}}>
            {children}
        </div>
    );
}