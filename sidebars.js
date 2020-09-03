module.exports = {
  docs: [
    {
      id: "utm",
      type: "doc",
    },
    {
      label: "Getting started",
      type: "category",
      items: ["guide/greeting"],
    },
    {
      label: "Docusaurus",
      type: "category",
      items: [
        "api/doc1",
        "api/doc2",
        "api/doc3",
        {
          label: "Other",
          type: "category",
          items: ["guide/mdx"],
        },
      ],
    },
    {
      label: "Features",
      type: "category",
      items: ["guide/part1", "guide/mdx"],
    },
  ].filter(Boolean),
}
