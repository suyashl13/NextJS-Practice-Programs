import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import AuthHeader from "./AuthHeader";

export default async function Header() {
 

  return (
    <Navbar className="shadow">
      <NavbarBrand>
        <Link href="/" className="font-semibold text-lg">
          Discuss App
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Input size="sm" />
      </NavbarContent>

      <NavbarContent justify="end">
        <AuthHeader/>
      </NavbarContent>
    </Navbar>
  );
}
