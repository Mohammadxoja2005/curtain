import { FC, useEffect, useState } from 'react'
import styles from "./index.module.scss";
// commons
import TITLE from '../../commons/title';
// image
import MAN from "../../assets/images/man.png";
// icons
import DOWNLOGO from "../../assets/logos/downlogo.png";
// i18n
import { I18nProvider, LOCALES } from '../../i18n';
// translate 
import TRANSLATE from '../../i18n/translate';

const QUESTIONS: FC = () => {
  const data = [
    {
      id: 1,
      question: <TRANSLATE text='ordertime' />,
      answer: "lorem"
    },
    {
      id: 2,
      question: <TRANSLATE text='whereget' />, 
      answer: "lorem"
    },
    {
      id: 3,
      question: <TRANSLATE text='difference' />, 
      answer: "lorem"
    },
    {
      id: 4,
      question: <TRANSLATE text='priceforservice' />, 
      answer: "lorem"
    },
    {
      id: 5,
      question: <TRANSLATE text='sales' />, 
      answer: "lorem"
    },
    {
      id: 6,
      question: <TRANSLATE text='whereservice' />, 
      answer: "lorem"
    },
    {
      id: 7,
      question: <TRANSLATE text='shipment' />, 
      answer: "lorem"
    },
    {
      id: 8,
      question: <TRANSLATE text='paymentmethod' />, 
      answer: "lorem"
    }
  ]

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const questions = document.querySelectorAll("#question");
    const answers: any = document.querySelectorAll('#answer');

    questions.forEach((value, index) => {
      let counter = 1;

      value.addEventListener('click', () => {
        counter++;

        if (counter % 2 == 0) {
          answers[index].dataset.index = true;
          answers[index].style.display = "block";
        } else {
          answers[index].dataset.index = false;
          answers[index].style.display = "none";
        }

      })
    });

  }, []) 

  const LANGUAGE: any = localStorage.getItem('language'); 

  return (
    <I18nProvider locale={LANGUAGE ? LANGUAGE : LOCALES.UZBEK}>
      <div className={styles.questions}>
        <div className={styles.container}>
          <TITLE title={<TRANSLATE text='frequentquestions' />} />

          <div className={styles.questions_div}>
            {data.map(value => {
              return (
                <div className={styles.question_tag_overall} key={value.id}>
                  <div className={styles.questions_tag} id="question">
                    {value.question}
                    <img src={DOWNLOGO} />
                  </div>

                  <div className={styles.questiomn_tag_answer} id="answer" data-index={isOpen}>
                    {value.answer}
                  </div>

                </div>
              )
            })
            }
          </div>

          {/* <img className={styles.questions_img} src={MAN} /> */}
        </div>
      </div>
    </I18nProvider>
  )
}

export default QUESTIONS; 