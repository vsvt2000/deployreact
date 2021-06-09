import React from 'react';
import { mount } from 'enzyme';
import Fviewstudentelective from './facultyviewelective';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Fviewstudentelective />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h4').text()).toEqual("View Final List");
            
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('label#label1').text()).toEqual("Department");
            expect(wrapper.find('label#label2').text()).toEqual("Year");

            //Button should have matching text
            expect(wrapper.find('button#subbtn').text()).toEqual("View List");
        });
    });

















    