// --- RECOVERY INSIGHTS/FACTS DATA ---
export const RECOVERY_FACTS = [
    "The Serenity Prayer was popularized by AA, but was originally written by theologian Reinhold Niebuhr.",
    "AA's Big Book was first published in 1939 and its core text (first 164 pages) remains unchanged.",
    "The 12 Traditions were developed to guide AA groups in their relationships with the world, not just to guide the individual.",
    "The motto 'Just for Today' is commonly used across many 12-Step fellowships to emphasize living in the present moment.",
    "The first Narcotics Anonymous meeting was held in Southern California in 1953.",
    "The concept of 'Higher Power' is intentionally non-religious and can be defined as 'God as we understood Him'.",
    "The opposite of addiction is often cited as connection, emphasizing the importance of fellowship.",
    "The 'HALT' acronym (Hungry, Angry, Lonely, Tired) is a fundamental tool for recognizing relapse triggers.",
    "The Step 4 inventory is 'searching and fearless' because admitting the 'exact nature' of wrongs releases their power.",
    "CA (Cocaine Anonymous) uses the same 12 Steps and 12 Traditions as AA.",
];

// --- Literature Data (Truncated for brevity) ---
export const literatureData = {
    aa_big_book: {
        title: "The Big Book (Alcoholics Anonymous)",
        pdfLink: "https://www.aa.org/sites/default/files/2021-11/en_bigbook_personalstories_1st.pdf",
        chapters: [
            { title: "The Doctor's Opinion", content: `WE of Alcoholics Anonymous believe that the reader will be interested in the medical estimate of the plan of recovery described in this book. Convinced medical men...` },
            { title: "Chapter 1: Bill's Story", content: `WAR FEVER ran high in the New England town to which we new, young officers from Plattsburg were assigned, and we were flattered...` },
            { title: "Chapter 5: How It Works", content: `RARELY HAVE we seen a person fail who has thoroughly followed our path. Those who do not recover are people who cannot or will not completely give themselves to this simple program...` },
        ]
    },
    na_basic_text: {
        title: "The Basic Text (Narcotics Anonymous)",
        pdfLink: "https://www.na.org/admin/include/spaw2/uploads/pdf/litfiles/us_english/Book/Sixth%20Edition%20Basic%20Text.pdf",
        chapters: [
            { title: "Who is an Addict?", content: `Most of us do not have to think twice about this question. We know! Our whole life and thinking was centered in drugs in one form or another...` },
            { title: "What is the Narcotics Anonymous Program?", content: `N.A. is a nonprofit fellowship or society of men and women for whom drugs had become a major problem. We are recovering addicts who meet regularly to help each other stay clean...` },
        ]
    }
};

// --- Journal Templates Data ---
export const journalTemplates = [
    { id: '', name: 'Select a Template...' },
    { id: 'gratitude', name: '3-Part Gratitude Check', template: 'Today I am grateful for:\n1. (Person/Relationship)\n2. (Experience/Event)\n3. (Small Detail)\n\nHow did this feeling of gratitude influence my day?' },
    { id: 'halt', name: 'The H.A.L.T. Check', template: 'Before reacting or craving, I will check:\n\n**H**ungry? (Yes/No): \n**A**ngry? (Yes/No): \n**L**onely? (Yes/No): \n**T**ired? (Yes/No): \n\nWhat action did I take to meet my true need?' },
    { id: 'resentment', name: 'Resentment Filter', template: 'Today I felt resentful toward: (Person/Situation)\n\nWhat did they do? \n\nWhat part of my self-esteem (pride, security, ambition) did this threaten? \n\nWhat is my part in this situation?' },
    { id: 'step_10', name: 'Step 10 Spot Check', template: 'Where was I wrong today? (Small admissions of fault or mistake)\n\nWas I mindful of others?\n\nDid I practice honesty in a difficult situation?\n\nIf I was wrong, did I promptly admit it?' },
];

