exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const fetchProjectData = await graphql(`
        {
  allClientsDataCsv {
    edges {
      node {
        id
        projectDisplayName
        clientLogo
        clientName
        city
        state
        countryCode
        tagline
        projectCategory
        googlePlayLink
        appStoreLink
        demoVideoLink_1
        demoVideoLink_2
        demoVideoLink_3
        demoVideoLink_4
        demoVideoLink_5
        problem_1
        problem_2
        problem_3
        problem_4
        problem_5
        problem_6
        problem_7
        problem_8
        problem_9
        problem_10
        solution_1
        solution_2
        solution_3
        solution_4
        solution_5
        solution_6
        solution_7
        solution_8
        solution_9
        solution_10
        frontendTech_1
        frontendTech_2
        frontendTech_3
        frontendTech_4
        frontendTech_5
        backendTech_1
        backendTech_2
        backendTech_3
        backendTech_4
        backendTech_5
        testimonialPersonPhoto_1
        testimonialPersonName_1
        testimonialPersonDesignation_1
        testimonialQuote_1
        testimonialPersonPhoto_2
        testimonialPersonName_2
        testimonialPersonDesignation_2
        testimonialQuote_2
        testimonialPersonPhoto_3
        testimonialPersonName_3
        testimonialPersonDesignation_3
        testimonialQuote_3
        launchWebsite
      }
    }
  }
}
    `)

    if(fetchProjectData.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query`);
        return
    }

    console.log(fetchProjectData);

    fetchProjectData && fetchProjectData.data && fetchProjectData.data.allClientsDataCsv && fetchProjectData.data.allClientsDataCsv.edges && Array.isArray(fetchProjectData.data.allClientsDataCsv.edges) && fetchProjectData.data.allClientsDataCsv.edges.length > 0 && fetchProjectData.data.allClientsDataCsv.edges.forEach(({node}) => {
        createPage({
            // route path
            path: `/${node.clientName.split(' ').join('-')}_${node.projectDisplayName.split(' ').join('-')}`,
            // component template to be used for all project details routes
            component: require.resolve(`./src/templates/ProjectDetails.tsx`),
            // passing additional data as a prop to the template
            context: { node },
        });
    })
}
