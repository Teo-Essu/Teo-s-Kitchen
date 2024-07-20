'use client';

import Link from 'next/link';
import {useFormStatus} from 'react-dom';

export default function MealsFormSubmit(){
    const { pending } = useFormStatus();

    return(
        // <Link href={!pending ? "/meals" : null}>
        <button disabled={pending}>
                {pending ? "Submitting..." : "Share Meal"}            
        </button>
        // </Link>
    );
}