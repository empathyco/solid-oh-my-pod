import * as React from "react";
import { Component } from "react";
import {
  Container,
  Girl,
  QuestionAnswer,
  QuestionList,
  QuestionMark,
  QuestionTitle,
  Shape,
} from "./faq.page.style";

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
            <QuestionTitle
              key={index}
              onClick={() => this.onQuestionClick(index)}
            >
              {question.title}
            </QuestionTitle>
          ))}
        </QuestionList>
        <Shape src="/img/faq/shape2.svg" alt="shape"></Shape>
        <Girl src="/img/faq/girl2.svg" alt="girl"></Girl>
        <QuestionMark
          src="/img/faq/question-mark.svg"
          alt="note1"
        ></QuestionMark>
      </Container>
    );
  }
}

const questions = [
  {
    title: "Registering",
    content: (
      <p>
        In order to use the application a pod is required. A user can acquire a
        pod by clicking the register button. This will redirect the user to the
        register page. The user will have the ability to choose the provider
        that they prefer. The main difference between the providers is where
        these providers are hosted and who is responsible for this hosting. This
        is the only significance difference, because they have the same
        functionality and user experience.
        <br />
        The user will be able to select a provider by clicking on the provider
        name and on the button below. This will redirect the user to the
        provider register page. The user must fill the necessary fields once the
        user is registered correctly, they will be redirected to the application
        after a couple of seconds.
      </p>
    ),
  },
  {
    title: "Logging in",
    content: (
      <p>
        To log in the user must select their preferred provider by clicking on
        the component that contains the text “select id provider”.
        <br />
        Once this button is clicked it will show the different providers
        available, the user can select one of the providers shown or they can
        choose to log in with a custom provider.
        <br />
        To log in with a custom provider the user must select the custom
        provider option. When the user clicks it, a textbox will appear where
        the user can type the custom provider.
        <br />
        When the user clicks the login button, they will be redirected to their
        provider’s login page. The user must complete the login information.
        Once the login is successful the user will see the application welcome
        page.
      </p>
    ),
  },
  {
    title: "Editing profile",
    content: (
      <p>
        To edit the profile the user must first navigate to the profile page,
        this can be done by clicking the profile button in the navigation bar.
        <br />
        The user must wait a short moment for the profile page to load. The user
        must click in the field that they want to edit and proceed to write
        inside the textbox. Then, click the "save" button to update the changes!
      </p>
    ),
  },
  {
    title: "Delete a profile",
    content: (
      <p>
        Deleting the profile directly is not possible in this application as
        that is a responsibility of the provider. However, the user can navigate
        to the profile page and scroll to the bottom of the page, and click the
        big red button.
      </p>
    ),
  },
  {
    title: "Add a friend",
    content: (
      <p>
        To add a friend the user needs to navigate to the friends page by
        clicking on the friends button on the navigation. The friends page may
        take a few moments to load.
        <br />
        The user can add a friend by clicking the light blue plus icon located
        at the right on the screen.
        <br />
        Pressing this icon will make a popup appear. In this popup the user must
        select the friends provider positioned in a box at the top of the popup
        and fill their friend user name at the bottom of the popup. It is not
        necessary to write in the complete uri as that is done by selecting the
        friends provider.
        <br />
        Once the right information is filled, to complete adding a friend the
        user must press the add friend button.
        <br />
        Before pressing this button, the user can exit the popup by clicking the
        close button at the bottom right of the popup.
        <br />
        If adding the friend is successful, the user will see a confirmation
        message to add that friend.
        <br />
        After pressing the okay button, the new friend will appear with the rest
        of the friends after a few moments.
      </p>
    ),
  },
  {
    title: "Remove a friend",
    content: (
      <p>
        Just search the desired friend to be deleted and click the button below
        their name, then, confirm the delete action.
      </p>
    ),
  },
  {
    title: "Navigate through folders",
    content: (
      <p>
        To navigate the folders in the user’s pod, the user should click in the
        “my files” button on the navigation bar.
        <br />
        In this view the user should see all the files and folders inside their
        home route, including the public and private folder.
        <br />
        To open the contents of a folder the user should click on the name or
        the icon of the folder. A folder will have a red folder icon. If the
        user clicks the folder correctly, the name of the folder will be
        underlined. The user must wait a few moments to see the content of the
        folder.
      </p>
    ),
  },
  {
    title: "Opening files",
    content: (
      <p>
        Once the user locates a file, they can open it by clicking on it. There
        are different types of files and what a user can do with them depends on
        their type.
        <br />
        Once the file is open at the bottom of the page the user can download
        the file by pressing the download button. The user can exit the file by
        pressing the button close.
        <br />
        If the file is a text file this means that it is editable. This type of
        files will have a blue icon.
        <br />
        Once these files are open. The user can edit them by clicking the edit
        button at the bottom of the page.
        <br />
        The user then can edit the file and can save the changes by clicking the
        save button next to the edit button.
        <br />
        If the file has a green landscape icon the file is an image file, this
        file will be display to the user automatically when they open the file.
        <br />
        If the file has a red icon the file is a multimedia file, a video, for
        instance. This type of file will be displayed but it will not begin to
        play until the user clicks the play icon in the left part of the screen.
        <br />
        If the file has a grey question mark icon this means that the file type
        is unknown. The user can only download this type of files by clicking
        the download button once the user opens the file.
      </p>
    ),
  },
  {
    title: "Browsing catalogue",
    content: (
      <p>
        To browse the catalog the user should navigate to the search view by
        clicking the search button in the navigation bar.
        <br />
        The user must click the magnifying glass icon displayed in the middle of
        the screen, then a search box will appear.
        <br />
        The user can type in the checkbox whatever they wish to browse. The
        application will immediately show several results where the user can
        browse through them.
        <br />
        The user can also have the option to access the popular searches by
        clicking the search box and pressing the option they desire.
        <br />
        To user can filter the search with the different filters available.
        These are color, brand, price, and category
        <br />
        The user can exit the search view by clicking the x red button at the
        top, this will lead the user to the previous search view and from there
        they can navigate to other sections of the application.
      </p>
    ),
  },
  {
    title: "Change language",
    content: (
      <p>
        The user can change the language by clicking on the language icon in the
        navigation in the top of the screen.
      </p>
    ),
  },
];
