import React from 'react';
import { mount } from 'enzyme';
import Changemanagement from './electivechangemanagement';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Changemanagement />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h3').text()).toEqual("Manage Elective Change");
            
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('#button1')).toHaveLength(1);
            expect(wrapper.find('#img1')).toHaveLength(1);
            expect(wrapper.find('label#label1').text()).toEqual("Department");
            expect(wrapper.find('label#label2').text()).toEqual("Year");

            //Button should have matching text
            expect(wrapper.find('button#subbtn').text()).toEqual("\u00a0 \u00a0Allocate");
        });
    });

















    