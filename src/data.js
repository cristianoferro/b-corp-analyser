import { v4 as uuidv4 } from "uuid";

const corps = () => {
    return [
        {
            company: "Ocean Bottle",
            category_rank: 2,
            global_rank: 25,
            logo: "https://s3.amazonaws.com/blab-impact-published-production/A2smsOO9DKrJTpaFIfxq81JeyhFgtlg0",
            description: "Ocean Bottle makes reusable bottles that save our Ocean.",
            website:"https://oceanbottle.co/",
            about:"Ocean Bottle enables anyone who gives a damn about our Ocean the opportunity to turn the tap off Ocean Plastic. Each bottle is smart chip activated and funds collection of ocean-bound plastic, whilst setting up recycling infrastructure in coastal communities with high levels of plastic pollution around the world. Plastic collectors are able to exchange plastic waste for money or digital tokens via blockchain technology to spend on tuition, tech goods, health care and micro-finance. To date, we've funded the collection of over 1 Million kilograms of plastic from entering the Ocean.",
            certified_since: "December, 2020",
            Location: "London, London, United Kingdom",
            sector: "Wholesale/Retail",
            awards:["London Business Awards 2020",
                "Green Product Award 2020", 
                "Forbes 30 under 30 Europe 2020", 
                "Red Dot Design Award 2020" ],
            b_corp: true,
            score: 120,
            left_to_b_corp:0,
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