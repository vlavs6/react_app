import React from 'react';

class React{
    constructor(){
        this.props = 7
    }
    somefunction(){
        console.log("Hi")
    }
}

class header extends React{
    constructor(){
        super(this.props)
    } 
}