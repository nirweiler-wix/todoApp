export default interface Todo {
    text : string;
    id : number;
    isDone : boolean;
}

export interface AppProps {
    showInput : boolean,
    openInput : () => void
}