'use server'

import { redirect } from 'next/navigation';
import { saveMeal } from "./meal";
import { revalidatePath } from 'next/cache';

export const shareMeal = async (formData) => {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    //In production next js can't store the images inside the public folder during run time
    //so use AWS S3 service to store images on cloud
    //NOTE: In production, Next.js creates and caches a static version of this file during build time. 
    // While this improves performance, it means that saving a new meal won't automatically update the displayed content. 
    // To ensure the displayed meals are up-to-date, we can use the *revalidate* method provided by Next.js.
    await saveMeal(meal);
    revalidatePath('/meals'); //revalidate the cache
    redirect('/meals')
}   