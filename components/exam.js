import Image from 'next/image'
import examCss from '../styles/exam.module.css'

export default function ExamLayout() {
    return (
        <div className={examCss.flexCenter}>
              <Image
                priority
                src="/images/heart.webp"
                height={144}
                width={144}
              />
        </div>
    )
  }