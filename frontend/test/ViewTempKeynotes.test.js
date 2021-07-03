import React from 'react';
import ViewTempKeynotes from "../components/KeynoteSpeakers/ByAdmin/ViewTempKeynotes";
import renderer  from 'react-test-renderer';

it("API Testing" , async function(){
    const response = new ViewTempKeynotes();
    //console.warn( await response.api());
    var data = await response.api();
    expect(data.inputs[0].id).toEqual("60dc9f6aac541f3de89017c6");//this will pass the test
    expect(data.inputs[0].keynoteName).toEqual("60dc9f6aac541f3de89017c6");//this will fail the test
    expect(data.inputs[0].keynoteName).toEqual("John L. Volakis");//this will fail the test

})


test("Function test", function(){
    let component = renderer.create(<ViewTempKeynotes/>).getInstance();
    let result= component.updateKeynoteTemp();
    expect(result).toBe("Rejected");

})