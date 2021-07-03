import renderer from "react-test-renderer";
import React from "react";
import ViewKeynotes from "../components/KeynoteSpeakers/ByEditor/ViewKeynotes";

/*This will be failed if there is a change was done in the following file*/
test("First snapshot test" , ()=>{
    const component = renderer.create(<ViewKeynotes/>);
    let content = component.toJSON();
    expect(content).toMatchSnapshot();
})