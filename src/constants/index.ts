export const MENU_ITEMS = {
    section1: [
        {
            name: 'House Salad',
            correct: true,
            message: ['A salad is always a great choice! You may want to ask for dressing on the side and be careful not to use too much.']
        },
        {
            name: 'Bread Sticks',
            correct: true,
            message: [
                `If you want to have a breadstick, that's fine as long as you follow the plate method for the rest of your meal.`,
                `Limit it to one breadstick and ask if they have a whole grain option.`,
            ]
        },
        {
            name: 'Garlic Bread',
            correct: true,
            message: [
                `A slice of garlic bread is fine as long as you limit it to one slice and follow the plate method.`,
                `Ask your server if there's a whole grain option for the bread.`,
            ]
        },
        {
            name: 'Provolone Sticks',
            correct: false,
            message: [
                `You should avoid anything that's breaded and fried. Please make a different selection from the list of Starters.`,
            ]
        },
        {
            name: 'Fried Zucchini',
            correct: false,
            message: [
                `While it may seem like you're making a good choice since zucchini is a non-starchy vegetable, you should always avoid anything that's been breaded and fried.`,
                `If you really want zucchini, try asking your server if it's possible to get lightly seasoned zucchini on the side without the breading. Please make a different selection from the list of Starters.`
            ]
        },
    ],

}

export const INSTRUCTIONS = [
    "For this activity, your goal will be to make smart choices when ordering food from a restaurant. By now, we hope you’ve started to get the hang of using the plate method in your day-to-day life. Now we want you to take what you know and apply that to dining out.",
    "The activity is divided into a series of food menus from different restaurants. For each menu, go through each section of the menu and choose one item that you think best adheres to the plate method. You’ll receive a check mark or an X depending on your choice, and you’ll be able to view feedback off to the side.",
    "If you make a poor choice, we’ll give you the chance to go back and choose something different. Then, once each section of the menu has an acceptable choice, you’ll see a message congratulating you on a job well done.",
    "Try your hand at each menu and remember what you’ve learned to use it in your own life. You may be surprised at what you learn! Good luck, and I’ll see you again once you’ve finished!"
]