// --- Coping Cards Data ---
export const copingStrategies = [
    { title: "Deep Breathing", description: "Inhale for 4s, hold for 7s, exhale for 8s. Repeat 3-5 times.", category: "Grounding", color: "from-blue-100 to-indigo-200", icon: 'MapPinIcon' },
    { title: "5-4-3-2-1 Method", description: "Name: 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.", category: "Grounding", color: "from-blue-100 to-indigo-200", icon: 'MapPinIcon' },
    { title: "Go for a Walk", description: "A 10-15 minute walk can change your scenery and mindset.", category: "Action", color: "from-green-100 to-emerald-200", icon: 'PhoneIcon' },
    { title: "Play the Tape Through", description: "Think about the full consequences of giving in to a craving.", category: "Cognitive", color: "from-pink-100 to-red-200", icon: 'ShieldIcon' },
    { title: "Call a Friend", description: "Talk about what you're feeling with your support network.", category: "Connection", color: "from-green-100 to-emerald-200", icon: 'PhoneIcon' },
    { title: "Delay and Distract", description: "Wait 15 minutes. Do something to distract yourself in that time.", category: "Cognitive", color: "from-pink-100 to-red-200", icon: 'ShieldIcon' },
];

export const MEETING_LINKS = {
    AA: {
        name: "Alcoholics Anonymous (AA)",
        description: "Find local, in-person, or online AA meetings.",
        link: "https://www.aa.org/find-meetings",
        instructions: "The official AA website provides local directories and search tools."
    },
    NA: {
        name: "Narcotics Anonymous (NA)",
        description: "Find local and online NA meetings.",
        link: "https://www.na.org/meetingsearch/",
        instructions: "Use the NA Meeting Locator to find times and locations in your area."
    },
    CA: {
        name: "Cocaine Anonymous (CA)",
        description: "Find CA meetings globally.",
        link: "https://www.ca.org/meetings/",
        instructions: "The CA website offers a global directory and online meeting resources."
    }
};

