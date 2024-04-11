'use client'

import ImagePicker from "@/components/img-picker/ImagePicker";
import styleClasses from "@/app/meals/share/page.module.css"
import { shareMeal } from "@/lib/action";
import { useFormStatus } from 'react-dom'


export const SubmitShareMealForm = () => {
    const formStatus = useFormStatus();

    return (
        <form className={styleClasses.form} action={shareMeal} >
            <div className={styleClasses.row}>
                <p>
                    <label htmlFor="name">Your name</label> 
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" required />
                </p>
            </div>
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id="summary" name="summary" required />
            </p>
            <p>
                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    rows="10"
                    required
                ></textarea>
            </p>
            <ImagePicker />
            <p className={styleClasses.actions}>
                <button type="submit">{formStatus.pending ? 'Submitting...' : 'Share Meal'}</button>
            </p>
        </form>
    )
}