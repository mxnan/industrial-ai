// constants.ts

type SubMenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  title: string;
  items: SubMenuItem[];
};

type SolutionLinks = {
  sections: MenuSection[];
};

export const solutionLinks: SolutionLinks = {
  sections: [
    {
      title: "By Department",
      items: [
        { label: "All solutions", href: "/solutions" },
        { label: "Inside Sales", href: "/solutions/inside-sales" },
        {
          label: "Inventory and Operations",
          href: "/solutions/inventory-operations",
        },
        {
          label: "Environmental Compliance",
          href: "/solutions/environmental-compliance",
        },
        { label: "ERP Data Entry", href: "/solutions/erp-data-entry" },
      ],
    },
    {
      title: "By Workflow",
      items: [
        { label: "Quoting", href: "/workflows/quoting" },
        { label: "Pricing", href: "/workflows/pricing" },
        {
          label: "Product Recommendations",
          href: "/workflows/product-recommendations",
        },
        { label: "Materials Planning", href: "/workflows/materials-planning" },
        {
          label: "Production Scheduling",
          href: "/workflows/production-scheduling",
        },
        {
          label: "Environmental Compliance",
          href: "/workflows/environmental-compliance",
        },
      ],
    },
  ],
};

// solution/NavLinks