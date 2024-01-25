import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer"

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