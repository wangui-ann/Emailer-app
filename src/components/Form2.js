import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'hts-react-form/styles/default.css';
import axios from "axios";



const Form2 = () => {
    const [recipients, setRecipients] = useState('');
    const [subject, setSubject] = useState('');
    const [emailbody, setEmailbody] = useState('');
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);



    const handleChangeRecipients = event => { setRecipients(event.target.value); console.log('value is:', event.target.value); };
    const handleChangeSubject = event => { setSubject(event.target.value); console.log('value is:', event.target.value); };
    const handleChangeEmailbody = event => { setEmailbody(event.target.value); console.log('value is:', event.target.value); };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(recipients)
        console.log(subject)
        console.log(emailbody);



        var formdata = new FormData();
        formdata.append("subject", subject);
        formdata.append("email", recipients);
        formdata.append("emailBody", "emailBody");
        formdata.append("name", "ann");

        axios.post("https://50ef-41-90-64-50.in.ngrok.io/api/v1/sendingEmail", formdata, {
            headers: {
            },
        })

            .then((res) => {
                console.log(res);
            })

            .catch((err) => {
                console.error(err);
            })
    }


    return (
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://www.safaricom.co.ke/images/main.png" alt="Safaricom logo"/>
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Email automation</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                       
                        <div class="mb-4">
                            <label for="recipients" class="sr-only">Recipients</label>
                        <input
                            onChange={handleChangeRecipients}
                            id="recipients" name="recipients" type="email" autocomplete="email" placeholeder="Enter recipients" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div class="mb-4">
                                <label for="subject" class="sr-only">Subject</label>
                        <input
                            onChange={handleChangeSubject}
                            id="subject" name="subject" type="text" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Subject" />
                        </div>
                        <div class="mb-4">
                            <label for="Emailbody" class="sr-only">Email body</label>
                        <textarea
                            onChange={handleChangeEmailbody}
                            id="emailbody" name="emailbody" rows="10" type="textarea" required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm" placeholder="Email body" >
                            </textarea>
                        </div>
                      
                       
                        <div>
                        <button
                            onClick={handleSubmit}
                            type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                   
                                </span>
                                Send communication
                            </button>
                        </div>
                </form>
            </div>
        </div>
    )


}

export default Form2