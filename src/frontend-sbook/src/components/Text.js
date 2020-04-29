import React from 'react';

export function TextComponent(props){
    var text=props.text?props.text:"";
    var rows = text.split("\n");
    var elements = rows.map(row => row[0]=="-"?
        <ul><li>{row.substr(1)}</li></ul>:
        <>{row}<br/></>
    );



    return elements
}