import React from "react";
import s from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={s.loaderWrapper}>
            <div className={s.loader}>
                <div className={`${s.loader} ${s.loaderInner}`}></div>
            </div>
        </div>
    );
};

export default Spinner;
