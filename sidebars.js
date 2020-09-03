module.exports = {
  docs: [
    {
      id: "utm",
      type: "doc",
    },
    {
      id: "troubleshoot",
      type: "doc",
    },
    {
      id: "merchant-onboard-user-guide",
      type: "doc",
    },
    {
      id: "integration-api",
      type: "doc",
    },
    {
      label: "Demo Category",
      type: "category",
      items: [
        "category/integration-api",
        "category/merchant-onboard-user-guide",
        "category/troubleshoot",
      ],
    },
    // {
    //   label: "Docusaurus",
    //   type: "category",
    //   items: [
    //     "api/doc1",
    //     "api/doc2",
    //     "api/doc3",
    //     {
    //       label: "Other",
    //       type: "category",
    //       items: ["troubleshot/mdx"],
    //     },
    //   ],
    // },
    // {
    //   label: "Features",
    //   type: "category",
    //   items: ["troubleshot/part1", "troubleshot/mdx"],
    // },
  ].filter(Boolean),
}
