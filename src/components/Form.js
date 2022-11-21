import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import 'hts-react-form/styles/default.css';
import axios from "axios";



const Form = () => {
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
        
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="recipients" class="form-label inline-block mb-2 text-gray-700"
                        >Recipients</label
                        >
                        <input
                            type="email"
                            name="recipients"
                            onChange={handleChangeRecipients}
                            class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            autofill-email
                            text-gray-  700
                            bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                            id="recipients"
                            placeholder="Recipients"
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="subject" class="form-label inline-block mb-2 text-gray-700"
                        >Subject</label
                        >
                        <input
                            type="text"
                            name="subject"
                            onChange={handleChangeSubject}
                            class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                            id="subject"
                            placeholder="Subject"
                        />
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label for="emailbody" class="form-label inline-block mb-2 text-gray-700"
                        >Email body</label
                        >

                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            onChange={handleChangeEmailbody}
                            class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                            id="emailbody"
                            rows="3"
                            name="emailbody"
                            placeholder="Enter your message"
                        >
                        </Editor>
                    </div>
                </div>
                <div class="flex space-x-2 justify-center">
                    <button onClick={
                        handleSubmit
                    }
                        type="button" class="inline-block px-6 py-2.5 bg-green-600 text-black uppercase font-bold text-m leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">send</button>
                </div>
            </form>
        </div>
    )


}

export default Form