import './keyone.css'

import { useState } from 'react'
const Keyone = () => {

    const [taskones, setTasksones] = useState([
        {
            id: 1,
            taskone: 'Match the words with their synonyms',
            questionone: 'Suggested key (you can adapt to the exact options you used):',
            optionA: 'Wretched → miserable / very unhappy',
            optionB: 'Indispensable → essential / absolutely necessary',
            optionC: 'Afflicted → suffering / in pain / troubled',
            optionD: 'Yearning → longing / strong desire',
            optionE: 'Shambling → awkward / clumsy / shuffling'

        }

    ])

    const [tasktwos, setTasktwos] = useState([
        {
            id: 1,
            tasktwo: 'Match the words with their definitions',
            part1: 'Column A → Column B',
            fromyou: 'From your table:',
            optionA: 'Wretched → very unhappy or miserable',
            optionB: 'Indispensable → absolutely necessary; cannot be done without',
            optionC: 'Afflicted → suffering from or affected by pain or trouble',
            optionD: 'Yearning → a strong longing or deep desire for something',
            optionE: 'Shambling → moving in a slow, awkward, shuffling manner',
            map: '(So the final mapping is:',
            optionA1: 'Wretched → “very unhappy or miserable”',
            optionB1: 'Indispensable → “absolutely necessary; cannot be done without',
            optionC1: 'Afflicted → “suffering from or affected by pain or trouble”',
            optionD1: 'Yearning → “a strong longing or deep desire for something”',
            optionE1: 'Shambling → “moving in a slow, awkward, shuffling manner”)'
        },
        {
            id: 2,
            part2: 'Column A → Column B',
            optionA11: 'Drab → B. Dull and lacking brightness or color; monotonous in appearance',
            optionB12: 'Hunched → D. Shoulders or back bent forward in a stooped posture',
            optionC13: 'Underlip → E. The lower lip, often mentioned when describing expressions',
            optionD14: 'Muttering → A. Speaking in a low, barely audible voice, often in dissatisfaction',
            optionE15: 'Foreman → C. The head or spokesperson of a jury in a courtroom'

        }
    ])
    const [taskthrees, setTaskthrees] = useState([
        {
            id: 1,
            part1: 'Match the words with their antonyms',
            question: 'You didn’t have the antonym list in the text preview, so here is a clear “target” key; match these to whatever antonym options you gave:',
            optionA: 'Wretched ↔ happy / cheerful',
            optionB: 'Indispensable ↔ unnecessary / dispensable',
            optionC: 'Afflicted ↔ healthy / carefree',
            optionD: 'Yearning ↔ indifference / lack of desire',
            optionE: 'Shambling ↔ graceful / well-coordinated'

        },
        {
            id: 2,
            part2: 'Put the words in the blanks of the text',
            question2: 'Word set: Mercy; Women; Hairdresser; Separation; Owen Lewis; Harry; Kathleen',
            answer: 'Correct answers:',
            optionA1: '“To Mr. Henry Bosengate, being summoned for jury service ‘was in the nature of an outrage.’”',
            optionB1: '“Before leaving, Mr. Bosengate complained to his wife, ‘This business is ridiculous. There oughtn’t to be any crime in these days.’” ',
            optionC1: 'Mr. Bosengate’s wife was named Kathleen. ',
            optionD1: 'His two children are Kate and Harry. ',
            optionE1: 'The final case was that of a soldier named Owen Lewis, who was charged with attempted suicide. He claimed he acted because he couldn’t stand the separation from his wife. ',
            optionF1: 'Before joining the army, Owen Lewis had worked as a hairdresser. ',
            optionG1: 'When the accused was brought in, Mr. Bosengate noticed a bandage around the man’s neck from the self-inflicted wound. ',
            optionH1: 'Kathleen remarked that she wished women could sit on juries, as it “would be an experience.”',
            optionI: 'In the jury room, Mr. Bosengate finally agreed to a guilty verdict only on condition that they recommend the prisoner to mercy. ',
            answer1: '(So using only the given word set in the student version, the 7 directly used are: Kathleen, Harry, Owen Lewis, Separation, Hairdresser, Women, Mercy.)'
        }
    ])

    const [taskfours, setTaskfours] = useState([
        {
            id: 1,
            taskfour: 'Fill in the blanks using the word banks',
            question: 'I’ll list them in order as in your worksheet.',
            questionA: 'During the Great War, Mr. Henry Bosengate is summoned to serve as a juror at the local assizes.',
            optionA: 'juror, judge, soldier, lawyer',
            questionB: 'Mr. Bosengate’s wife, named Kathleen, stands under the porch in a lilac linen dress to see him off. ',
            optionB: 'Kathleen, Margaret, Elizabeth, Jane',
            questionC: 'His two young children, Kate and Harry, run along the garden wall and wave goodbye. ',
            optionC: 'Harry, William, Michael, Henry',
            questionD: 'The defendant in the trial is a nervous young Welsh soldier named Owen Lewis, who is brought before the court in his ill-fitting uniform. ',
            optionD: 'Owen Lewis, David Evans, William Jones, Robert Lewis',
            questionE: 'In court, the soldier explains that he tried to kill himself because he couldn’t bear being separated from his wife. ',
            optionE: 'wife, regiment, children, parents',
            questionF: 'The soldier’s previous job was hairdresser before he was called up to the army.',
            optionF: 'hairdresser, mechanic, farmer, teacher',
            questionG: 'During the verdict discussion, Mr. Bosengate insists on recommending mercy for the soldier before he agrees to the jury’s decision. ',
            optionG: 'mercy, punishment, conviction, discharge',
            questionH: 'The soldier was convicted because he tried to commit suicide when he served in the army.',
            optionH: 'suicide, theft, desertion, mutiny',
            questionI: 'Once the decision was announced, the soldier was instructed to return to his regiment and serve his country, instead of being sent to prison. ',
            optionI: 'regiment, home, prison, office',
            questionJ: 'From what he experienced, Mr. Bosengate concluded that people should be kind and help each other. ',
            optionJ: 'help, obey, judge, admire'
        }
    ])
    const [taskfives, setTaskfives] = useState([
        {
            id: 1,
            taskfive: 'Multiple choice – Answer key',
            question: 'I’ll give the correct option text (you can add the letters A/B/C/D yourself).',
            questionA: 'What was the attitude of Mr. Bosengate toward being summoned as a jury?',
            optionA: 'He finds it annoying. (He feels it is “in the nature of an outrage” and “ridiculous.”)',
            questionB: 'What is the relationship between Kathleen and Bosengate?',
            optionB: 'She is his wife. ',
            questionC: 'What is the accused man’s name in the story?',
            optionC: 'Owen Lewis.',
            questionD: 'What is Owen Lewis accused of?',
            optionD: 'He committed suicide (more precisely, attempted suicide). ',
            questionE: 'What was Owen Lewis’s job before joining the army?',
            optionE: 'Hairdresser.',
            questionF: 'What was the reason for Owen Lewis committing suicide?',
            optionF: 'He was depressed because of the separation from his wife.',
            questionH: 'On what condition did Mr. Bosengate agree on signing the verdict?',
            optionH: 'The jury recommends mercy.',
            questionG: 'What did Mr. Bosengate realize by the end of the story?',
            optionG: 'Society needs to be kind and helpful to people. (He concludes “we’ve got to be kind, and help one another…”)'

        }
    ])


    return (
        <div className="keyone">

        </div>
    )
}

export default Keyone
