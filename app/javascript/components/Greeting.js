import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../store/actions';

const Greeting = () => {
    const dispatch = useDispatch();
    const greeting = useSelector((state) => state.greeting.greeting);
    const status = useSelector((state) => state.greeting.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRandomGreeting());
        }
    }, [status, dispatch]);

    return <div>{status === "success" ? "Success: " + greeting : "Loading..."}</div>;
};


export default Greeting;