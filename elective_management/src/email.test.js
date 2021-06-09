import React from 'react';
import { mount } from 'enzyme';
import Sendemail from './emailtry1';
    describe('Admin final list component tests', ()=> {
        const wrapper = mount(<Sendemail />);

        
        

        it('should have a Title component', ()=> {

            //There should be only one button
            expect(wrapper.find('h3').text()).toEqual("Send Notification");
            
        });


        it('should have a select component ,view button', ()=> {

            //There should be only one button
            expect(wrapper.find('#button1')).toHaveLength(1);
            expect(wrapper.find('#button2')).toHaveLength(1);
            expect(wrapper.find('#receiver')).toHaveLength(1);
            expect(wrapper.find('#data2')).toHaveLength(1);
            expect(wrapper.find('#data3')).toHaveLength(1);
            expect(wrapper.find('#subject')).toHaveLength(1);
            expect(wrapper.find('#content')).toHaveLength(1);
            //Button should have matching text
            expect(wrapper.find('button#button2').text()).toEqual("Send Email");
        });
    });

















    