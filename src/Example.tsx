import React from "react";

class Example extends React.Component<any, any> {

    componentDidMount() {
        console.log("Description: ", this.refs)
    }

    render() {
        return (
            <div>
                <h1>Welcome to my App</h1>

                <p ref={"description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut explicabo harum, laboriosam nisi quos veniam vitae. Amet at eos, eveniet facilis fuga laborum nemo neque quod rerum sint vitae voluptatem?</p>
            </div>
        )
    }
}

export default Example;