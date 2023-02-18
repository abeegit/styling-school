import styled from 'styled-components';
import Address from 'src/app/components/Address/Address';
import Date from 'src/app/components/Date/Date';
import Link from 'src/app/components/Link/Link';

const StyledLetter = styled.div`
  margin: 10px;
`;

export function Letter() {
  return (
    <StyledLetter>
      <Address align="right">
        <strong>Dr. Eleanor Gaye</strong>
        <br />Awesome Science faculty
        <br />University of Awesome
        <br />Bobtown, CA 999999,
        <br />USA
        <br /><strong>Tel: </strong><Link decoration={false} href="tel: +91123-456-7890">123-456-7890</Link>
        <br /><strong>Email: </strong><Link decoration={false} href="mailto:no_reply@example.com">no_reply@example.com</Link>
      </Address>

      <Date>20 January 2016</Date>

      <Address align="left">
        <strong>Miss Eileen Dover</strong>
        <br />4321 Cliff Top Edge
        <br />Dover, CT9 XXX
        <br />UK
      </Address>

      <h2>Re: Eileen Dover university application</h2>

      <p>Dear Eileen,</p>
      <p>Thank you for your recent application to join us at the University of Awesome's science faculty to study as part of your PhD next year. I will answer your questions one by one, in the following sections.</p>

      <h3>Starting dates</h3>
      <p>We are happy to accomodate you starting your study with us at any tme, however it would suit us better if you could start at the beginning of a semester, the start dates for each one are as follows:</p>
      <ul>
        <li>First semester: 9 September 2016</li>
        <li>Second semester: 15 January 2017</li>
        <li>Third semester: 2 May 2017</li>
      </ul>
      <p>Please let me know if this is ok, and if so which start date would you prefer.</p>
      <p>You can find more information about <Link href="https://youtube.com">information university dates</Link> on our website.</p>

      <h3>Subjects of study</h3>
      <p>At the Awesome Science Faculty, we have a pretty open-minded research facility - as long as the subjects fall somewhere in the realm of science and technology. You seem like an intelligent, dedicated researcher, and just the kind of person we'd like to have on our team. Saying that, of the ideas you submitted we were most intrigued by are as follows, in order of priority:</p>
      <ol>
        <li>Turning H20 into wine, and the health benefits of Resveratol (C<sub>14</sub><sub>H</sub>12<sub>O</sub>3).</li>
        <li>Measuring the effect on performance of funk bassplayers at temperatures exceeding 30&#8451;C (86&#8451;F), when the audience size exponentially increases (effect of 3 X 10<sup>3</sup> increasing to 3 X 10<sup>4</sup>).</li>
        <li><u>HTML</u> and <u>CSS</u> constructs for representing musical scores</li>
      </ol>
      <p>So please can you provide more information on each of these subjects, including how long you'd expect the research to take, required staff and other resources, and anything else you think we'd need to know? Thanks.</p>

      <h3>Exotic dance moves</h3>
      <p>Yes you are right! As part of my post-doctorate work, I <i>did</i> study exotic tribal dances. To answer your question, my favourite dances are as follows, with definitions:</p>
      <p>Polynesian chicken dance</p>
      <blockquote>A little known but <i>very</i> influential dance dating back as far as 300BC, a whole village would dance around in a circle like chickens, to encourage their livestock to be "fruitful".</blockquote>
      <p>Icelandic brownian shuffle</p>
      <blockquote>Before the Icelanders developed fire as a means of getting warm, they used to practice this dance, which involved huddling close together in a circle on the floor, and shuffling their bodies around in imperceptibly tiny, very rapid movements. One of my fellow students used to say that he thought this dance inspired modern styles such as Twerking.</blockquote>
      <p>Arctic robot dance</p>
      <blockquote>An interesting example of historic misinformation, English explorers in the 1960s believed to have discovered a new dance style characterised by "robotic", stilted movements, being practiced by inhabitants of Northern Alaska and Canada. Later on however it was discovered that they were just moving like this because they were really cold.</blockquote>

      <p>For more of my research, see my <Link href="#" decoration>exotic dance research page</Link>.</p>

      <p>Yours sincerely,</p>

      <p>Dr Eleanor Gaye</p>

      <p>University of Awesome motto: "Be awesome to each other." <i>-- The memoirs of Bill S Preston, Esq</i></p>
    </StyledLetter>
  );
}

export default Letter;
