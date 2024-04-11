// import { useFormStatus } from 'react-dom'
import ImagePicker from '@/components/img-picker/ImagePicker';
import styleClasses from './page.module.css';
import { shareMeal } from '@/lib/action';
import { SubmitShareMealForm } from '@/components/meals/submitShareMealForm';

export default function ShareMealPage() {
  // const formStatus = useFormStatus();
  // console.log({formStatus});

  return (
    <>
      <header className={styleClasses.header}>
        <h1>
          Share your <span className={styleClasses.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styleClasses.main}>
        <SubmitShareMealForm />
      </main>
    </>
  );
}