import * as React from "react";
import { Component, Fragment } from "react";
import { Question } from "../question/question.component";
import { QuestionAnswer, QuestionList, QuestionTitle, Container, Shape, Girl, QuestionMark } from "./faq.page.style";
type Props = {
  renderRightComponent: (component: JSX.Element) => void;
  highlightColor: string;
};
export default class FAQPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.onQuestionClick(0); //render first page
  }
  onQuestionClick(questionIndex: number) {
    let question = questions[questionIndex];
    this.props.renderRightComponent(
      <QuestionAnswer>
        <h3 style={{ color: this.props.highlightColor }}>{question.title}</h3>
        {question.content}
      </QuestionAnswer>
    );
  }
  render() {
    return (
      <Container>
        <QuestionList>
          {questions.map((question, index) => (
            <QuestionTitle onClick={() => this.onQuestionClick(index)}>
              {question.title}
            </QuestionTitle>
          ))}
        </QuestionList>
        <Shape src="/img/faq/shape2.svg" alt="shape"></Shape>
        <Girl src="/img/faq/girl2.svg" alt="girl"></Girl>
        <QuestionMark src="/img/faq/question-mark.svg" alt="note1"></QuestionMark>
      </Container>
    );
  }
}

const questions: Question[] = [
  {
    title: "What is a provider?",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <b>Eveniet dolorum veniam ut illo voluptatem consequatur deleniti.</b>
        <br />
        <br />
        Laborum, dignissimos ab repudiandae veniam earum necessitatibus tempore
        tempora atque eius consequuntur ullam fuga obcaecati numquam nesciunt
        nulla rerum error, harum ut incidunt temporibus, cupiditate qui? Rerum
        illo tenetur quam nemo suscipit explicabo ut rem consequatur nihil at
        deserunt omnis maxime quaerat amet, nesciunt, ullam unde veniam fuga
        officia odio corrupti debitis quas voluptates laudantium. <br />
        <br />
        Sed ducimus ad laboriosam fugiat error eveniet culpa! Mollitia
        accusantium magni, illo adipisci qui quae pariatur vero quos ut
        blanditiis dolores in modi fugiat velit ducimus, iure perferendis
        quidem.
      </p>
    ),
  },
  {
    title: "Why I should use it?",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <b>Eveniet dolorum veniam ut illo voluptatem consequatur deleniti.</b>
        Laborum, dignissimos ab repudiandae veniam earum necessitatibus tempore
        tempora atque eius consequuntur ullam fuga obcaecati numquam nesciunt
        nulla rerum error, harum ut incidunt temporibus, cupiditate qui? Rerum
        illo tenetur quam nemo suscipit explicabo ut rem consequatur nihil at
        deserunt omnis maxime quaerat amet
      </p>
    ),
  },
];
