import React from 'react';

class Form extends React.Component {
    render(){
        return (
            <form action="" onSubmit={this.props.weatheMethod}>
                <input type="text" name="city" placeholder="город"/>
                <button>получить погоду</button>
            </form>
        );
    }
}

export  default Form;