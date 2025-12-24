import { useState } from 'react'
import './twobook.css'

import { FaArrowDown } from "react-icons/fa";


const Twobook = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      books: `The Last Night of the World – Ray Bradbury`,
      bookss: `"WHAT would you do if you knew that this was the last night of the world?""What would I do? You mean seriously?""Yes, seriously.""I don’t know. I hadn’t thought."He poured some coffee. In the background the two girls were playing blocks on the parlor rug in thelight of the green hurricane lamps. There was an easy, clean aroma of the brewed coffee in theevening air."Well, better start thinking about it," he said."You don’t mean it!"He nodded."A war?"He shook his head."Not the hydrogen or atom bomb?""No.""Or germ warfare?""None of those at all," he said, stirring his coffee slowly. "But just, let’s say, the closing of a book.""I don’t think I understand.""No, nor do I, really; it’s just a feeling. Sometimes it frightens me; sometimes I’m not frightened atall but at peace." He glanced in at the girls and their yellow hair shining in the lamplight. "I didn’tsay anything to you. It first happened about four nights ago.""What?""A dream I had. I dreamed that it was all going to be over, and a voice said it was; not any kind ofvoice I can remember, but a voice anyway, and it said things would stop here on Earth. I didn’tthink too much about it the next day, but then I went to the office and caught Stan Willis looking outthe window in the middle of the afternoon, and I said a penny for your thoughts, Stan, and he said, Ihad a dream last night, and before he even told me the dream I knew what it was. I could have toldhim, but he told me and I listened to him.""It was the same dream?""The same. I told Stan I had dreamed it too. He didn’t seem surprised. He relaxed, in fact. Then wewww.ajarnjohn.comstarted walking through the office, for the hell of it. It wasn’t planned. We didn’t say, ‘Let’s walkaround.’ We just walked on our own, and everywhere we saw people looking at their desks or theirhands or out windows. I talked to a few. So did Stan.""And they all had dreamed?""All of them. The same dream, with no difference.""Do you believe in it?""Yes. I’ve never been more certain.""And when will it stop? The world, I mean.""Sometime during the night for us, and then as the night goes on around the world, that’ll go too.It’ll take twenty-four hours for it all to go."They sat awhile not touching their coffee. Then they lifted it slowly and drank, looking at eachother."Do we deserve this?" she said."It’s not a matter of deserving; it’s just that things didn’t work out. I notice you didn’t even argueabout this. Why not?""I guess I’ve a reason," she said."The same one everyone at the office had?"She nodded slowly. "I didn’t want to say anything. It happened last night. And the women on theblock talked about it among themselves today. They dreamed. I thought it was only a coincidence."She picked up the evening paper. "There’s nothing in the paper about it.""Everyone knows, so there’s no need."He sat back in his chair, watching her. "Are you afraid?""No. I always thought I would be, but I’m not.""Where’s that spirit called self-preservation they talk so much about?""I don’t know. You don’t get too excited when you feel things are logical. This is logical. Nothingelse but this could have happened from the way we’ve lived.""We haven’t been too bad, have we?""No, nor enormously good. I suppose that’s the trouble. We haven’t been very much of anythingexcept us, while a big part of the world was busy being lots of quite awful things."The girls were laughing in the parlor."I always thought people would be screaming in the streets at a time like this.""I guess not. You don’t scream about the real thing.""Do you know, I won’t miss anything but you and the girls. I never liked cities or my work oranything except you three. I won’t miss a thing except perhaps the change in the weather, and aglass of ice water when it’s hot, and I might miss sleeping. How can we sit here and talk this way?""Because there’s nothing else to do.""That’s it, of course; for if there were, we’d be doing it. I suppose this is the first time in the historyof the world that everyone has known just what they were going to do during the night.""I wonder what everyone else will do now, this evening, for the next few hours.""Go to a show, listen to the radio, watch television, play cards, put the children to bed, go to bedthemselves, like always.""In a way that’s something to be proud of... like always."They sat a moment and then he poured himself another coffee. "Why do you suppose it’s tonight?""Because.""Why not some other night in the last century, or five centuries ago, or ten?""Maybe it’s because it was never October 19, 1969, ever before in history, and now it is and that’sit; because this date means more than any other date ever meant; because it’s the year when thingsare as they are all over the world and that’s why it’s the end.""There are bombers on their schedules both ways across the ocean tonight that’ll never see land.""That’s part of the reason why.""Well," he said, getting up, "what shall it be? Wash the dishes?"They washed the dishes and stacked them away with special neatness. At eight-thirty the girls wereput to bed and kissed good night and the little lights by their beds turned on and the door left openjust a trifle."I wonder," said the husband, coming from the bedroom and glancing back, standing there with hispipe for a moment."What?""If the door will be shut all the way, or if it’ll be left just a little ajar so some light comes in.""I wonder if the children know.""No, of course not."They sat and read the papers and talked and listened to some radio music and then sat together bythe fireplace watching the charcoal embers as the clock struck ten-thirty and eleven and eleventhirty. They thought of all the other people in the world who had spent their evening, each in hisown special way."Well," he said at last.He kissed his wife for a long time."We’ve been good for each other, anyway.""Do you want to cry?" he asked."I don’t think so."They moved through the house and turned out the lights and went into the bedroom and stood in thenight cool darkness undressing and pushing back the covers. "The sheets are so clean and nice.""I’m tired.""We’re all tired." They got into bed and lay back."Just a moment," she said.He heard her get out of bed and go into the kitchen. A moment later, she returned. "I left the waterrunning in the sink," she said.Something about this was so very funny that he had to laugh. She laughed with him, knowing whatit was that she had done that was funny. They stopped laughing at last and lay in their cool nightbed, their hands clasped, their heads together."Good night," he said, after a moment."Good night," she said.
`
    }
  ])


  return (
    <div data-aos="fade-left" className='book background'>
      <div className="book-card">
        {books.map((item, index) =>(
          <div className="book-question">
            <h2>{item.books}</h2>
            <br />
            <h3>{item.bookss}</h3>
          </div>
        ))}
        <div className="arrowBottom">
          <FaArrowDown />
        </div>
      </div>

    </div>
  )
}

export default Twobook
