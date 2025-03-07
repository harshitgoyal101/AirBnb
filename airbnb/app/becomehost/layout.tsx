
export default function NoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div lang="en">
            <body>
                {children}
            </body>
        </div>
    );
}
