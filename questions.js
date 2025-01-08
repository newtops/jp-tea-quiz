const quizQuestions = [
    {
        question: "What type of tea is considered the most prestigious in Japan?",
        answers: [
            { text: "Matcha", correct: true },
            { text: "Hojicha", correct: false },
            { text: "Bancha", correct: false },
            { text: "Genmaicha", correct: false }
        ],
        explanation: "Matcha is considered the most prestigious tea in Japan. It's used in traditional tea ceremonies and is made from specially grown and processed green tea leaves that are stone-ground into a fine powder."
    },
    {
        question: "Which Japanese tea is roasted over high heat?",
        answers: [
            { text: "Sencha", correct: false },
            { text: "Hojicha", correct: true },
            { text: "Gyokuro", correct: false },
            { text: "Kabusecha", correct: false }
        ],
        explanation: "Hojicha is unique among Japanese teas because it's roasted over high heat, giving it a distinctive reddish-brown color and toasted flavor profile."
    },
    // Add more questions here with the same structure
    {
        question: "What Japanese tea is grown in the shade for several weeks before harvesting?",
        answers: [
            { text: "Gyokuro", correct: true },
            { text: "Sencha", correct: false },
            { text: "Bancha", correct: false },
            { text: "Kukicha", correct: false }
        ],
        explanation: "Gyokuro is a high-grade green tea that is grown in the shade for about 3-4 weeks before harvesting. This process increases chlorophyll and amino acid content, particularly L-theanine, resulting in a sweeter, more umami-rich flavor."
    },
    {
        question: "Which Japanese tea contains roasted brown rice mixed with green tea leaves?",
        answers: [
            { text: "Genmaicha", correct: true },
            { text: "Sencha", correct: false },
            { text: "Bancha", correct: false },
            { text: "Gyokuro", correct: false }
        ],
        explanation: "Genmaicha combines green tea leaves with roasted brown rice. Originally consumed by poor Japanese people to stretch their tea supply, it's now enjoyed by all and valued for its unique toasted flavor and aroma."
    },
    {
        question: "What is the most commonly consumed green tea in Japan?",
        answers: [
            { text: "Sencha", correct: true },
            { text: "Matcha", correct: false },
            { text: "Hojicha", correct: false },
            { text: "Gyokuro", correct: false }
        ],
        explanation: "Sencha is the most popular green tea in Japan, accounting for about 80% of tea production. It's known for its balanced flavor and is typically the tea served in restaurants and homes."
    },
    {
        question: "Which Japanese tea is made primarily from tea stems and stalks?",
        answers: [
            { text: "Kukicha", correct: true },
            { text: "Bancha", correct: false },
            { text: "Sencha", correct: false },
            { text: "Hojicha", correct: false }
        ],
        explanation: "Kukicha, also known as twig tea, is unique because it's made mostly from stems, stalks, and twigs of the tea plant. It has a mild, slightly sweet flavor and lower caffeine content than leaf-based teas."
    },
    {
        question: "What tea is considered the lowest grade of Japanese green tea?",
        answers: [
            { text: "Bancha", correct: true },
            { text: "Sencha", correct: false },
            { text: "Kukicha", correct: false },
            { text: "Genmaicha", correct: false }
        ],
        explanation: "Bancha is made from mature leaves harvested after the prime tea leaves are picked. While considered lower grade, it's still nutritious and popular for everyday drinking due to its affordability."
    },
    {
        question: "Which Japanese tea is partially shade-grown (about a week)?",
        answers: [
            { text: "Kabusecha", correct: true },
            { text: "Sencha", correct: false },
            { text: "Hojicha", correct: false },
            { text: "Bancha", correct: false }
        ],
        explanation: "Kabusecha is shade-grown for about a week before harvest, placing it between sencha and gyokuro in terms of cultivation method. This results in a flavor profile that's more complex than sencha but less intense than gyokuro."
    },
    {
        question: "What temperature water is typically used to brew gyokuro?",
        answers: [
            { text: "50-60°C (122-140°F)", correct: true },
            { text: "70-80°C (158-176°F)", correct: false },
            { text: "90-100°C (194-212°F)", correct: false },
            { text: "65-75°C (149-167°F)", correct: false }
        ],
        explanation: "Gyokuro is best brewed with cooler water, typically around 50-60°C (122-140°F). This lower temperature helps extract the tea's sweet and umami flavors while preventing bitterness."
    },
    {
        question: "Which season is considered the best for harvesting premium Japanese green tea?",
        answers: [
            { text: "Spring", correct: true },
            { text: "Summer", correct: false },
            { text: "Autumn", correct: false },
            { text: "Winter", correct: false }
        ],
        explanation: "Spring, particularly early to mid-May, is considered the prime harvesting season for Japanese green tea. The first harvest (ichiban-cha) produces the highest quality leaves with the best flavor and nutritional content."
    }
]; 