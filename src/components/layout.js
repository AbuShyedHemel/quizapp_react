import Nav from "./nav";
import classes from "../style/layout.module.css"


export default function Layout({children}){
    return (
        <>
        <Nav />
        <main className={classes.main}>
            <div className={classes.container}>
                {children}
            </div>
        </main>
        </>
    );
}