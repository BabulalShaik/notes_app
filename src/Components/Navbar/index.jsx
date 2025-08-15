import logo from "../../assets/logo.png"
export const Navbar = () => {
    return (
        <>
            <header>
                <div className="NavbarHead">
                    <img src={logo} alt="Logo" style={{ height: "80px", width: "80px" }} />
                    <h1 >Noteit</h1>
                </div>
            </header>
        </>
    )
}