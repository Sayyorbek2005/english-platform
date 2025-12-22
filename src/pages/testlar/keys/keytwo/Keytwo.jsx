import './keytwo.css'
import { useState } from 'react'
const Keytwo = () => {


  const[taskones, setTaskones] = useState([
      {
        id:1,
        question:'Chronological order (beginning of the story)',
        correct:'Correct order 1 → 6 → 3 → 5 → 1 → 4 becomes:',
        questionA:'A London stock-broker and volunteer officer is called to work as a juror…',
        questionB:'On the morning of the court day, Bosengate leaves his country estate…',
        questionC:'After arriving at the courthouse, he takes his place in the jury box…',
        questionD:'The first two cases finish quickly with guilty verdicts…',
        questionE:'In the middle of the trial, the main witness does not come…',
        questionF:'After introducing the third case, the accused soldier Owen Lewis appears…'
      }
    ])
    const[tasktwos, setTasktwos] = useState([
      {
        id:1,
        question:'Chronological order (middle of the story)', 
       correct:'Correct order:',
       questionA:'Thanks to the postponement of the court, Mr. Bosengate returns home early…',
       questionB:'Bosengate and his wife start a conversation at the summer house…',
       questionC:'When the sun goes down, Bosengate feels uncomfortable and tired…',
       questionD:'Sitting alone at his window that night, he contemplates the events…',
       questionE:'When the night approaches, he opens the door to his wife’s bedroom but hesitates…'
      }
    ])
    const[taskthrees, setTaskthrees] =useState([
      {
        id:1,
        question:'Chronological order (ending of the story)',
        part1:'Part-1',
        correct1:'Correct order:',
        questionA:'The next morning, Bosengate is surprised to see the soldier again…',
        questionB:'At the previous session, Owen Lewis gives an ardent speech…',
        questionc:'During the discussion, almost all jurors find him guilty…',
        questionD:'Eventually, the jury finds Owen Lewis guilty but calls for mercy…',
        questionE:'That evening after the trial, Bosengate wants to rely on Kathleen…',
        questionF:'When Bosengate reaches Kathleen’s bedroom…',
        questionG:'. Later that night, lost in his thoughts, Bosengate reflects…',
      },
      {
        id:2,
        question2:'(Dialogue sequencing)',
        part2:'Part-2',
        correct2:'Correct logical order:',
        harflar:'A → C → H → D → E → F → B → G',
        explain:'Explanation flow',
        questionfact:'Questioning facts → diagnosing emotional state → strict objection → harsh judgment → Bosengate’s empathy → Bosengate’s refusal → soldier’s plea → final agreement.'
      }
  ])
  
  const[taskfours, setTaskfours] = useState([
    {
      id:1,
      question:'(Dialogue with Kathleen)',
      correct:'Correct order:',
      questionA:'Kathleen: “Henry, why are you worried? How was the trial?”',
      questionB:'Bosengate: “It was a bit unsettling for me…”',
      questionC:'Kathleen: “I guess the reason for your worries is a soldier…”',
      questionD:'Bosengate: “Attempted suicide… because he missed his wife.”',
      questionE:'Kathleen: “Oh… how pathetic. Was he punished?”',
      questionF:'Bosengate: “He was found guilty, but I asked for mercy.',
      questionG:'Kathleen: “That was kind of you…”',
      questionH:'Bosengate: “Kind? Perhaps… but I wonder what leads people to despair.”',
  
    }
  ])
  
  const[taskfives, setTaskfives] = useState([
    {
      id:1,
      question:'(Dialogue among jurors)',
      correct:'Correct order:',
      harflar:'a → f → c → d → e → b',
      flow:'Flow:',
      comparing:'Comparing hardships → pointing to rules → empathy → fear of weakness → moral insight → argument for mercy.'
    }
  ])
  
  const[tasksixs, setTaskssexs] = useState([
    {
      id:1,
      tasksix:'Categorizing Themes',
      question1:'Justice and Law',
      questionA:'Juror’s discussion about leniency',
      questionB:'Another juror: “The suicide he attempted can’t be whitewashed.”',
      questionC:'The judge’s sentence to send him back to regiment',
      questionD:'Another juror blaming the soldier: “Coward…”',
      
    },
    {
      id:2,
      question2:'Compassion and Mercy',
      questionA1:'Bosengate claiming mercy for the soldier',
      questionB1:'Bosengate’s recall of his own children',
      questionC1:'Owen Lewis’s desire to return to his wife',
      questionD1:'Bosengate’s contemplations: “Why should I attend judgement…?”',
    },
    {
      id:3,
      question3:'Effects of war',
      questionA2:'Description of the soldier’s desperation and exhausted look',
      questionB2:'The soldier’s shabby, poorly fitting uniform',
      questionC2:'Owen’s explanations about unbearable life after separation (war-related)',
  
    },
    {
      id:4,
      question4:'Moral dilemmas',
      questionA3:'Bosengate’s dilemma between obeying the law and showing humanity'
    },
    {
      id:5,
      question:'Character Traits Matching',
      quote:'Quote / Action',
      text1:'“I will only agree on condition that we plead mercy”',
      text2:'“He is just a coward making his wife an excuse”',
      text3:'Observes the soldier’s worn uniform & feels pity',
      text4:'“I couldn’t bear the separation from my wife”',
      text5:'“The suicide he attempted can’t be whitewashed”',
      text6:'Remembers his own children during the case',
      text7:'Seems desperate and nervous in courtroom',
      text8:'Tries to avoid conflict but mutters complaints',
      text9:'“Why should I take part in the judgment on that poor soldier?”',
      character:'Character',
      character1:'Bosengate1',
      character2:'Juror1',
      character3:'Bosengate2',
      character4:'Owen Lewis1',
      character5:'Juror2',
      character6:'Bosengate3',
      character7:'Owen Lewis2',
      character8:'Commercial traveler1',
      character9:'Commercial traveler2',
      trait:'Trait',
      trait1:'Compassionate',
      trait2:'Harsh, judgmental',
      trait3:'Empathetic',
      trait4:'Emotionally vulnerable',
      trait5:'Strict, uncompromising',
      trait6:'Family-oriented',
      trait7:'Physically weak & anxious',
      trait8:'Passive-aggressive',
      trait9:'Self-reflective / cooperative',
      attitude:'Attitude',
      attitude1:'Positive',
      attitude2:'Negative',
      attitude3:'Positive',
      attitude4:'Neutral ↦ sympathetic',
      attitude5:'Negative',
      attitude6:'Positive',
      attitude7:'Neutral',
      attitude8:'Negative',
      attitude9:'Positive',
    }
  ])
  const[taskeights, setTaskeights] = useState([
    {
      id:1,
      question:'Symbol Identification',
      symbol:'Symbol / Action',
      symbol1:'Soldier’s shabby clothes',
      symbol2:'Mahogany jury table',
      symbol3:'The way Owen looked at Bosengate',
      symbol4:'Judge’s black robe',
      symbol5:'Owen wanting to return to his wife',
      symbol6:'Heated discussion among juries',
      symbol7:'Bosengate remembering his children',
      symbol8:'Soldier’s desperate appearance',
      symbol9:'Soldier returned to regiment instead of prison',
      symbol10:'Courtroom full of people',
      symbol11:'Bosengate’s insomnia',
      category:'Category',
      category1:'War symbolism',
      category2:'Justice symbolism',
      category3:'Human connection symbolism',
      category4:'Justice symbolism',
      category5:'Human connection symbolism ',
      category6:'Justice symbolism',
      category7:'Human connection symbolism',
      category8:'War symbolism',
      category9:'Justice symbolism + (war context)',
      category10:'Justice symbolism',
      category11:'Human connection symbolism (reflection & empathy)',
    }
  ])
  return (
    <div className="keytwo">
      
    </div>
  )
}

export default Keytwo
