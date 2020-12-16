import { v4 as uuidv4 } from "uuid";

const corps = () => {
    return [
        {
            company: "Ocean Bottle",
            category_rank: 2,
            global_rank: 25,
            logo: "https://s3.amazonaws.com/blab-impact-published-production/A2smsOO9DKrJTpaFIfxq81JeyhFgtlg0",
            description: "Ocean Bottle makes reusable bottles that save our Ocean.",
            b_corp: true,
            score: 120,
            id: uuidv4(),
            active: true,
        },
        {
            company: "Knowledge Unlatched",
            category_rank: 4,
            global_rank: 40,
            logo: "https://s3.amazonaws.com/blab-impact-published-production/IRa9EqksFJgT0gz5SYjt1q6UiQaGR9in",
            description: "Making scholarly content freely accessible to the world.",
            b_corp: true,
            score: 110,
            id: uuidv4(),
            active: false,
        },

    ]
}

export default corps;