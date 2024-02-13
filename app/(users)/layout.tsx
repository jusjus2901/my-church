import { Navbar } from "@/app/(users)/_components/navbar";
import { Footer } from "@/app/(users)/_components/footer"


const ChurchLayout = ({ 
    children
}: {
    children: React.ReactNode;
}) => { 
    return(
        <div className="">
            <Navbar/>
                <main className="">
                    {children}
                </main>
            <Footer/>
        </div>
    );
};


export default ChurchLayout;