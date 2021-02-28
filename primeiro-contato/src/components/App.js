import React from "react";
import Post from "./Post";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="titulo 1" />
                <Post title="titulo 2" />
                <Post title="titulo 3" />
            </div>
        );
    }
}