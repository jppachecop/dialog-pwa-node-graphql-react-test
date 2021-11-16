export interface SearchBarInterface {
    onChange: (value: string) => void;
    onKeyDown: () => void;
    value: string;
}
