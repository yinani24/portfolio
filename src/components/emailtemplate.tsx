import * as React from 'react';
import { EmailTemplateProps } from './interfaces';

export function EmailTemplate({email, subject, body}: EmailTemplateProps){
    return(
        <div>
            <h1>A new person wants to connect with you from your Portfolio website!!</h1>
            <p>This is the email address: {email}</p>
            <p>Subject: {subject}</p>
            <p>Body: {body}</p>
        </div>
    )
}
