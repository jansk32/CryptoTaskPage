import React from 'react';
import ErrorComponent from '../noResultsComponent'
import renderer from 'react-test-renderer';


test("Testing for CryptoList No Result", () => {
    const component = renderer.create(
        <ErrorComponent error="noResult" />
    )

    expect(component.toJSON()).toMatchSnapshot();
})


test("Testing for No Connection", () => {
    const component = renderer.create(
        <ErrorComponent  />
    )

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})