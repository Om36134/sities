import React from 'react';

const Form = props => (
    <div>
        <form action="" onSubmit={props.weatheMethod}>
            <input type="text" name="city" placeholder="город"/>
            <button>получить погоду</button>
        </form>
    </div>
);
export  default Form;