export const workbookData = {
    generalRecovery: { title: "General Recovery Exercises", description: "Core exercises for your recovery.", topics: [ { id: 'understanding-addiction', title: 'Understanding My Addiction', prompt: 'Reflect on when your addiction started. What were the circumstances? How has it impacted your life, relationships, and health? Write openly about your journey with the substance or behavior.' }, { id: 'identifying-triggers', title: 'Identifying Triggers', prompt: 'What situations, feelings, people, or places make you want to use? List as many as you can. For each trigger, think about why it affects you and how you have reacted in the past.' }, { id: 'coping-strategies', title: 'Developing Coping Strategies', prompt: 'For each trigger you identified, brainstorm a healthy coping strategy. What can you do instead of turning to your addiction? Examples: call a sponsor, go for a walk, practice deep breathing, listen to music.' }, { id: 'building-support', title: 'Building a Support Network', prompt: 'Who are the supportive, trustworthy people in your life? List their names and how they can help. Who do you need to distance yourself from? How will you build new, healthy relationships?' }, { id: 'vision-for-future', title: 'My Vision for a Sober Future', prompt: 'Describe the life you want to live in recovery. What are your goals for your career, family, health, and personal growth? Be specific and imagine how good it will feel to achieve these things.' }, { id: 'relapse-prevention', title: 'Relapse Prevention Plan', prompt: 'Acknowledge that recovery is a process. What are your personal warning signs that you might be heading for a relapse? Create a step-by-step plan of action for what you will do if you feel an urge or craving.' } ] },
    
    twelveSteps: { 
        title: "12-Step Workbook", 
        description: "A guide to working the 12 Steps. Answer the questions for each section.", 
        topics: [ 
            { 
                id: 'step-1', title: 'Step 1: Honesty', 
                quote: 'We admitted we were powerless over our addiction, that our lives had become unmanageable.',
                sections: [
                    { title: "A. The Problem of Powerlessness", questions: ["1. In your own words, what does 'powerlessness over addiction' mean today?", "2. Describe three instances where you were completely unable to control your use once you started.", "3. What specific lies did you tell yourself or others about your ability to manage your addiction?", "4. In what ways did you try to control or minimize your addiction before coming to recovery?", "5. Write about the emotional impact of finally admitting defeat over your addiction."] },
                    { title: "B. The Result of Unmanageability", questions: ["6. List three key areas of your life that have become unmanageable (e.g., finances, relationships, work).", "7. How has your addiction impacted your physical and mental health?", "8. Describe a major consequence of your addiction (legal, financial, personal) that you would never have accepted while clean/sober.", "9. How did unmanageability affect your sleep, diet, or hygiene?", "10. What illusion of control did you hold onto, even as your life fell apart?"] },
                    { title: "C. Acceptance and Surrender", questions: ["11. What action are you willing to take today that you were unwilling to take before?", "12. What is the biggest fear you have about accepting the truth of Step 1?", "13. What is the relief that comes with final surrender?", "14. Write a brief statement of admission and surrender to carry with you throughout the day.", "15. In one word, how do you feel after honestly completing this Step?"] }
                ]
            }, 
            { 
                id: 'step-2', title: 'Step 2: Hope', 
                quote: 'Came to believe that a Power greater than ourselves could restore us to sanity.',
                sections: [
                    { title: "A. The Need for Restoration", questions: ["1. In what ways do you feel or believe your thinking has been 'insane' during your addiction?", "2. Describe a typical thought pattern that consistently led you back to using or destructive behavior.", "3. What is your understanding of the word 'sanity' in the context of recovery?", "4. What evidence do you have that sanity is beginning to return to your life?", "5. Where do you find yourself feeling most hopeless or skeptical right now?", "6. What does it mean to believe you need 'restoration' rather than just willpower?"] },
                    { title: "B. Defining a Higher Power", questions: ["7. What characteristics would your ideal 'Power greater than yourself' possess (e.g., loving, guiding, honest)?", "8. What obstacles (fear, pride, past negative experiences) prevent you from believing in this Power?", "9. If you reject the idea of a religious God, what non-religious force or entity are you willing to place your hope in?", "10. Describe an experience where you felt guided, protected, or surprisingly lucky.", "11. How do you recognize the influence of a Power greater than yourself in your life today?"] },
                    { title: "C. The Role of Hope and Faith", questions: ["12. What specific hope do you have for your life one year from now?", "13. How can you deliberately choose hope when doubt or cynicism creeps in?", "14. How does the recovery fellowship (AA/NA) represent a 'Power greater than yourself' to you?", "15. What is the difference between relying on this Power and relying on human power?"] }
                ]
            },
            { 
                id: 'step-3', title: 'Step 3: Trust', 
                quote: 'Made a decision to turn our will and our lives over to the care of God as we understood Him.',
                sections: [
                    { title: "A. Decision Making", questions: ["1. What areas of your life are you still trying to control completely?", "2. How does fear influence your desire to maintain control?", "3. Write down the simple decision you made to turn your life over.", "4. Describe a time when following your own will led to pain or destruction.", "5. What is the difference between 'my will' and the 'care' of a Higher Power?"] },
                    { title: "B. Understanding Care", questions: ["6. What does 'God as we understood Him' mean to you today?", "7. In practical terms, what daily actions show you are relying on your own will?", "8. In practical terms, what daily actions show you are relying on your Higher Power's care?", "9. If your Higher Power is loving, what specific relief does turning things over offer?", "10. How do you distinguish between taking responsible action and controlling the outcome?"] },
                    { title: "C. The Practice of Surrender", questions: ["11. Write out the Step Three prayer and what each sentence means to you.", "12. What is the one specific thing you are struggling to turn over today?", "13. If you were truly trusting, how would your approach to that problem change?", "14. What are three simple things you can 'turn over' immediately after completing this Step?"] }
                ]
            },
            { 
                id: 'step-4', title: 'Step 4: Truth', 
                quote: 'Made a searching and fearless moral inventory of ourselves.',
                sections: [
                    { title: "A. Search and Fearlessness", questions: ["1. What does it mean to be truly 'fearless' in this process?", "2. What are you most afraid of finding out about yourself?", "3. In what ways have you been dishonest with yourself in the past?", "4. What is the most difficult resentment to look at, and why?", "5. Describe a time when you projected your faults onto someone else."] },
                    { title: "B. Resentments and Harms", questions: ["6. List five major resentments you hold, and identify what part of your self-esteem (pride, security, ambition) was injured by each one.", "7. Describe a specific incident where you were clearly in the wrong.", "8. What fears currently block your growth?", "9. How did your addiction fuel these character defects?", "10. What responsibilities did you avoid because of your addiction?"] },
                    { title: "C. Self-Examination", questions: ["11. List 5 things you genuinely like about yourself.", "12. What role did sexual conduct or extreme self-neglect play in your past harms?", "13. If you could undo one wrong, which would be, and why?", "14. What truth about yourself is the hardest to accept?", "15. How does this inventory make Step 5 seem necessary?"] }
                ]
            },
            { 
                id: 'step-5', title: 'Step 5: Integrity', 
                quote: 'Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.',
                sections: [
                    { title: "A. Admission to God and Self", questions: ["1. What does the word 'exact' imply about the depth of this admission?", "2. How has taking the inventory (Step 4) changed your view of yourself?", "3. What is the value of admitting your wrongs to yourself?", "4. What lies have you finally stopped telling yourself?"] },
                    { title: "B. Admission to Another Human Being", questions: ["5. Why is it necessary to admit your wrongs to another person?", "6. Who did you choose to share your inventory with, and why did you trust them?", "7. What was the most difficult part of your inventory to share?", "8. How did you feel physically and emotionally immediately after sharing?"] },
                    { title: "C. Freedom and Humility", questions: ["9. What relief did you gained by breaking secrecy?", "10. How has this Step taught you humility?", "11. Describe a situation where keeping a secret used to control you.", "12. What advice would you give to a newcomer starting this Step?"] }
                ]
            },
            { 
                id: 'step-6', title: 'Step 6: Willingness', 
                quote: 'Were entirely ready to have God remove all these defects of character.',
                sections: [
                    { title: "A. Identifying Defects", questions: ["1. List your top five most persistent character defects (e.g., pride, dishonesty, impatience).", "2. What defect is currently causing the most trouble in your life?", "3. Which defect are you LEAST willing to let go of, and why?", "4. Describe a moment when one of these defects caused you deep regret."] },
                    { title: "B. Readiness and Resistance", questions: ["5. What does 'entirely ready' mean to you? Is it perfect willingness or an honest effort?", "6. What benefits do you still gain from holding onto one of your defects?", "7. Write about a time a defect brought you temporary pleasure, followed by long-term pain.", "8. If a defect were removed today, how would your daily routine change?"] },
                    { title: "C. Surrender of Self-Will", questions: ["9. What is the difference between asking God to remove a defect (Step 7) and being ready (Step 6)?", "10. Describe one positive quality you can practice today to replace a defect you are willing to let go of.", "11. Write a brief statement of readiness, giving permission for change to occur.", "12. What action demonstrates your willingness today?"] }
                ]
            },
            { 
                id: 'step-7', title: 'Step 7: Humility', 
                quote: 'Humbly asked Him to remove our shortcomings.',
                sections: [
                    { title: "A. Understanding Humility", questions: ["1. What is your understanding of humility (what it IS and IS NOT)?", "2. How does pride prevent you from asking for help?", "3. How has working the previous Steps prepared you for this moment of humility?", "4. How has being humble made you more effective in recovery?"] },
                    { title: "B. The Act of Asking", questions: ["5. What does 'shortcomings' encompass for you?", "6. When you ask your Higher Power to remove them, what result are you expecting?", "7. Do you believe yourHigher Power has the power to remove them? Why or why robot?", "8. Describe the feeling of asking for help without demands or conditions."] },
                    { title: "C. Prayer and Action", questions: ["9. Write out the Step Seven prayer in your own words.", "10. How can you practice humility immediately after this prayer?", "11. If a shortcoming wasn't immediately removed, what is your next sensible action?", "12. What character assets are beginning to emerge in your life as shortcomings fade?"] }
                ]
            },
            { 
                id: 'step-8', title: 'Step 8: Responsibility', 
                quote: 'Made a list of all persons we had harmed, and became willing to make amends to them all.',
                sections: [
                    { title: "A. Making the List", questions: ["1. Who is the person you harmed the most, and why?", "2. List every person you can think of that you owe an amends to (be thorough).", "3. What category of harm (e.g., financial, emotional, physical) is most common on your list?", "4. What fear prevents you from making this list complete?", "5. Did you harm institutions or organizations? List them."] },
                    { title: "B. Willingness, Not Action", questions: ["6. What is the difference between 'making the list' and 'being willing' to make amends?", "7. What does 'willingness' look like in your attitude toward the list?", "8. What harm did you do to yourself that needs an amends?", "9. Is there anyone on your list you feel deserves the harm? How are you letting go of that judgment?", "10. What feelings surface when you read the names of those you harmed?"] },
                    { title: "C. Consequences and Freedom", questions: ["11. What consequences are you willing to accept from the people on your list?", "12. What is the freedom you hope to gain by completing this Step?", "13. How does this Step deepen your sense of responsibility for your actions?", "14. What does it mean to make an amends in thought and intention, even before the action?"] }
                ]
            },
            { 
                id: 'step-9', title: 'Step 9: Amends', 
                quote: 'Made direct amends to such people wherever possible, except when to do so would injure them or others.',
                sections: [
                    { title: "A. Defining Direct Amends", questions: ["1. What is the difference between an apology and an amends?", "2. What does the promise 'wherever possible' mean for you?", "3. How will you prepare for each amends conversation (what will you say, what won't you say)?", "4. Describe the harm of making an amends that would 'injure them or others.'"] },
                    { title: "B. The Amends Process", questions: ["5. Who is the first person you will make amends to, and what will the amends consist of?", "6. How will you handle a negative or unforgiving response from someone?", "7. What were the most important non-verbal parts of your amends (e.g., tone, body language)?", "8. How have you already made 'living amends' to people on your list?"] },
                    { title: "C. Results and Freedom", questions: ["9. Describe a specific amends you have successfully completed and how you felt afterward.", "10. How has this Step taught you patience and timing?", "11. What amends do you owe yourself for self-neglect or abuse?", "12. How does your emotional honesty today serve as an ongoing amends?"] }
                ]
            },
            { 
                id: 'step-10', title: 'Step 10: Awareness', 
                quote: 'Continued to take personal inventory and when we were wrong promptly admitted it.',
                sections: [
                    { title: "A. Daily Inventory", questions: ["1. Why is continuing inventory essential for staying clean/sober?", "2. What three questions do you ask yourself at the end of each day to take inventory?", "3. Describe a moment today where you felt fear, and what you did with that feeling.", "4. What recurring negative thought or emotion did you notice today?", "5. What new character asset did you practice today?"] },
                    { title: "B. Prompt Admission", questions: ["6. What does 'promptly admitted it' mean? (How quickly is prompt?)", "7. Who is a safe person you can admit wrongs to daily?", "8. Describe a recent instance where you were wrong and admitted it.", "9. How does avoiding prompt admission lead to resentment?", "10. What is the freedom gained by quickly admitting when you are wrong?"] },
                    { title: "C. Practice and Growth", questions: ["11. How will you make this Step a natural part of your daily life, not a chore?", "12. What action will you take tomorrow morning to prevent recurring mistakes from today's inventory?", "13. How does this Step help you avoid becoming complacent?", "14. Write a brief evening review of your day."]}
                ]
            },
            { 
                id: 'step-11', title: 'Step 11: Connection', 
                quote: 'Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.',
                sections: [
                    { title: "A. Improving Conscious Contact", questions: ["1. How do you define 'conscious contact' with your Higher Power?", "2. What does a typical meditation or prayer session look like for you?", "3. What time of day is best for you to practice quiet reflection?", "4. What distracting thoughts or feelings interrupt your connection?", "5. Describe a moment when you felt truly connected."]},
                    { title: "B. Prayer for Guidance", questions: ["6. What is the significance of praying 'only for knowledge of His will'?", "7. How do you recognize your Higher Power's will versus your own selfish desires?", "8. What does the 'power to carry that out' mean, and where does that power come from?", "9. Write a brief prayer asking for guidance for a specific challenge you face today.", "10. How has this Step helped you let go of demanding specific outcomes?"]},
                    { title: "C. Action and Outcome", questions: ["11. What is one concrete action you will take today based on the guidance you received?", "12. What is the most fulfilling part of your spiritual practice?", "13. How has this Step affected your sense of peace and purpose?", "14. How can you carry this conscious contact into your challenging interactions today?"]}
                ]
            },
            { 
                id: 'step-12', title: 'Step 12: Service', 
                quote: 'Having had a spiritual awakening as the result of these steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs.',
                sections: [
                    { title: "A. Spiritual Awakening", questions: ["1. Describe your spiritual awakening (it can be sudden or gradual).", "2. What is the evidence in your life that a spiritual change has occurred?", "3. How has your relationship with people and life changed since working the Steps?", "4. What is the most profound freedom you have experienced in recovery?"]},
                    { title: "B. Carrying the Message", questions: ["5. How do you 'carry the message' to others who still suffer?", "6. Describe a specific act of service you performed this week.", "7. What is the difference between carrying the message and giving advice?", "8. Who is the ideal person for you to share your story with right now?", "9. What is your primary motivation for service?"]},
                    { title: "C. Practice in All Affairs", questions: ["10. How do you apply the principles (Honesty, Hope, Trust) in your professional life?", "11. How do you apply them to your family or domestic life?", "12. What is your commitment to ongoing service and growth?", "13. Summarize the lasting impact that working the Twelve Steps has had on your existence."]}
                ]
            },
        ] 
    }
};

export const APP_VERSIONS = {
    DASHBOARD: '1.3.1',
    JOURNAL: '1.4.0', 
    GOALS: '1.1.1', 
    COPING: '2.1.0', 
    WORKBOOK: '1.4.1',
    LITERATURE: '1.1.0',
    RESOURCES: '1.0.0',
    SETTINGS: '1.0.1',
    MEETINGFINDER: '1.0.0',
};
