import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import React, {  useRef  } from 'react';
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import DateClock from '../utils/DateClock'
import Image from 'next/image'
import { setEditorData } from '../../actions/editorDataAction'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

function TuiEditor({}) {
    const router = useRouter()
    const dispatch = useDispatch();
    const editorRef = useRef();
    function handleSubmit() {
        const editorData = editorRef.current.getInstance().getHtml();
        dispatch(setEditorData(editorData))
        return router.push('/tui/viewer')
    }
    return(
        <>
        <div className="bg-purple-200 sticky top-0">
                <div className={styles.container}>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-1 col-span-5">
                            <div className="float-left">
                                <div className="mt-0.5 ml-1.5 mr-2">
                                    <Image
                                    priority
                                    src="/images/profile.jpeg"
                                    className={utilStyles.borderCircle}
                                    height={24}
                                    width={24}
                                    />
                                </div>
                            </div>
                            <DateClock />
                        </div>
                        <div className="col-end-7 col-span-1" onClick={handleSubmit}>
                            <div className="relative">
                                <div className="absolute right-0 m-1">
                                    <img src="/images/upload.png" className='h-5 w-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
            <Editor 
                initialValue=''
                initialEditType='wysiwyg'
                height='70vh'
                ref={editorRef}
            />
            </div>
        </>
    )
}

export default TuiEditor;