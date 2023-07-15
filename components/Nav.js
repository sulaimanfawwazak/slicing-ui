import NavItem from "./NavItem";

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "flex justify-center space-x-10 ",
        vertical: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={`flex ${pickedDir}`}>
            <NavItem scheme={scheme} href="#profile">Profile</NavItem>
            <NavItem scheme={scheme} href="#skills">Skills</NavItem>
            <NavItem scheme={scheme} href="#projects">Projects</NavItem>
            <NavItem scheme={scheme} href="#contacts">Contacts</NavItem>
        </ul>
    );
}