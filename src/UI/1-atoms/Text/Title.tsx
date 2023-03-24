import { typeTitle } from "./title.model";

export default function Title({ children, className }: typeTitle) {
    return <h1 className={`${className}`}>{children}</h1>;
}
