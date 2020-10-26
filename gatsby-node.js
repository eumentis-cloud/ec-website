exports.createPages = ({ actions }) => {
    const { createPage } = actions
    // pull in or use whatever data
    const dogData = [
        {
            name: "Fido",
            breed: "Sheltie",
        },
        {
            name: "Sparky",
            breed: "Corgi",
        },
    ]

    dogData.forEach(dog => {
        createPage({
            path: `/${dog.name}`,
            component: require.resolve(`./src/templates/ProjectDetails.tsx`),
            context: { dog },
        })
    })

}
