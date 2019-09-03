var radioGroup = new Radia('#radio-group', {
    title: "Please select your gender:",
    choices: [
        {
            label: "Male",
            onClick: () => {console.log("Selected Male.")}
        },
        {
            label: "Female",
            onClick: () => {console.log("Selected Female.")}
        },
        {
            label: "Other",
            onClick: () => {console.log("Selected Other.")}
        }
    ]
});
