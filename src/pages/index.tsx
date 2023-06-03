import { Input } from "@/UI/1-atoms/Inputs/Input";
import { Title }  from "@/UI/1-atoms/Text/Title";

export default function Home() {
    return (
        <div className='bg-champagne-white'>
            <Title type='title'>Title</Title>
            <Input className='' type="text" text={'Escribe tu usuario...'} />
            <Title type='subtitle'>Subtitle</Title>

        </div>
    );
}
