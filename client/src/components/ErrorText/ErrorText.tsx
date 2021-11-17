import React from "react";
import { NoResults } from "./styles";

interface ErrorTextInterface {
    Icon: React.ReactElement;
    message: string;
}

export const ErrorText = ({ Icon, message }: ErrorTextInterface) => {
    return (
        <NoResults>
            {Icon}
            <p>{message}</p>
        </NoResults>
    );
};
