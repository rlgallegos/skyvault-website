import { NavItem } from "./types"

// Questions
export const questions = [
    {
        "question": "Can I try it out?",
        "answer": "Absolutely. The first 30 days are completely free. After that, you'll be prompted to subscribe at $6.99/month. No surprise subscription costs on your card."
    },
    {
        "question": "What is Skyvault?",
        "answer": "Skyvault is an inventory app for small businesses. It tracks inventory, sales, profits, and more."
    },
    {
        "question": "How do you use my information?",
        "answer": "In short, we don't. Your financial information is your own. We never trade, sell, or report any of your information."
    }
]
export const largeQuestions = [
    {
        "question": "How long will it take to set up?",
        "answer": "An excel sheet can be imported in seconds. Just download the template found below and copy-paste the info in. If you don't have an inventory sheet, the app is still designed to make adding items quick."
    },
    {
        "question": "Who is Skyvault for?",
        "answer": "In short, small business owners. Skyvault was made by small business owners, for small business owners. You are busy. Skyvault aims to simplify arguably one of the more frustrating aspects: inventory. Do I have that in stock? How much did it cost? How much should I sell it for? Answers to these should be on-the-go, like you."
    }
]

// Navigation
export const navItems: NavItem[] = [
    {
        id: 1,
        title: 'Gallery',
        path: "gallery"
    },
    {
        id: 2,
        title: 'Q&A',
        path: "qa"
    },
    {
        id: 3,
        title: 'Help',
        path: "help"
    },
    {
        id: 4,
        title: 'Us',
        path: "who-we-are"
    },
    {
        id: 5,
        title: 'Terms',
        path: "terms"
    }
]



// Text
export const disclaimer = "Skyvault's purpose is to help you keep track of inventory, costs, sales, profits, and fees. We aim to be a tool to help you keep track of all the inventory-related tax information. As always, your taxes are your responsiblity. By using Skyvault, the user (you) are releasing releasing Skyvault LLC from any liablity, claims, or costs, present or future, that result from use of the information provided."
export const helpObject = {
    'import': {
        'src': 'videos/import.mp4',
        'list': [
            "1. Download your excel file template (below) and type / copy-paste your inventory there.",
            "(If building your own excel file, be sure it follows the exact format pictured in the app.)",
            '2. In the "Settings" page, tap "Import".',
            '3. Tap Import Excel File.',
            '4. Select the correct excel file (if on an iPhone, this should be in your Files app).'
        ]
    },
    'sale': {
        'src': 'videos/edit-sales.mp4',
        'list': [
            '1. In the "Settings" page, tap on the sale you would like to edit.',
            '2. Edit the sale however you would like.',
            '3. Tap the update button.'
        ]
    },
    'refund': {
        'src': 'videos/process-returns.mp4',
        'list': [
            '1. In the "Settings" page, tap on the sale you would like to process a refund for.',
            '2. In the upper-right corner, tap the return button.',
            '3. Select the quantity of items from the sale to return.',
            '4. Submit refund.'
        ]
    }
}
export const usParagraphs = [
    "Hello fellow small business owner!",
    "I've been running small businesses for years, and understand the challenges of juggling paperwork and number crunching. That's why we created Skyvault. Our goal is to simplify your business life, so you can spend more time doing what you love.",
    "Whether it’s tracking sales, managing finances, or staying on top of taxes, Skyvault has you covered. We’ve designed a user-friendly platform that simplifies many of the tedious tasks associated with tracking inventory / sales. With Skyvault, you can easily generate reports, track expenses, and manage your inventory, all in one place.",
    "Join our growing community of small business owners and experience the difference Skyvault can make in your business."
]


// Paths
const totalScreenshots = 10; // Replace with the desired number of screenshots
export const galleryPaths = Array.from({ length: totalScreenshots }, (_, index) => {
  const screenshotNumber = index + 1;
  return `/images/phone-screenshots/screenshot${screenshotNumber}.png`;
});