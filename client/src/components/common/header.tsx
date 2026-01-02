import type React from "react";
import { Link } from "react-router";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";

const Header: React.FC = () => {
    return (
        <nav className="flex items-center justify-between layout py-10">
            <Link to="/" className="text-2xl font-extrabold">Dashboard</Link>
            <div className="space-x-4">
                <Button>Login</Button>
                <Button variant="outline">Register</Button>
                
                {/* <DropdownMenu>
                    <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>
        </nav>
    )
}

export default Header;