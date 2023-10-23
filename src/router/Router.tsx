import React from "react";
import {Route, Routes} from "react-router-dom";
import App from "../App";
import DynamicForm from "../DynamicForm";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/form" element={<DynamicForm />}></Route>
            </Routes>
        </>
    );
};

export default Router;