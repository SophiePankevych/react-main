import './App.css';
import {UserCard} from "./components/component1/UserCard";
import {Header} from "./components/component2/Header";
import {Main} from "./components/component3/Main";
import {InfoCard} from "./components/component4/InfoCard";
import {Text} from "./components/component5/Text";
import {TextJSXPhoto} from "./components/component6/TextJSXPhoto";
import {FooterLine} from "./components/component7/FooterLine";

function App() {
  return (
      <div>
        <Header mainName='React' name1='Docs' name2='Tutorial' name3='Blog' name4='Community' name5='v17.0.2'
                name6='Languages' name7='GitHub'/>
        <Main name='React' text='A JavaScript library for building user interfaces' a1Text='Get Started'
              aText='Take the Tutorial >'/>
        <div className='texts'>
          <Text title='Declarative' text1='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.' text2='Declarative views make your code more predictable and easier to debug.'/>
          <Text title='Component-Based' text1='Build encapsulated components that manage their own state, then compose them to make complex UIs.' text2='Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.'/>
          <Text title='Learn Once, Write Anywhere' text1='We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.' text2='React can also render on the server using Node and power mobile apps using React Native.'/>
        </div>
        <TextJSXPhoto title='A Simple Component' info1='React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.'  info2='Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.' image='https://procoders.tech/wp-content/uploads/2020/11/LIVE-JSX-EDITOR-React-js-1024x455.png'/>
        <UserCard username='Sophie Pankevych' info='age: 19, status: false'
                  image='https://www.ixbt.com/img/n1/news/2020/9/2/Tesla-Model_S_large.jpg'/>
        <UserCard username='Nataly Ivaniv' info='age: 22, status: misunderstand'
                  image='https://cdn.motor1.com/images/mgl/3PWOj/s1/audi-rs7-rendering-rs6-avant-styling.jpg'/>
        <UserCard username='Vikulik Kovalchuk' info='age: 25, status: false'
                  image='https://img.automoto.ua/overview/MINI-Cooper-2021-d5e-huge-1843.jpg'/>
        <div className='wrapInfo'>
          <InfoCard
              description='Сьогодні ми власноруч приготуємо дріжджове листкове тісто, а потім зробимо круасани.'
              image='https://devourparisfoodtours.com/wp-content/uploads/best-croissants-in-paris-3.jpg'
              ingredients='Інгредієнти дивись тут' recipe='Клікни, щоб дізнатись рецепт'/>
          <InfoCard
              description='Заварне тісто, шоколадна глазур та смачна начинка – сьогодні мова піде про справжні французькі еклери, які всі ми обожнюємо.'
              image='https://i.pinimg.com/originals/3e/59/7e/3e597e019b00a860d5227348c511cb4f.jpg'
              ingredients='Інгредієнти дивись тут' recipe='Клікни, щоб дізнатись рецепт'/>
          <InfoCard
              description='Сьогодні розповім вам про сінабони. Не бійтеся назви - це смачні булочки з корицею, які обожнюють у всьому світі.'
              image='https://images-gmi-pmc.edge-generalmills.com/473d320b-fa9f-43fb-8fde-410b450dd328.jpg'
              ingredients='Інгредієнти дивись тут' recipe='Клікни, щоб дізнатись рецепт'/>
        </div>
        <FooterLine action1='Get Started' action2='Take the Tutorial >'/>
      </div>
  )
}

export default App;
