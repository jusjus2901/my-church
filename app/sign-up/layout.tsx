export const metadata = {
    title: "sign-up",
    description: "UPC Church"
}

const loginLayoutPage = ({
     children 
    }: {
        children: React.ReactNode;
    }) => {
        return(
            <div>
                { children }
            </div>
        );
    };

export default loginLayoutPage;