import { NavLink } from "react-router-dom"
import { Navbar } from "../Navbar"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const Sidebar = () => {

    const getStyles = ({ isActive }) => {
        return isActive ? 'SidebarNavLinkActive' : 'SidebarNavLink'
    }
    return (
        <div className="Sidebar">
            <NavLink to='/' className={getStyles} ><HomeOutlinedIcon></HomeOutlinedIcon><span>Home</span></NavLink>
            <NavLink to='/archive' className={getStyles}><ArchiveOutlinedIcon /> <span>Archive</span></NavLink>
            <NavLink to='/important' className={getStyles}><LabelImportantOutlinedIcon /><span>Important</span></NavLink>
            <NavLink to='/trash' className={getStyles}><DeleteOutlineOutlinedIcon /><span>Trash</span></NavLink>
        </div>
    )
}