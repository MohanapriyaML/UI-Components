import { ReactNode } from "react";

export type EcBreadcrumbsProps = {
    ariaLabel?: string;
    separator: string; 
    children: React.ReactNode;
    // breadcrumbs: breadcrumProps[]; 
};

// export type breadcrumProps =  {
//     id:string,
//     name:string
// }