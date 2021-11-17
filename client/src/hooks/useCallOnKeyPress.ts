import { useCallback } from "react";

interface onKeyPressInterface {
    keyCode: number;
    callback: () => void;
}

export const useCallOnKeyPress = ({
    keyCode,
    callback,
}: onKeyPressInterface) => {
    const handleKeypress = useCallback(
        e => {
            if (e.keyCode === keyCode) {
                if (callback) {
                    callback();
                }
            }
        },
        [callback, keyCode],
    );

    return handleKeypress;
};
