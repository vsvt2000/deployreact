import React from 'react';
import { mount } from 'enzyme';
import Errorpage from './errorpage';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Errorpage />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h1').text()).toEqual("Resource not found 404");
            expect(wrapper.find('h2').text()).toEqual("The requested file could not be found but will be coming soon in: ")
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('#button1')).toHaveLength(1);
            expect(wrapper.find('#demo')).toHaveLength(1);
            //Button should have matching text
           
        });
    });

















    