import React from 'react'
import { Box, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <Breadcrumb fontWeight="medium" fontSize="sm" >
            <BreadcrumbItem>
                <BreadcrumbLink isCurrentPage as={Link} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/about">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem >
                <BreadcrumbLink as={Link} to="/contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}
export default Navbar