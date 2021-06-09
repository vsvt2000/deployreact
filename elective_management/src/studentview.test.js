import React from 'react';
import { shallow } from 'enzyme';
import Viewstudentelective from './studentviewelective';
    describe('Login component tests', ()=> {
        const wrapper = shallow(<Viewstudentelective />);

        it('should have a btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('button#button1')).toHaveLength(1);


            //Button should have matching text
            
        });
        it('should have a back btn component', ()=> {

            //There should be only one button
            expect(wrapper.find('a#link1')).toHaveLength(1);


            
        });

        it('should have the Amrita Logo', ()=> {

            //There should be only one button
            expect(wrapper.find('img#img1')).toHaveLength(1);

        });

        


        

    });

















    