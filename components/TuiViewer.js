import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import DateClock from './DateClock'
import Image from 'next/image'
import { useSelector } from 'react-redux';

export default function setTuiViewer() {
    
    const editorData = useSelector((state) => state.editorDataReducer.editorData);

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
                        <div className="col-end-7 col-span-1">    
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
            <Viewer
                initialValue={editorData}
                height='70vh'   
            />
            </div>
        </>
    )
}
