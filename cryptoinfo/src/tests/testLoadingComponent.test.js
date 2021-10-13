import React from 'react';
import LoadingComponent from '../loadingComponent'
import renderer from 'react-test-renderer';


test("Testing a Details page", () => {
    const component = renderer.create(
        <LoadingComponent />
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

