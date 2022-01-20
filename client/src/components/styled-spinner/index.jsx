import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const styles = css`
    position: absolute;
    margin: 30% 50%;
`;

export const StyledSpinner = () => {
    return <ClipLoader color={'blue'} css={styles} size={150}/>
};