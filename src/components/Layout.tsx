import AddTodo from "./AddTodo";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="px-10">
            <Navbar />
            <div className="flex flex-col items-center justify-start h-screen mx-auto mt-12">
                <main>{children}</main>
                <div className="mt-12">
                    <AddTodo />
                </div>
            </div>
        </div>
    );
};