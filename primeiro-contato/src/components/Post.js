import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
            ],
            newCommnetText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    //@params e Evento que dispara após o clique, ele contem os valos do campo
    //  tambem
    handleSubmit(e) {
        this.setState({
            //esta adicionando na lista comments, as anteriores mais o novo comment
            comments: [
                ...this.state.comments,
                { text: this.state.newCommnetText }
            ]
        })

        this.setState({ newCommnetText: '' })

        //prevent a browser reload/refresh
        e.preventDefault();
    }


    handleTextChange(e) {
        this.setState({ newCommnetText: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newCommnetText}
                        onChange={this.handleTextChange}></input>
                    <button type="submit">Comentar</button>
                </form>
                {
                    this.state.comments.map((comment, index) => {
                        return <Comment key={index} text={comment.text} />
                    })
                }
            </div>
        );
    }
}