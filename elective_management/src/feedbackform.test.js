import React from 'react';
import { mount } from 'enzyme';
import Feedbackform from './feedbackform';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Feedbackform />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h3').text()).toEqual("Feedback Form");
            
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('#stars')).toHaveLength(1);
            expect(wrapper.find('#data')).toHaveLength(1);
            expect(wrapper.find('#desc')).toHaveLength(1);
            expect(wrapper.find('#desc1')).toHaveLength(1);
            expect(wrapper.find('#sub1')).toHaveLength(1);
            expect(wrapper.find('#myForm')).toHaveLength(1);
            expect(wrapper.find('#rating5')).toHaveLength(1);
            expect(wrapper.find('#rating4')).toHaveLength(1);
            expect(wrapper.find('#rating3')).toHaveLength(1);
            expect(wrapper.find('#rating2')).toHaveLength(1);
            expect(wrapper.find('#rating1')).toHaveLength(1);
        });
    });

















    